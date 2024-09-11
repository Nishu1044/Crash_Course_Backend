const express = require("express")
const userRoute = require("./userRoute")


const PORT = 3000;
const server = express();

server.use(express.json()) // middleware 


server.use("/users",userRoute)
server.get("/",(req,res)=>{
    res.send("hey!")
})


server.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})