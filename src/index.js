const path = require('path')
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan'); //import library
const route = require('./routes');
const db = require('./config/db');
//Connect to DB:
db.connect();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
  extended: true,
})); //send get
app.use(express.json()); //send post
//XMLHttpRequest, fetch, axios


//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname,'resources','views'));
// Route init
route(app);


// Run the program : chạy chương trình
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});