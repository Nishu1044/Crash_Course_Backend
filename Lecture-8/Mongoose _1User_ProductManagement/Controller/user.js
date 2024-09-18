const UserSchemaData = require("../Model/UserSchema")



const addUser = async (req,res)=>{
    const {name,email,password} = req.body;
    try {
        
        const newUser =  await new UserSchemaData({
            name,
            email,
            password
        })
       
        await newUser.save()
        res.status(201).json({messsage:"user register sucessfully",newUser})

    } catch (error) {
        res.json({messsage:"error occur while register",error})
        console.log(error); 
    }
}

const getUser = async (req,res)=>{
    try {
        const allData = await UserSchemaData.find()
        res.status(201).json({messsage:"user fetched",allData})
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
        console.log(error);
    }
}

const updateUser = async (req,res)=>{
    try {
      let id = req.params.id
      let data = await UserSchemaData.findByIdAndUpdate(id,req.body)
      res.json({messgae:"updated done!",data})
    } catch (error) {
        res.json({messgae:"error occur while update",error})
        console.log(error);
    }
}

const deleteUser = async (req,res)=>{
    try {
        let id = req.params.id
        let data = await UserSchemaData.findByIdAndDelete(id)
        res.json({messgae:"data deleted done!",data})
      } catch (error) {
          res.json({messgae:"error occur while deleting",error})
          console.log(error);
      }
}


module.exports = {getUser,addUser,updateUser,deleteUser}