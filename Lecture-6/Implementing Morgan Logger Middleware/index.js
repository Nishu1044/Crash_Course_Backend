const express = require("express")
var morgan = require('morgan')
var fs = require("fs")
var path = require("path")

const PORT = 8181;
app = express()
// app.use(morgan('tiny'))


// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger

app.use(morgan('combined', { stream: accessLogStream }))

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen((PORT),()=>{
    console.log(`server is running in this ${PORT}`);  
})