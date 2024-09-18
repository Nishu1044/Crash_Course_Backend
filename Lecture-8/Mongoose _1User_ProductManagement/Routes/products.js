const express = require("express")
const {addProduct,getProduct,updateProduct,deleteProduct} = require("../Controller/product")
const ProductRoute = express.Router()

ProductRoute.post('/addProduct',addProduct)
ProductRoute.get('/getProduct',getProduct)
ProductRoute.put('/updateProduct/:id',updateProduct)
ProductRoute.delete('/deleteProduct/:id',deleteProduct)

module.exports = ProductRoute;

