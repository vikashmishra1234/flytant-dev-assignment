const Todo = require("../models/TodoModel");

const addTodo = async(req,res)=>{
    
 try {
       const {title,description} = req.body;
       if(!title || !description){
           return res.status(409).json({
               error:"Please add All the Fields",
               success:false
           })
       }
       const newTodo = new Todo(req.body);
       await newTodo.save();
       res.status(200).json({
        success:true,
        message:"Todo Added Successfully !"
       })
 } catch (error) {
    return res.status(500).json({
        success:true,
        error:"Something Went wrong"
    })
 }
}

module.exports = addTodo;