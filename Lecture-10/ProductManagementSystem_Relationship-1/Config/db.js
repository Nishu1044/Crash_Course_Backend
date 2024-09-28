const mongoose = require("mongoose")

 async function Connection(){
    try {
        await mongoose.connect(process.env.Mongodb_URL)
        console.log("connected to DB");
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = Connection;