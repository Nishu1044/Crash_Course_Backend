const express = require("express")
const userRoute = require("./userRoute")
const TodoRoute = require("./todoRoute")

const PORT = 3000;
const server = express();



// Middleware
server.use(express.json())


server.use("/users",userRoute)
server.use("/todos", TodoRoute)


server.get("/",(req,res)=>{
    res.send("hey!")
})


server.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})