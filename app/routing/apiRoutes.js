// Link to Friends.js data 
var friendsInfo = require("../data/friends.js");

// Friend enteries 
function apiRoute(app) {
app.get("api/friends", function(req, res){
    res.join(friendsInfo);
});
}
// Export to server.js 
module.exports = apiRoute;