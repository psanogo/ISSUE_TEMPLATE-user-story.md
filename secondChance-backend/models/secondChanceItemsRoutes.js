// /secondChance-backend/routes/secondChanceItemsRoutes.js
const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('../models/db');

const router = express.Router();

// Middleware to get the database connection
router.use(async (req, res, next) => {
  try {
    // The required line for your assignment
    req.db = await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).send({ message: 'Failed to connect to the database.' });
  }
});

// GET all items (Task 6)
// Serves /api/secondchance/items
router.get('/items', async (req, res) => {
  try {
    const collection = req.db.collection('items');
    const items = await collection.find({}).toArray();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single item by ID (Task 6)
// Serves /api/secondchance/items/:id
router.get('/items/:id', async (req, res) => {
  try {
    const collection = req.db.collection('items');
    const item = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ... (POST, DELETE routes will be added below)

module.exports = router;
