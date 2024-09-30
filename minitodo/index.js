const express=require('express')
const connected = require('./db.js')
const userRouter = require('./userRouter.js')
const todoRouter = require('./todoRouter.js')
const app=express()
app.use(express.json())


app.use('/user',userRouter)
app.use('/todo',todoRouter)

app.listen(8081,async()=>{

    try {
        await connected
        console.log("server running")
    } catch (error) {
        console.log(error)
    }
})