const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{type:String, unique:true},
    price:{type:Number, min:1, default:1},
    category:{type:mongoose.Schema.ObjectId,ref:"categoryData"}
})


const ProductModel = mongoose.model("productData",ProductSchema)
module.exports = ProductModel