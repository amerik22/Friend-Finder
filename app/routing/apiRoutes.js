var path = require("path");

//Loading data
var friends = require("../data/friends.js");

//Routes
module.exports = function(app){
    //get list of friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    //add new friend to list 
    app.post("/api/friends", function(req,res){
        var newFriend = req.body;
    })
}