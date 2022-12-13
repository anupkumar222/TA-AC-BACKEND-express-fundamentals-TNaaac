const { urlencoded } = require('express');
var express = require('express');
var app = express();

//middlewares

app.use(express());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/new', (req, res) => {
    res.sendFile(__dirname + "/new.html");
})

app.post('/new', (req, res) => {
    res.json(req.body);
})

app.get('/users/:username', (req, res) => {
    var username = req.params.username;
    res.send(username);
})

app.listen(3000, () => {
    console.log('listening to port 3k');
})