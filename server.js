/// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.use(express.static("public"));


app.get('/', function(req, res){
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/alien', function(req, res){
    
    var id = req.query.id;
    res.send(id);
});

app.get('/alien/:id', function(req, res){
    
    var id = req.params.id;
    res.send(id);
});

var listener = app.listen(process.env.PORT, function(req, res){
    console.log('App running...');
    console.log('open http://localhost:' + process.env.PORT + '/')
});