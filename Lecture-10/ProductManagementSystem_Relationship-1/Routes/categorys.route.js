const express = require("express")
const ProductModel = require("../Models/products.model")
const CategoryModel = require("../Models/category.model")

const CategoryRouter = express.Router()


CategoryRouter.get("/", async (req,res)=>{

    // req.body
    const data = await CategoryModel.find()
    res.status(200).json({msg:data})
})

CategoryRouter.post("/", async (req,res)=>{

    // req.body
    const data = await CategoryModel.insertMany([req.body])
    res.status(201).json({msg:data})
})

module.exports = CategoryRouter