const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    todoId:{ type: mongoose.Schema.Types.ObjectId, ref: "todoModel"}
})

const userModel=mongoose.model("userModel",userSchema)


module.exports=userModel