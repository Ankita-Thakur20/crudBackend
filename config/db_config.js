const { mongoose } = require("mongoose")

const connectDB = async()=>{
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log("Connection Successful", conn.connection.host)
    
    }catch (error) {
        console.log("Database connection failed",)
    }
}
module.exports = connectDB;