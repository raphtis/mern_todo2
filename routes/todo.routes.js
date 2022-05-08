const { Router } = require('express');

const { getAll, healthCheck, saveTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller'); 

const router = Router();

router.get('/healthcheck', healthCheck);

router.get('/get-todo', getAll);
router.post('/save-todo', saveTodo);
router.put('/update-todo', updateTodo);
router.post('/delete-todo', deleteTodo);


module.exports = router;