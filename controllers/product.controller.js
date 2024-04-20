const productModel  = require("../models/productModel")



const viewAllProducts = async (req, res) => {
    try {
    all_products = await productModel.find({})
    res.status(200).json(all_products);
    }
    catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const viewSingleProduct = async (req, res) => {
    try {
    const id = req.params.id
    product = await productModel.findById(id)
    res.status(200).json(product);
    }
    catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const addProduct = async (req, res) => {
    try {
    const newProduct = await productModel.create(req.body)
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } 
    catch (error) {
    res.status(500).json({ message: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
    const id = req.params.id
    const product = await productModel.findByIdAndUpdate(id, req.body)
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
    // return the updated product
    const updated_product = await productModel.findById(id)
    res.status(200).json(updated_product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteProduct = async (req, res) => {
    try {
    const id = req.params.id
    await productModel.findByIdAndDelete(id)
    res.status(200).json({ "message": "Product Deleted Successfully" });
    }
    catch (error) {
    res.status(500).json({ message: error.message });
    }
}



module.exports = { viewAllProducts,viewSingleProduct,addProduct,updateProduct,deleteProduct}