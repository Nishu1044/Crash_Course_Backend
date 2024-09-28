const mongoose = require("mongoose")

const ReservationSchema = new mongoose.Schema({
   bus:[{type:mongoose.Schema.Types.ObjectId, ref:"Bus", required: true}],
    passenger:[{type:mongoose.Schema.Types.ObjectId, ref:"Passenger", required: true}],
    seat_number: { type:Number,required:true},
    reservation:{type:Date,default:Date.now}
})

const ReservationModel = mongoose.model("Reservation",ReservationSchema)
module.exports = ReservationModel

