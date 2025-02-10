const express = require('express')
const { getTodos, addTodo, getTodo, updateTodo, removeTodo } = require('../controllers/todoControllers')
const router = express.Router()

router.get('/', getTodos)

router.post('/',addTodo)

router.get('/:id',getTodo)

router.put('/:id',updateTodo)

router.delete('/:id',removeTodo)

module.exports = router;