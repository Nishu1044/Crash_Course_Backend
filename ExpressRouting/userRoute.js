const express = require("express")
const router = express.Router();
const fs = require("fs")
// const axios = require('axios');


router.get("/",(req,res)=>{
    res.send("Hey,users!")
})


// details
router.get("/getusers",(req,res)=>{

   let newuser = JSON.parse(fs.readFileSync("db.json","utf-8"))
   res.send(newuser.users)
   console.log(newuser.users)
})


router.post("/adduser",(req,res)=>{

    let newuser = JSON.parse(fs.readFileSync("db.json","utf-8"))
    res.send(newuser.users)
    console.log(newuser.users)

    // Generate a random whole number for the user ID
    const userId = Math.floor(Math.random() * 100); 

    // Create a new user object by combining the random ID and request body data
    const userWithId = { id: userId, ...req.body };

    newuser.users.push(userWithId)
    fs.writeFileSync("db.json",JSON.stringify(newuser))
    res.send("Data Added")
})



// Assuming 'users' is in another file called 'data.js'
const { users } = require('./db.json');


router.put("/updateuser/:id",(req,res)=>{
    const userId = parseInt(req.params.id);
    const {Name, password} = req.body;


    fs.readFile("db.json","utf-8",(err,data)=>{

        const newuserobj1 = JSON.parse(data)
        const newuserobj = newuserobj1.users

        const Filteruser = newuserobj.find(el=>el.id === userId);

        if(Filteruser){
            if(Name) Filteruser.Name = Name
            if(password) Filteruser.password = password

            console.log(Filteruser);

            fs.writeFileSync("db.json",JSON.stringify(newuserobj1,null,2),(err)=>{
                if(err){
                    return res.status(500).json({ message: "Error writing to file" });
                  }
                  res.status(200).json({ message: "Todo updated successfully", newuserobj});
            })
            
        }

    })
  
})




router.delete("/deleteuser/:id", (req, res) => {
    const { id } = req.params;

    // Read the current data from the db.json file
    let userIndex = JSON.parse(fs.readFileSync("db.json", "utf-8"));

    // Filter out the user with the specified id
    userIndex.users = userIndex.users.filter(el => el.id !== Number(id));

    // Write the updated data back to db.json
    fs.writeFileSync("./db.json", JSON.stringify(userIndex, null, 2));

    res.send("User deleted successfully");
});






module.exports = router;
