// // Installed 7/18
var path = require("path");

// // Home Routing 
module.exports = function(app){
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

// // Survey
app.get('*',function (req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});
};