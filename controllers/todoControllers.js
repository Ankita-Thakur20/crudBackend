const Todo = require('../models/todoModel')

const getTodos = async(req,res)=>{
const todos = await Todo.find()

if(todos){
    res.status(200).json(todos)
}else{
    res.status(404).json({
        msg:"No Todos found"
    })
}
}

//query to get single todo
const getTodo = async(req,res)=>{
    const todo = await Todo.findById(req.params.id)

    if(todo){
        res.status(200).json(todo)
    }else{
        res.status(404).json({
            msg:"No Todo found"
        })
    }
    }


const addTodo = async(req,res)=>{
   const {title, description}= req.body
   if(!title || !description)
    res.status(400).json({
     msg:"please fill all details"})


//query to store data in db
const newTodo= await Todo.create({title, description})

if (newTodo){
    res.status(201).json(newTodo)
}else{
    res.status(400).json({msg:"Todo not created"
    
    })
}
}

const updateTodo = async(req,res)=>{

const updatedTodo = await Todo.findByIdAndUpdate(req.params.id , req.body,{new:true})
if (updatedTodo){
    res.status(201).json(updatedTodo)
}else{
    res.status(400).json({msg:"Todo not updated"
    
    })
}
}

const removeTodo =async (req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({
        msg : "Todo Deleted",
    })
}

module.exports = {getTodos,getTodo,addTodo,updateTodo,removeTodo};