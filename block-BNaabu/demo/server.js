var express = require('express');
var app = express();

app.use('/', (req, res, next) => {
    res.send('welcome to server');
    next();
});

app.use('/about', (req, res, next) => {
    res.send('welcome to about page');
    next();
});

app.listen(3000, () => {
    console.log('server is listening on port 3k');
})