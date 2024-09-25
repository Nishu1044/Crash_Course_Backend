

const express = require("express");
const UniversityModel = require("../Models/University.model");

const UniversityRouter = express.Router()

UniversityRouter.post("/add",async(req,res)=>{

    try {
        const AllUniversity = await UniversityModel.insertMany([req.body])
        res.status(201).json({message:"Data added sucessfully",AllUniversity})
        console.log(AllUniversity);
        
    } catch (error) {
        res.status(400).json({message:"error occurs while posting",error})
        console.log(error);
        
    }
})

module.exports = UniversityRouter;