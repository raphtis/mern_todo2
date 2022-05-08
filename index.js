//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// USING EXPRESS/JSON TO GET DATA INTO JSON FORMAT
app.use(express.json());
app.use(cors());


// ROUTES
const TodoRoute = require('./routes/todo.routes');
app.use('/', TodoRoute);


// CONNECT TO MONGODB
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

// APP PORT AND CONNECT TO SERVER
app.listen(PORT, () => console.log('Server connected!'))