const mongoose = require("mongoose")

const RouteSchema = new mongoose.Schema({
    start_location:{type:String,required:true},
    end_location:{type:String,required:true},
    distance:{type:Number, required:true},
    buses:[{type:mongoose.Schema.Types.ObjectId, ref:"Bus"}]
})

const RouteModel = mongoose.model("Route",RouteSchema)
module.exports = RouteModel