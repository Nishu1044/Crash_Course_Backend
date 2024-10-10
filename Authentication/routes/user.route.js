const express = require("express")
const userRouter = express.Router();
const UserModel = require("../model/user.model")
const jwt = require("jsonwebtoken")


userRouter.post("/register",async(req,res)=>{
    const{name,email,password,age} = req.body
    try {

         const user = new UserModel({
            name,
            email,
            password,
            age
         })
         await user.save();


        res.status(201).json({
            message:'User registered sucessfully'
        })
    } catch (error) {

        res.status(400).json({
            messagae:'Internal server error'
        })
    }
})


userRouter.post("/login",async(req,res)=>{
    const{ email, password}  = req.body;
  try {
    const user = await UserModel.findOne({email,password})
    if(!user){
        res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({ name:user.name, role:user.role}, process.env.JWT__SECRET)

    res.status(201).json({
        message:'User logged in sucessfully',
        token
    })
    
  } catch (error) {
    
    res.status(400).json({
        messagae:'Error occur during login'
    })
  }
})

module.exports = userRouter;