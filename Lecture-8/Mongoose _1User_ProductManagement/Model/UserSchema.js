const mongoose = require("mongoose")

const UserSchemaData = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true },
    password:{type: String, required: true},
    createdAt: {type: Date,default: Date.now,}
})

const UserData = mongoose.model('userdata',UserSchemaData)

module.exports = UserData;