const express = require("express")
const dotenv = require("dotenv");
const Connection = require("./Config/db");
const ProductRouter = require("./Routes/products.route");
const CategoryRouter = require("./Routes/categorys.route");

dotenv.config();

const PORT =  process.env.PORT || 8585
const app = express()
app.use(express.json())
app.use("/product",ProductRouter)
app.use("/category",CategoryRouter)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    Connection()
})