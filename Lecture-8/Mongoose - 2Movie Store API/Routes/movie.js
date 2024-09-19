const express = require("express")
const MovieSchema = require("../Model/movie.model")

const movieRouter = express.Router()



movieRouter.get("/getMovie", async (req,res)=>{
    console.log(req.query);
    let data = await MovieSchema.find()
    res.json({message:"hey there",data})
})


movieRouter.post("/addMovie", async(req,res)=>{
    const {title,year,rating} = req.body;
    try {
        
        const newMovie = await new MovieSchema({
            title,
            year,
            rating
        })
       
        await newMovie.save()
        res.status(201).json({message:"movie added sucessfully",newMovie})

    } catch (error) {
        res.json({message:"error occur while adding",error})
        console.log(error); 
    }
})


movieRouter.get("/filterMovie", async (req,res)=>{

    let queryObj = {};

    if(req.query.title){
        queryObj.title = {"$regex":req.query.title,"$options": "i"}
    }
    if(req.query.rating){
        queryObj.rating = {"$regex":req.query.title}
    }
    console.log(queryObj);



    let sortObj ={};
    if(req.query.sort){
        sortObj[req.query.sort] = req.query.order == "asc"? 1 : -1
    }
    console.log(sortObj);
    

    let page;
    let limit;
    if(req.query.page){
        page = req.query.page
    }
    if(req.query.limit){
        limit = req.query.limit
    }
    console.log("page",page,"limit",limit);
    


    let data = await MovieSchema.find(queryObj).sort(sortObj).skip((page-1)*limit).limit(limit)
    res.json({message:"hey there",data})
})



module.exports = movieRouter