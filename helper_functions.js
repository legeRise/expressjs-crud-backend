const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDb() {
    try {
        const uri = process.env.MONGODB_URI; // Get MongoDB URI from environment variable
        await mongoose.connect(uri);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = { connectToMongoDb };
