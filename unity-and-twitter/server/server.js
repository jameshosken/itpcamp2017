/**
 * @Author: James Hosken
 * @Date:   2017-06-11
 * @Email:  james.hosken@nyu.edu
 * @Filename: server.js
 * @Last modified by:   James Hosken
 * @Last modified time: 2017-06-13
 */



var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var config = require("./config.js");

//BEGIN TWITTER STUFF:
var Twit = require("twit");
console.log("Config: " + config)

var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: 'yolo' }, function(e){
  console.log(e);
});

T.get('statuses/home_timeline', function (err, reply) {
  if (err)
    return console.log('err', err)

  console.log('reply', reply)
})

stream.on('tweet', function (tweet) {
  console.log(tweet)
  io.emit(tweet);
})

//END TWITTER STUFF

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

// Test emit every 5 secs
setInterval(function () {
  io.emit("test", {info: "sup"})
}, 5000);

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
