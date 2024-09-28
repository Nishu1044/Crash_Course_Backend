const express = require("express")
const Connection = require("./Config/db")
const OperatorRouter = require("./Routes/operator")
const RouteRouter = require("./Routes/Route")
const BusRouter = require("./Routes/bus")
const ReservationRouter = require("./Routes/reservation")
const PassengerRouter = require("./Routes/passenger")

require("dotenv").config()


const PORT = process.env.PORT || 8686
const app = express()

app.use(express.json())
app.use("/",OperatorRouter)
app.use("/route",RouteRouter)
app.use("/bus",BusRouter)
app.use("/reservation",ReservationRouter)
app.use("/passenger",PassengerRouter)


app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`)
  Connection()
})