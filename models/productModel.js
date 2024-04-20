// Import the mongoose library
const mongoose = require('mongoose');

// Define a schema for the 'users' collection
const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: String, required: true },
},{timestamps: true});

// Create a model for the 'users' collection using the schema
const productModel = mongoose.model('productModel', productSchema);

// Export the User model to be used in other parts of the application
module.exports = productModel;
