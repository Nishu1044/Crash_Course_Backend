const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    code:{type:String,required:true},
    credits:{type:Number,
        validate: {
        validator: function(value) {
        return Number.isInteger(value) && value > 0;  // Check if the value is a positive integer
      }
     }
    },
    semester:{type:String},
    department:{type:mongoose.Schema.Types.ObjectId, ref:"Department",required:true}
   
})

const CourseModel =  mongoose.model("Course",CourseSchema)
module.exports = CourseModel