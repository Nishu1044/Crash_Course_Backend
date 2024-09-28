 const express = require("express"); 
 const BusModel= require("../Models/Bus.model");
 const RouteModel = require("../Models/Route.model");  // ✅ Import Route model to check
 const OperatorModel = require("../Models/Operator.model");  // ✅ Import OperatorModel

 const BusRouter = express.Router()

BusRouter.post("/add", async (req, res) => {
   const data = req.body;
 
   try {
     const route = await RouteModel.findById(data.route);  // ✅ Check if route exists
     if (!route) {
       return res.status(400).json({ msg: "Route not found" });  // ❌ Route doesn't exist, return error
     }


      // Operator ko bhi check karte hain
    const operator = await OperatorModel.findById(data.operator);
    if (!operator) {
      return res.status(400).json({ msg: "Operator not found" });
    }
 
     const newBus = new BusModel(data);  // ✅ Now that the route exists, create the bus
     await newBus.save();
     res.status(201).json({ msg: "Bus added successfully" });
   } catch (error) {
     res.status(400).json({ message: "Error occurred in Bus Router", error });
   }
 });


BusRouter.get("/getOperator/:operatorId",async(req,res)=>{
   const{operatorId} = req.params;
  try {
      
    // // ✅ Log the operatorId to check if it's valid
    // console.log("operatorId: ", operatorId);


    // ✅ Find all buses where 'operator' field matches the operatorId
     const Buses = await BusModel.find({"operator":operatorId}).populate("route");
    
    // console.log("Query result: ", Buses); // Log the query result to see if it's finding any buses


     if(!Buses>0){
       res.status(404).json({ msg: "No buses found for this operator" });
     }
     else{
      res.status(200).json({ Buses });  // ✅ Return the buses in response
      console.log(Buses);
      
     }

  } catch (error) {
    res.status(400).json({ message: "Error occurred while fetching buses", error });
    console.log(error);
    
  }
})
 module.exports = BusRouter


BusRouter.get("/getRoute/:routeid",async(req,res)=>{
  const{routeid} = req.params;
  console.log("RouteID",routeid);
      
  try {
     
    const Buses = await BusModel.find({"route":routeid}).populate("route")
    console.log(Buses);
    

    if (!Buses || Buses.length === 0) {
      return res.status(404).json({ msg: "No buses found for this route" });
    }

    res.status(200).json({ Buses });  //  Return the list of buses
    console.log(Buses);


  } catch (error) {
     res.status(400).json({ message: "Error occurred while fetching buses", error });
    console.log(error);
  }
})


BusRouter.patch("/updateBus/:busID",async(req,res)=>{
  const{busID} = req.params;
  const updatedBusCapacity = req.body;

  try {
    const updatedCapacity = await BusModel.findByIdAndUpdate(busID,updatedBusCapacity,{new:true})

    if(!updatedCapacity){
      return res.status(400).json({message:"BusID is not found"})
    }

    res.status(201).json({message:"Bus updated",updatedCapacity})
    console.log(updatedCapacity);
    

  } catch (error) {
    res.status(400).json({message:"error occurs which updating"})
  }
})




// const express = require("express");
// const BusModel= require("../Models/ Bus.model");

// const BusRouter = express.Router()


// BusRouter.post("/add", async(req,res)=>{
//    const data = req.body;

//    try {
//     const newBus =  new BusModel(data)
//     await newBus.save()
//     res.status(201).json({msg:"data added"})
    
//    } catch (error) {
//     res.status(400).json({message:"error occur in Bus Router",error})
//    }
// })

// module.exports = BusRouter