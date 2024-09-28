const mongoose = require("mongoose")

const PassengerSchema = new mongoose.Schema({
   name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    phone: { type:String},
    reservations:[{type:mongoose.Schema.Types.ObjectId, ref:"Reservation"}]
})

const PassengerModel = mongoose.model("Passenger",PassengerSchema)
module.exports = PassengerModel