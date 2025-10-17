// /secondChance-backend/routes/secondChanceItemsRoutes.js
// (Add these to the file from Task 5 & 6)

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configure multer

// ... (existing router setup and GET routes) ...

// POST a new item with a file (Task 10 & 12)
// The 'upload.single('image')' is the appropriate method for file upload (Task 12)
router.post('/items', upload.single('image'), async (req, res) => {
  try {
    const newItem = {
      ...req.body,
      // In a real app, you would process and store the file path/URL
      image: req.file ? req.file.path : null, 
      date_added: new Date(),
    };
    const collection = req.db.collection('items');
    const result = await collection.insertOne(newItem);
    res.status(201).json({ message: 'Item created successfully', itemId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE an item by ID (Task 11)
router.delete('/items/:id', async (req, res) => {
  try {
    const collection = req.db.collection('items');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
