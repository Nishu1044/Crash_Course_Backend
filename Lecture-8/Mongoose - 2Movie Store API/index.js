const express = require("express")
const Connection = require("./config/db")
// require("dotenv").config()
const movieRouter = require("./Routes/movie")
const PORT = 8282

const app = express()
app.use(express.json());
app.use("/movies",movieRouter)

app.listen(PORT,()=>{
    console.log(`server is running in PORT${PORT}`);
    Connection()
})