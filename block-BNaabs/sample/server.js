var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('welcome');
});

app.get('/users', (req, res) => {
    res.send('users page');
})

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(username);
})

app.listen(3000, () => {
    console.log('listening to port 3k');
})