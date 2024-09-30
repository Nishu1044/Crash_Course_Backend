const jwt=require('jsonwebtoken')

const authMiddle=(req,res,next)=>{

    const token=req.headers.authorization.split(" ")[1]
    console.log(token)
    const decoded=jwt.verify(token,"shubh")

    if(decoded){
        req.body.userId=decoded.userId
        next()
        // console.log(decoded)
    // console.log(req.body)
    }else{
res.json({msg:'please login first'})
    }
    


}


module.exports=authMiddle