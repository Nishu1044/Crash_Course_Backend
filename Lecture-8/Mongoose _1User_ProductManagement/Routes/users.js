const express = require("express")
const {addUser,getUser,updateUser,deleteUser} = require("../Controller/user")

const UserRoute = express.Router()


UserRoute.post('/register',addUser)
UserRoute.get('/getUser',getUser)
UserRoute.put('/updateUser/:id',updateUser)
UserRoute.delete('/deleteUser/:id',deleteUser)

module.exports = UserRoute;