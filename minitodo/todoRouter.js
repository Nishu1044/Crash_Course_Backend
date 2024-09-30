const express=require('express')
const todoModel = require('./todoSchema.js')
const authMiddle = require('./authMiddle.js')
const todoRouter=express.Router()


todoRouter.use(authMiddle)


todoRouter.post("/post",async(req,res)=>{

    try {
        const postTodo=await todoModel.create(req.body)
        
        res.status(200).json({msg:"success",postTodo})
    } catch (error) {
        res.status(400).json({msg:"error in posttodo",error})
        console.log(error)
    }
})


todoRouter.get("/get",async(req,res)=>{

    try {
        const getTodo=await todoModel.find({userId:req.body.userId})
        
        res.status(200).json({msg:"success geot the data",getTodo})
    } catch (error) {
        res.status(400).json({msg:"error in posttodo",error})
        console.log(error)
    }
})




todoRouter.put("/put/:id",async(req,res)=>{
    try {
        
        const updateTodo=await todoModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(202).json({ msg: "update todo",updateTodo });
    } catch (error) {
        res.status(400).json({ msg: "Error in updating todo", error });
        console.log(error)
    }
})

todoRouter.delete("/delete/:id",async(req,res)=>{
    try {
        
        const deleteTodo=await todoModel.findByIdAndDelete(req.params.id)
        res.status(202).json({ msg: "delete todo",deleteTodo });
    } catch (error) {
        res.status(400).json({ msg: "Error in deleting todo", error });
        console.log(error)
    }
})



module.exports=todoRouter