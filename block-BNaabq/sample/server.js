
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());

app.use(logger('tiny'));

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
});

app.use('/about', (req, res, next) => {
    res.cookie('username', 'xyz');
    res.end('About page')
})
app.get('/', (req, res) => {
    res.send(`welcome to server`);
})

app.listen(3000, () => {
    console.log(`server is listening on port 3k`);
})