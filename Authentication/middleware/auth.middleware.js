const jwt = require("jsonwebtoken")


const auth = (req,res, next)=>{
     const token = req.query.token;
     console.log("Received Token:", token); // Log the token to see if it’s being passed
    
    jwt.verify(token, process.env.JWT__SECRET, function(err,decoded){
        if(err){
            console.error("JWT Verification Error:", err.message);
            res.send("unarthorized or login first ")
        }
         if(decoded){
        //  console.log(decoded);
         req.body.username = decoded.name
         req.body.role = decoded.role
         next();
        }
    })

}
//   if(req.query.token == "idcard123"){
//     next()
//   }else{
//     res.send("please login first")
//   }
// }

module.exports = auth;