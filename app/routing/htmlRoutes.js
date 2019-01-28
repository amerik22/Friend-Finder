var path = require("path");

module.exports = function(app){

    //route to home page
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //route to survey page
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //default to home
    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}