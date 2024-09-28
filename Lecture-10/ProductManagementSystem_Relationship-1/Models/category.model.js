const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    name:{type:String, unique:true},
    desc:String,
    products:[{type:mongoose.Schema.ObjectId,ref:"productData"}]
})


const CategoryModel = mongoose.model("CategoryData",CategorySchema)
module.exports = CategoryModel