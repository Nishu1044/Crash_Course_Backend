const express=require('express')
const userModel = require('./userSchema')
const userRouter=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')




userRouter.post("/register",async(req,res)=>{

    try {

        bcrypt.hash(req.body.password, 3, async function(err, hash) {
            
            if(err){
                res.status(404).json({msg:"err in register"})
            }

            req.body.password=hash
            const signData=await userModel.create(req.body)

            
       
       res.status(201).json({msg:"register success",signData})
        });

       

    } catch (error) {
        res.status(404).json({msg:"err in register..",})
        console.log(error)
    }
})





userRouter.post('/login',async(req,res)=>{


    try {
        const loginData = await userModel.findOne({ email: req.body.email });
        
        
        if (!loginData) {
            return res.status(400).json({ msg: "User not found" });
        }

        
        const isValid = await bcrypt.compare(req.body.password, loginData.password);
        if (!isValid) {
            return res.status(400).json({ msg: "Invalid password" });
        }

        
        const token = jwt.sign({ userId: loginData._id }, 'shubh',{expiresIn:'1h'});
        const refreshToken=jwt.sign({ userId: loginData._id }, 'shubh',{expiresIn:'1d'});
        return res.status(200).json({ msg: "Login success", token,refreshToken });
    } catch (error) {
        res.status(400).json({msg:"something wrong in login",error})
    }
})




userRouter.post('/refresh-token', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ msg: "Authorization header required" });
    }

    
    const refreshToken = authHeader.split(" ")[1];

    if (!refreshToken) {
        return res.status(401).json({ msg: "Refresh token required" });
    }

    try {
        
        const decoded = jwt.verify(refreshToken, 'shubh');

        
        const newToken = jwt.sign({ userId: decoded.userId }, 'shubh', { expiresIn: '1h' });

        return res.status(200).json({ token: newToken });
    } catch (error) {
        return res.status(403).json({ msg: "Invalid refresh token", error });
    }
  });




module.exports=userRouter