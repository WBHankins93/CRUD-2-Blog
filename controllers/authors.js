const express = require('express');
const router = express.Router();
const Author = require('../model/authors');

router.get('/', (req, res) => {
  Author.find({}, (err, foundAuthors) => {
    res.render('authors/index.ejs', {
      authors: foundAuthors
    });
  })
})

router.get('/new', (req, res) => {
  res.render('/authors/new.ejs');
})

router.get('/:id', (req, res) => {
  Author.findById(req.params.id, (err, authorFound) => {
    res.render('authors/show.ejs', {
      author: authorFound
    })
  })
})

router.get('/:id/edit', (req, res) => {
  Author.findById(req.params.id, (err, editAuthor) => {
    res.render('authors/edit.ejs', {
      author: editAuthor
    })
  })
});

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
});

router.delete('/:id', (req, res) => {
  Author.findByIdAndRemove(req.params.id, (err, deleted) => {
    res.redirect('/authors')
  })
})

module.exports = router;
