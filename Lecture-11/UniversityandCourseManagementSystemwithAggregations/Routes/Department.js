const express = require("express");
const DepartmentModel = require("../Models/DepartmentModel")
const UniversityModel = require("../Models/University.model");

const DepartmentRouter = express.Router()


DepartmentRouter.post("/addDepart",async(req,res)=>{
    const data = req.body;

    try {

        const UniversityId = await UniversityModel.findById(data.university);
        console.log(UniversityId);
        
        if(!UniversityId){
            return  res.status(400).json({ msg: " UniversityId not found" });
        }

        const newDepartment= new DepartmentModel(data)
        await newDepartment.save();

        res.status(201).json({message:"Data added sucessfully",newDepartment})
        console.log(newDepartment);
        
    } catch (error) {
        res.status(400).json({message:"error occurs while posting department",error})
        console.log(error);
        
    }
})

module.exports = DepartmentRouter;