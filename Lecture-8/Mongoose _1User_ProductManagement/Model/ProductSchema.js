const mongoose = require("mongoose")

const ProductSchemaData = new mongoose.Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    Descption:{type: String, required: true},
    category:{type: String, required: true },
    createdAt: {type: Date,default: Date.now,}
})

const ProductData = mongoose.model('productdata',ProductSchemaData)

module.exports = ProductData;