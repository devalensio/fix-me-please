const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/api-crud-mongoose', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var books = require('./routes/books');
var transactions = require('routes/transactions');

const app = express();

app.use('/books', books);
app.use('/transactions', transactions);

app.listen(3000)
