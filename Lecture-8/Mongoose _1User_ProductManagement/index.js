const express = require("express")
const Connection = require("./Config/db")
require("dotenv").config()
const app = express()
app.use(express.json());

// routes
const UserRoute = require("./Routes/users")
const ProductRoute = require("./Routes/products")

app.use("/user",UserRoute)
app.use("/product",ProductRoute)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
    Connection()
})