var app = require("express")();
var http = require("http").Server(app);

var io = require("socket.io")(http);

var config = require("./config.js");

var Twit = require("twit");

var T = new Twit(config);


//Listen on the twitter stream for tweets containing the phrase "yolo"
var stream = T.stream('statuses/filter', { track: 'yolo' }, function(e){
  console.log(e);
});

stream.on('tweet', function (tweet) {

	var tweetText = tweet.text;
  	console.log(tweetText)
  	io.emit("tweet", {message: tweetText});
})


io.on("connection", function(socket){
	console.log("A new client connected");
	socket.emit("firstConnection", {message: "Hello, new user."})
})

app.get('/', function(req, res){
	res.send('<h1>This is a test of an express server!!!</h1>');
});

http.listen(3000, function(){
	console.log("listening on *:3000");
});