const express = require("express");
const OperatorSchema = require("../Models/Operator.model");
const OperatorModel = require("../Models/Operator.model");

const OperatorRouter = express.Router()


OperatorRouter.post("/add", async(req,res)=>{
   const data = req.body;

   try {
    const newOperator =   new OperatorSchema(data)
    await newOperator.save()
    res.status(201).json({msg:"data added"})
    
   } catch (error) {
    res.status(400).json({message:"error",error})
   }
})


OperatorRouter.patch("/updateOperator/:operatorID", async(req,res)=>{
   const {operatorID} = req.params;
   const updatedOperator = req.body;

   console.log(operatorID,"Updated",updatedOperator);
   

   try {
      const filterOperator = await OperatorModel.findByIdAndUpdate(operatorID,
      updatedOperator,{new:true})
      console.log(filterOperator);
      
      if(!filterOperator){
         return res.status(404).json({ message: "Operator not found" });
      }
      console.log(filterOperator);
      res.status(200).json({ message: " updating operator sucessfully", filterOperator});

      
      
   } catch (error) {
      res.status(500).json({ message: "Error updating operator", error: error.message });
   }

})


// OperatorRouter.delete("/deleteBus/:Busid", async(req,res)=>{
//   const{id} = req.params

//   try {
//    const deleteBuses = await OperatorSchema.findByIdAndDelete()
//   } catch (error) {
   
//   }
// })


OperatorRouter.delete("/deleteBus", async (req, res) => {
   const { operatorID, Busid } = req.body;
 
   try {
     // Find the operator by ID
     const operator = await OperatorModel.findById(operatorID);
 
     if (!operator) {
       return res.status(404).json({ message: "Operator not found" });
     }
 
     // Check if the bus exists in the operator's buses array
     const busIndex = operator.buses.indexOf(Busid);
     if (busIndex === -1) {
       return res.status(404).json({ message: "Bus not found in the operator's list" });
     }
 
     // Remove the bus from the operator's buses array
     operator.buses.splice(busIndex, 1);
     await operator.save();
 
     // Remove the bus from any routes where it's assigned
     await RouteModel.updateMany({ buses: Busid }, { $pull: { buses: Busid } });
 
     res.status(200).json({ message: "Bus removed successfully from the operator and routes" });
   } catch (error) {
     res.status(500).json({ message: "Error removing bus", error: error.message });
     console.log(error);
     
   }
 });
 

module.exports = OperatorRouter