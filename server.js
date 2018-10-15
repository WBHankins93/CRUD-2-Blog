// const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./db/db');

const authorsController = require('./controllers/authors');

app.use('/authors', authorsController)

app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.listen(3000, () => {
  console.log('Ayy, Im workin here');
})
