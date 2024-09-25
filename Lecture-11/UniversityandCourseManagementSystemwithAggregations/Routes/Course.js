

const express = require("express");
const CourseModel = require("../Models/CourseModel");
const DepartmentModel = require("../Models/DepartmentModel");

const CourseRouter = express.Router()

CourseRouter.post("/addCourse",async(req,res)=>{
    const data = req.body

    try {
       
        const DepartmentID = await DepartmentModel.findById(data.department)
        console.log(DepartmentID);
        if(!DepartmentID){
            return res.status(400).json({message:"departmentID not found"})
        }
        
    
        const AllCourse = await CourseModel.insertMany([req.body])
        res.status(201).json({message:"Data added sucessfully",AllCourse})
        console.log(AllCourse);
        
    } catch (error) {
        res.status(400).json({message:"error occurs while posting",error})
        console.log(error);
        
    }
})

module.exports = CourseRouter;