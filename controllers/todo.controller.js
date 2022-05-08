const Todo = require('../models/todo.models');


// HEALTHCHECK
module.exports.healthCheck = (req, res) => {
  res.send('Controller is set up.');
}

// GET ALL TODO ITEMS
module.exports.getAll = async (req, res) => {
  const todo = await Todo.find();
  res.send(todo);
}

// POST TODO ITEM
module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  Todo.create({ text })
    .then(() => res.status(200).json(req.body))
    .catch((err) => console.log(err))
}

// UPDATE TODO ITEM
module.exports.updateTodo = async (req, res) => {
  // const { _id, text } = req.body;

  // Todo.findByIdAndUpdate(_id, {text})
  //   .then(() => res.set(201).send('Updated successfully'))
  //   .catch((err) => console.log(err));
  try {
    const { _id, text } = req.body
    const updatedTodo = await Todo.findByIdAndUpdate(_id, { text })
    updatedTodo.save()
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// DELETE ITEM
module.exports.deleteTodo = async(req, res) => {
  const { _id } = req.body;

  Todo.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted"))
    .catch((err) => console.log(err));
  // try {
  //   const { _id } = req.body;

  //   const deletedTodo = await Todo.findByIdAndDelete( _id )
  //   res.set(201).send(deletedTodo);
  // } catch (error) {
  //   res.status(400).json({ message: error.message })
  // }
  
}
