// Link to Friends.js data
var friends = require("../data/friends.js");

module.exports = function(app) {
  // GET route to display all celeb friend options
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log(friends);
  });

  app.get("/api/friends", function(res, req) {
    // New Celeb Friend
    var newScores = req.body.score;
    var scoreArray = [];
    var friendCnt = 0;
    var bestMatch = 0;

    // For loop to run through celeb list possiblities

    for (var i = 0; i < friends.length; i++) {
      var totalDif = 0;
      for (var c = 0; c < newScores.length; c++) {
        totalDif += Math.abs(
          parseInt(friends[i].score[c] - parseInt(newScores[c]))
        );
      }
      scoreArray.push(totalDif);
    }

    for(var i = 0; i<scoreArray.length; i++){
      if(scoreArray[i] <= scoreArray[bestMatch]){
        bestMatch = i; 
      }
    }

    var newBff = friends[bestMatch];
    res.json(newBff);

    friends.push(req.body);
  });
};
