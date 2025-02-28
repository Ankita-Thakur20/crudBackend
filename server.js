const express = require("express")
const connectDB = require("./config/db_config")
const dotenv = require("dotenv").config()
const multer = require("multer")
// const upload = multer({dest : "uploads/"})

const storage = multer.diskStorage({destination : (req,file,cb)=>{
    cb(null,"./uploads")
},
filename :(req,file,cb)=>{
    cb(null,file.originalname)
}
})

const upload = multer({storage : storage});

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

//multer route
app.post('/upload',upload.single("files"),(req,res)=>{
    console.log(req.file)
    res.send("File uploaded")
})

//Todo Routes
app.use('/api/todo', require('./routes/todoRoutes'))

//port
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})