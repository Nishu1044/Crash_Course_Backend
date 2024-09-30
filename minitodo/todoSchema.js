const mongoose=require('mongoose')


const todoSchema=mongoose.Schema({

title : {type:String,required:true},
description : {type:String},
completed : {type:Boolean,default:false},
isPublic :{type:Boolean,default:false},

// userId : {type:mongoose.Schema.ObjectId,ref:"todoUserModel"}
userId: { type: mongoose.Schema.Types.ObjectId, ref: "userModel"}

})

const todoModel=mongoose.model("todomodel",todoSchema)


module.exports=todoModel

