const mongosse = require("mongoose")

async function Connection(){
    try {
        await mongosse.connect(process.env.MongoDB_URL)
        console.log("Connected to DB");
        
    } catch (error) {
        console.log(error);  
    }
}

module.exports = Connection