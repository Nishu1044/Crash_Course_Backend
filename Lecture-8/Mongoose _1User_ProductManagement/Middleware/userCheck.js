// const UserSchemaData = require("../Model/UserSchema")

// const checkDuplicateUser = async(req,next,res)=>{
//     let user = await UserSchemaData.findOne({email:req.body.email})
//     if(user){
//         res.status(400).json({message:"user allready present"})
//     }else{
//         next()
//     }
// }

// module.exports = checkDuplicateUser

const UserSchemaData = require("../Model/UserSchema");

const checkDuplicateUser = async (req, res, next) => {
    try {
        const user = await UserSchemaData.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "User already present" });
        }
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(500).json({ message: "Error checking for duplicate user", error });
    }
};

module.exports = checkDuplicateUser;
