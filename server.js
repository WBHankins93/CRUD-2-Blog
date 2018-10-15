const mongoose = require('mongoose');
const express = require('express');
const app = express();




app.get('/', (req, res)=>{
	res.render('index.ejs');
});


app.listen(3000, (req, res) => {
  console.log('Ayy, Im workin here');
})
