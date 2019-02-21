console.log ("OK");
var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	//req: contain all info about request that was made that triggered this route
	//res: contain all info about what we're going to respond with
	res.send("Hi there!");
});

// "/bye? => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Google bye");
});

app.get("/r/:subredditName", function(req, res) {
	console.log(req.params);
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit + " subreddit!");
});

app.get("*", function(req, res) {
	res.send("YOU ARE A STAR");
});
// "/dog" => "MEOW"
app.listen(3000, function() {
	console.log("Server started");
});
//some changes
