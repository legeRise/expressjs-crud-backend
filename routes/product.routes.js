const express = require("express")
const productRouter  = express.Router()
const { viewAllProducts,viewSingleProduct,addProduct,updateProduct,deleteProduct} = require("../controllers/product.controller")


productRouter.get('/:id',viewSingleProduct)
productRouter.get('/',viewAllProducts)
productRouter.post('/add',addProduct)
productRouter.put('/update/:id',updateProduct)
productRouter.delete('/delete/:id',deleteProduct)


module.exports = productRouter;  //   doing { productRouter }  gives error