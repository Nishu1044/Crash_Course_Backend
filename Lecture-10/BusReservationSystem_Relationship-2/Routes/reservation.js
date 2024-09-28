const express = require("express");
const ReservationModel= require("../Models/Reservation.model");

const ReservationRouter = express.Router()


ReservationRouter.post("/add", async(req,res)=>{
   const data = req.body;

   try {
    const newReservation =  new ReservationModel(data)
    await newReservation.save()
    res.status(201).json({msg:"data added"})
    
   } catch (error) {
    res.status(400).json({message:"error",error})
   }
})


ReservationRouter.get("/getReservation/:reservationID",async(req,res)=>{
   const{reservationID} = req.params;
   console.log(reservationID);

   try {
      const Reservation = await ReservationModel.findById(reservationID)
      .populate("bus")
      .populate("passenger")
      console.log(Reservation);

      if(!Reservation){
         return res.status(404).json({ msg: "Reservation not found" });
      }

      res.status(200).json({ Reservation });

   } catch (error) {
    res.status(400).json({ message: "Error occurred while fetching reservation", error });
    console.log(error);
   }
   
})



ReservationRouter.patch("/updateReservation/:reservationID",async(req,res)=>{
   const{reservationID} = req.params;
   const updatedReservationSeat = req.body;
 
   try {
     const updatedSeat = await ReservationModel.findByIdAndUpdate(reservationID,updatedReservationSeat,{new:true})
 
     if(!updatedSeat){
       return res.status(400).json({message:"ReservationID is not found"})
     }
 
     res.status(201).json({message:"Reservation updated",updatedSeat})
     console.log(updatedSeat);
     
 
   } catch (error) {
     res.status(400).json({message:"error occurs which updating"})
   }
 })
 
module.exports = ReservationRouter