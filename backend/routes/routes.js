const express = require('express');
const addTodo = require('../Controller/addTodo')
const getTodo = require('../Controller/getTodo');
const updateTodo = require('../Controller/updateTodo');
const deleteTodo = require('../Controller/deleteTodo');

const Router = express.Router();

Router.post('/addtodo',addTodo)
Router.get('/gettodo',getTodo)
Router.put('/updatetodo',updateTodo);
Router.delete('/deletetodo',deleteTodo)

module.exports = Router;