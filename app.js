const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const commentRoute = require('./api/routes/Comment');
const cors = require('cors');

mongoose.connect('mongodb+srv://ak1394986:3MZKWzKL3rK7et88@cluster0.edq2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

mongoose.connection.on('connected', () => {
  console.log('Connected with database...');
})

mongoose.connection.on('error', (err) => {
  console.log('Connection failed...');
  console.log(err);
})

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(cors());

app.use('/login');
app.use('/register');





app.use((req, res) => {
  res.status(404).json({
    msg: 'Bad Request'
  })
})

module.exports = app
