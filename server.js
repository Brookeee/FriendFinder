// NPM installed 7/18
// Required NPM packages
var express = require("express");
// var path = require("path");
var bodyParser = require('body-parser');

//Express
var app = express();

// PORT 
var PORT = process.env.PORT || 3000;

// access to HTML file
app.use(express.static(".app/public"))
app.use(express.static(__dirname + "/app"));

// Body parsing middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// Application routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//Listening on PORT
app.listen(PORT, function(){
    console.log("Listening on PORT: "+ PORT);
});