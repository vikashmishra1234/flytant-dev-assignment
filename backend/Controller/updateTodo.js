const Todo = require("../models/TodoModel");

const updateTodo = async (req, res) => {
  try {
    const  title = req.body.newTitle;
    const description = req.body.newDescription;
    const { id } = req.query;
  
    if (!title || !description || !id) {
      return res.status(400).json({ // Changed status code to 400 for bad request
        error: "Please add all the fields",
        success: false,
      });
    }

    // Perform the update operation
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
    );

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Updated successfully!",
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

module.exports = updateTodo;
