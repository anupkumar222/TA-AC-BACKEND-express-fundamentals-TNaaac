var express = require('express');

var app = express();

app.use('/about', (req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(3000, () => {
    console.log('Server is listening to port 3k');
})