const mongoose = require("mongoose")

async function Connection(){
  try {
    await mongoose.connect("mongodb://localhost:27017/movieAPIstore")
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
}

module.exports = Connection