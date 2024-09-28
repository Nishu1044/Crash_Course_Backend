const mongoose = require("mongoose")

const OperatorSchema = new mongoose.Schema({
    name:{type:String,unique:true},
    contact_info:{type:String},
    buses:[{type:mongoose.Schema.Types.ObjectId, ref:"Bus"}]
})

const OperatorModel = mongoose.model("Operator",OperatorSchema)
module.exports = OperatorModel