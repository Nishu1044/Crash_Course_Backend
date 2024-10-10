const express = require("express")
const dotenv = require("dotenv").config();
const connection = require("./config/db")
const userRouter = require("./routes/user.route")
const auth = require("./middleware/auth.middleware")
const checkAdmin = require("./middleware/checkAdmin.middleware")

const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json());
app.use('/user',userRouter)

app.get("/",(req,res)=>{
    res.send("hello world")
})


app.get("/dashboard",(req,res)=>{
   res.send("dashboard...")
})

app.get("/productData",(req,res)=>{
    res.send("productData..")  
})

app.get("/cart",auth,(req,res)=>{
        res.send("cart data....")
})

app.get("/checkOut",auth,(req,res)=>{
      res.send("checkOut data....")  
})


app.get("/update",[auth,checkAdmin],(req,res)=>{
    res.send("update data....")  
})

app.get("/delete",auth,(req,res)=>{
    res.send("deleted data....")  
})

app.listen(PORT,async()=>{
    try {
        await connection
        console.log(`server is rurring ${PORT}`);
        
    } catch (error) {
        console.log('Eroor connecting to db',error);
        
    }
    
})