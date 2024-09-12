const express = require("express")
const Todorouter = express.Router()
const fs = require("fs")


Todorouter.get("/",(req,res)=>{
    res.send("Hey,todo!")
})


// details
Todorouter.get("/getTodo",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
     if(err){
         res.status(500).json({message:"Erorr inreading file"})
     }
 
     const todoData = JSON.parse(data).todos || []
     res.json(todoData)
     console.log(todoData);
     
    })
 })


 
 Todorouter.post("/addTodo",(req,res)=>{

    let newTodo = JSON.parse(fs.readFileSync("db.json","utf-8"))
    res.send(newTodo.todos)
    console.log(newTodo.todos)

    // Generate a random whole number for the user ID
    const todoId = Math.floor(Math.random() * 100); 

    // Create a new user object by combining the random ID and request body data
    const todoWithId = { id: todoId, ...req.body };

    newTodo.todos.push(todoWithId)
    fs.writeFileSync("db.json",JSON.stringify(newTodo))
    res.send("Data Added")
})


// Assuming 'todos' is in another file called 'data.js'
const { todos } = require('./db.json');

Todorouter.put("/updateTodo/:id",(req,res)=>{
    const {Project,CompleteDay} = req.body;
    const todoId = parseInt(req.params.id);

    fs.readFile("db.json","utf-8",(err, data)=>{
      
        const newObjTodo1 = JSON.parse(data)
        const newObjTodo = newObjTodo1.todos
        console.log(newObjTodo,"previous data");
      
        const FilterTodo = newObjTodo.find(el=> el.id === todoId)
            console.log(FilterTodo);

        
            if(FilterTodo){
                if(Project) FilterTodo.Project = Project
                if(CompleteDay) FilterTodo.CompleteDay = CompleteDay
           

                console.log(newObjTodo,"updated data");


                fs.writeFileSync("db.json",JSON.stringify(newObjTodo1, null, 2),(err)=>{
                    if(err){
                      return res.status(500).json({ message: "Error writing to file" });
                    }
                    res.status(200).json({ message: "Todo updated successfully", newObjTodo});
                  })
           
            }  
            
    })

})



Todorouter.delete("/deleteTodo/:id", (req, res) => {
    const { id } = req.params;

    // Read the current data from the db.json file
    let todoIndex = JSON.parse(fs.readFileSync("db.json", "utf-8"));

    // Filter out the user with the specified id
    todoIndex.todos = todoIndex.todos.filter(el => el.id !== Number(id));

    // Write the updated data back to db.json
    fs.writeFileSync("./db.json", JSON.stringify(todoIndex, null, 2));

    res.send("User deleted successfully");
});





module.exports = Todorouter;





// router.delete("/deleteuser/:id", (req, res) => {
//     const { id } = req.params;

//     // Read the current data from the db.json file
//     let userIndex = JSON.parse(fs.readFileSync("db.json", "utf-8"));

//     // Filter out the user with the specified id
//     userIndex.users = userIndex.users.filter(el => el.id !== Number(id));

//     // Write the updated data back to db.json
//     fs.writeFileSync("./db.json", JSON.stringify(userIndex, null, 2));

//     res.send("User deleted successfully");
// });