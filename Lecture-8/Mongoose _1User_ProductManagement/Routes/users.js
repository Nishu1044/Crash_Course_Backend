const express = require("express")
const {addUser,getUser,updateUser,deleteUser} = require("../Controller/user")
const checkDuplicateUser = require("../Middleware/userCheck")
const UserRoute = express.Router()


UserRoute.post('/register',checkDuplicateUser,addUser)
UserRoute.get('/getUser',getUser)
UserRoute.put('/updateUser/:id',updateUser)
UserRoute.delete('/deleteUser/:id',deleteUser)

module.exports = UserRoute;