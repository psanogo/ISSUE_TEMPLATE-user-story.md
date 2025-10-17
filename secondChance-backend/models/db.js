// secondChance-backend/models/db.js
const { MongoClient } = require('mongodb');

// It's a best practice to store your connection string in an environment variable
const connectionString = process.env.MONGO_URI || "your_mongodb_connection_string";

const client = new MongoClient(connectionString);

let db;

const connectToDatabase = async () => {
  if (db) {
    return db;
  }
  try {
    // The required line for your assignment
    await client.connect();
    console.log('Successfully connected to MongoDB.');
    
    db = client.db('secondChance'); // Use your database name
    return db;
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit if we can't connect to the DB
  }
};

module.exports = { connectToDatabase };
