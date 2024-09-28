const express = require("express");
const PassengerSchema = require("../Models/Passenger.model");

const PassengerRouter = express.Router()


PassengerRouter.post("/add", async(req,res)=>{
   const data = req.body;

   try {
    const newPassenger =   new PassengerSchema(data)
    await newPassenger.save()
    res.status(201).json({msg:"data added"})
    
   } catch (error) {
    res.status(400).json({message:"error",error})
   }
})

module.exports = PassengerRouter