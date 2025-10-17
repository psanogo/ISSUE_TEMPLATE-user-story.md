// /secondChance-backend/app.js
const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./routes/secondChanceItemsRoutes');
const searchRoutes = require('./routes/searchRoutes'); // Import search routes

const app = express();

app.use(cors());
app.use(express.json());

// Register the main item routes
app.use('/api/secondchance', itemsRoutes);

// The required route that serves /api/secondchance/search (Task 8)
app.use('/api/secondchance/search', searchRoutes);

module.exports = app;
