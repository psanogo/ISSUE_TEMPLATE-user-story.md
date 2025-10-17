// /secondChance-backend/routes/searchRoutes.js
const express = require('express');
const { connectToDatabase } = require('../models/db');

const router = express.Router();

// Search endpoint that filters by category
router.get('/', async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ message: 'Category query parameter is required.' });
  }

  try {
    const db = await connectToDatabase();
    const collection = db.collection('items');
    
    // The required code to filter on category
    const query = { category: { $regex: category, $options: 'i' } }; // Case-insensitive search
    const items = await collection.find(query).toArray();
    
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
