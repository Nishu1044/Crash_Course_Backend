const express = require("express");
const RouteModel = require("../Models/Route.model");

const RouteRouter = express.Router()


RouteRouter.post("/add", async(req,res)=>{
   const data = req.body;

   try {
    const newRoute =   new RouteModel(data)
    await newRoute.save()
    res.status(201).json({msg:"data added"})
    
   } catch (error) {
    res.status(400).json({message:"error occurs in route router",error})
   }
})

RouteRouter.patch("/updateRoute/:routeID", async(req,res)=>{
   const {routeID} = req.params;
   const updatedRoute = req.body

   try {

      const updateDataRoute = await RouteModel.findByIdAndUpdate(routeID,updatedRoute,{new:true})
      if(!updateDataRoute){
        return res.status(400).json({message:"routID not found"})
      }

      res.status(201).json({message:"updated done..",updateDataRoute})
      console.log(updateDataRoute);
      
      
   } catch (error) {
      res.status(400).json({message:"Error occur while updating",error})
   }
})

module.exports = RouteRouter