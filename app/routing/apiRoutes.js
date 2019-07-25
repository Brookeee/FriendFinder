// Link to Friends.js data
var friendsInfo = require("../data/friends.js");

module.exports = function(app) {
  // GET route to display all celeb friend options
  app.get("/api/friends", function(req, res) {
    res.json(friendsInfo);
  });
  // New Celeb Friend
  var newCelebScore = req.body.score;
  var scoreArr = [];
//   var celebCnt = 0;
  var celebMatch = 0;

  // For loop to run through celeb list

  for (var i = 0; i < friendsInfo.length; i++) {
    var diffScore = 0;

    // Compare Celeb friends and go through scores
    for(var k = 0; k<newCelebScore.length; k++){
        diffScore += (Math.abs(parseInt(friendsInfo[i].score[k]) - parseInt(newCelebScore[k])));
    }
    scoreArr.push(diffScore);
  }

  // Find match 
  for(var i=0; scoreArr.length; i++){
    if(scoreArr[i] <= scoreArr[celebMatch]){
        celebMatch = i;
    }
  }
  // return match data 
  var fMatch = friendsInfo[celebMatch];
  res.json(fMatch);

  // Adds to friendsInfo array 

  friendsInfo.push(req.body);
};


// Logic to handle survey results




// Friend enteries
// function apiRoute(app) {
// app.get("api/friends", function(req, res){
//     res.join(friendsInfo);
// });
// app.post('/api/friends', function(req, res){
//     var friendNew = {
//         name: req.body.name,
//         photo: req.body.photo,
//         score: []
//     };
//     var scroreArr = [];
//     for(var i=0; i < req.body.score.length; i++){
//         scroreArr.push(parseInt(req.body.score[i]))
//     }
//     friendNew.score = scroreArr;

//     var compareScore = [];
//     for(var i=0; i< friendsInfo.length; i++){
//         var current = 0;
//         for(var k=0; k<friendNew.score.length; k++){
//             compareScore += Math.abs(friendNew.score[k] - friendsInfo[i].score)
//         }
//         compareScore.push(compareScore);
//     }
// })
// }
// Export to server.js
// module.exports = apiRoute;
