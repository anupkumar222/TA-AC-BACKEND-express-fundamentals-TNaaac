var express = require('express');

var app = express();
var logger = require('morgan');
var cookieParsar =require('cookie-parser');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(cookieParsar());

app.use((req, res, next) => {
    res.cookie('username', 'xyz')
    next();
})

//routes
app.get('/', (req, res) => {
    res.send('<h2>Welcome to express</h2>');
})

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
})

app.post('/form', (req, res) => {
    res.json(req.body);
})

app.post('/json', (req, res) => {
    res.json(req.body);
})

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`)
})

app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
})

app.use((err, req, res, next) => {
    res.status(400).send(err);
})

app.listen(3000, () => {
    console.log('server is listening on port 3k');
})