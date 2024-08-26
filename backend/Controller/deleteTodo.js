const Todo = require("../models/TodoModel");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: "Todo ID is required.",
      });
    }

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        success: false,
        error: "Todo not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully!",
      deletedTodo, 
    });
  } catch (error) {
    console.error(`Error deleting todo: ${error.message}`);
    res.status(500).json({
      success: false,
      error: "Internal server error. Please try again later.",
    });
  }
};

module.exports = deleteTodo;
