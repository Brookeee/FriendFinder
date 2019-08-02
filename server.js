// NPM installed 7/18
// Required NPM packages
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

//Express
var app = express();

// PORT 
var PORT = process.env.PORT || 8080;

// access to CSS file
app.use(express.static(__dirname + "./app/public"));

// Body parsing middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// Application routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"));
require(path.join(__dirname, "./app/routing/htmlRoutes.js"));


//Listening on PORT
app.listen(PORT, function(){
    console.log("Listening on PORT: http://localhost:"+ PORT);
});