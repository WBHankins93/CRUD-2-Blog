const express = require('express');
const router = express.Router();
const Author = require('../model/authors')

router.get('/', (req, res) => {
  res.render('authors/index.ejs');
})

module.exports = router;
