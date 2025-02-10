const express = require("express")
const connectDB = require("./config/db_config")
const dotenv = require("dotenv").config()

const PORT=process.env.PORT || 5000
const app = express()

//DB connection
connectDB();

//body Parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Route
app.get("/",(req,res)=>{
    res.send("Welcome")
})

//Todo Routes
app.use('/api/todo', require('./routes/todoRoutes'))

//port
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})