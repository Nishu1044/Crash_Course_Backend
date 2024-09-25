const express = require("express");
const Connection = require("./Config/db");
const UniversityRouter = require("./Routes/University");
const DepartmentRouter = require("./Routes/Department");
const CourseRouter = require("./Routes/Course");

const PORT = 8686;
const app = express();



app.use(express.json());
app.use("/",UniversityRouter)
app.use("/",DepartmentRouter)
app.use("/",CourseRouter)

app.listen(PORT,(req,res)=>{
    console.log(`server is running on ${PORT}`);
    Connection()
})