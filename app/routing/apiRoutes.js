// Link to Friends.js data
var friendsInfo = require("../data/friends.js");

module.exports = function(app) {
  // GET route to display all celeb friend options
  app.get("/api/friends", function(req, res) {
    res.json(friendsInfo);
  });
  // New Celeb Friend
  var newCeleb = req.body;
  var scoreArr = [];
  //   var celebCnt = 0;
  var celebMatch = 0;

  // For loop to run through celeb list

  for (var i = 0; i < friendsInfo.length; i++) {
    var diffScore = 0;

    // Compare Celeb friends and go through scores
    for (var k = 0; k < newCeleb.length; k++) {
      diffScore += Math.abs(
        parseInt(friendsInfo[i].score[k]) - parseInt(newCelebScore[k])
      );
    }
    scoreArr.push(diffScore);
  }

  // Find match
  for (var i = 0; scoreArr.length; i++) {
    if (scoreArr[i] <= scoreArr[celebMatch]) {
      celebMatch = i;
    }
  }
  // return match data
  var fMatch = friendsInfo[celebMatch];
  res.json(fMatch);

  // Adds to friendsInfo array

  friendsInfo.push(req.body);
};
