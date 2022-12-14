var express = require('express');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
const exp = require('constants');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
    res.cookie('username', 'xyz');
    next();
})

//routes
app.get('/', (req, res) => {
    res.send('successfully running the route');
})

app.get('/users', (req, res) => {
    res.send('user is in waiting list');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
})

app.use((req, res, next) => {
    res.send('Page Not Found');
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(4000, () => {
    console.log('server is listening on port 4k');
})