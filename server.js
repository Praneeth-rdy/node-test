// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// init sqlite db
//const dbFile = "./.data/sqlite.db";
//const exists = fs.existsSync(dbFile);
//const sqlite3 = require("sqlite3").verbose();
//const db = new sqlite3.Database(dbFile);


/*
// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(() => {
    if (!exists) {
      db.run(
        "CREATE TABLE Dreams (id INTEGER PRIMARY KEY AUTOINCREMENT, dream TEXT)"
      );
      console.log("New table Dreams created!");
  
      // insert default dreams
      db.serialize(() => {
        db.run(
          'INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")'
        );
      });
    } else {
      console.log('Database "Dreams" ready to go!');
      db.each("SELECT * from Dreams", (err, row) => {
        if (row) {
          console.log(`record: ${row.dream}`);
        }
      });
    }
  });
*/



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


// helper function that prevents html/css/script malice
const cleanseString = function(string) {
    return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

var listener = app.listen(process.env.PORT, function(req, res){
    console.log('App running...');
    console.log('open http://localhost:' + process.env.PORT + '/')
});