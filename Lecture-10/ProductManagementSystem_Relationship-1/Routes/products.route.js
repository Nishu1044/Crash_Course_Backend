const express = require("express")
const ProductModel = require("../Models/products.model")

const ProductRouter = express.Router()


ProductRouter.get("/", async (req,res)=>{

    // req.body
    const data = await ProductModel.find().populate("category")
    res.status(200).json({msg:data})
})

ProductRouter.post("/", async (req,res)=>{

    // req.body
  try {
    const data = await ProductModel.insertMany([req.body])
    console.log(data);
    
    res.status(201).json({msg:data})
    
    
  } catch (error) {
    res.status(400).json({msg:error})
  }
})

module.exports = ProductRouter