const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    rating:Number
})

const movieModel = mongoose.model("movie",MovieSchema)

module.exports = movieModel