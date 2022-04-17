const path = require('path')
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan'); //import library
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources/views'));
// Route
app.get('/', (req, res) => {
  res.render('home'); //Nếu không muốn lấy layout thì render false;
  //res.render('home',{layout: false});
});

app.get('/tin-tuc', (req, res) => {
  res.render('news'); 
});
// Run the program : chạy chương trình
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});