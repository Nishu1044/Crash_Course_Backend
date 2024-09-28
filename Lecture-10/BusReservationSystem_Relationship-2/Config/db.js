const mongoose = require("mongoose")

async function Connection(){
    
try {
    await mongoose.connect(process.env.Mongo_URL)
    console.log("connected to db");
    
} catch (error) {
    console.log(error)
}
    
}

module.exports = Connection;