const mongoose = require("mongoose");

async function Connection(req,res){
    try {
        await mongoose.connect("mongodb://localhost:27017/AggregationRelationShip")
        console.log("Conneted to DB"); 
    } catch (error) {
        res.status(400).json({ message: "Error while connecting to DB", error });
    }
}

module.exports = Connection;