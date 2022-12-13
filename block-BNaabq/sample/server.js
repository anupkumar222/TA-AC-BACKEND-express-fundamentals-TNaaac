const { urlencoded } = require('express');
var express = require('express');
var logger = require('morgan');
var app = express();

// app.use((req, res, next) => {
//     console.log(req.method, req,url)
//     next();
// })

app.use(logger('dev'));

app.use(express.json());

app.use(urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    req.send(`welcome to server`);
})

app.listen(3000, () => {
    console.log(`server is listening on port 3k`);
})