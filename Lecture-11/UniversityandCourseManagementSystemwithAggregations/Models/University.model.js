const mongoose = require("mongoose")

const UniversitySchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    location:{type:String},
    established:{type:Date,required:true,validate:{
        validator:function(vali){
            return vali < Date.now();
        },
        message:"Established date must be in the past"
    }},
    departments:[{type:mongoose.Schema.Types.ObjectId, ref:"Department"}]
})

const UniversityModel =  mongoose.model("University",UniversitySchema)
module.exports = UniversityModel