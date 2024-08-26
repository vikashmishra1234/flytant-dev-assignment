const Todo = require("../models/TodoModel")

const getTodo = async(req,res)=>{
    try {

        const todos = await Todo.find({}).sort({ createdAt: -1 });
        if(!todos){
            return res.status(404).json({
                error:"Unable to found the todos",
                success:false
            })
        }
        return res.status(200).json({
            todos,
            success:true
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:'Something went wrong'
        })
    }  
}
module.exports = getTodo;