const mongoose = require("mongoose")

const DepartmentSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    faculty:{type:String,required:true},
    established_year:{type:Number,min: 1000, 
        max: new Date().getFullYear(), // Ensures the year is not greater than the current year
    },
    university:{type:mongoose.Schema.Types.ObjectId, ref:"University",required:true},
    courses:[{type:mongoose.Schema.Types.ObjectId, ref:"Course"}]
   
})

const DepartmentModel =  mongoose.model("Department",DepartmentSchema)
module.exports = DepartmentModel