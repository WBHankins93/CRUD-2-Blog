// const mongoose = require('mongoose');
const express = require('express');
const app = express();

require('./db/db');


app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.listen(3000, () => {
  console.log('Ayy, Im workin here');
})
