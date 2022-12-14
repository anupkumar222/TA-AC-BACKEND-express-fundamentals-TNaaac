var express = require('express');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.listen(4000, () => {
    console.log('server is listening on port 4k');
})