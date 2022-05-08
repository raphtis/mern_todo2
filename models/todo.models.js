const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String, 
    required: true, 
    minlength: [3, 'Todo item must be at least 3 characters.']
  }
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema)