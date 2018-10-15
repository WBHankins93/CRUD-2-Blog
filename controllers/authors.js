const express = require('express');
const router = express.Router();
const Author = require('../model/authors');

router.get('/', (req, res) => {
  res.render('authors/index.ejs');
})

router.get('/new', (req, res) => {
  res.render('/authors/new.ejs');
})

router.post('/', (req, res) => {
  Author.create(req.body, (err, createdAuthor) => {
    console.log(req.body, 'this is req.body');
    consle.log(createdAuthor, 'createdAuthor');
    if (err) {
      console.log(err)
    } else {
      res.redirect('/authors')
    }
  })
})

module.exports = router;
