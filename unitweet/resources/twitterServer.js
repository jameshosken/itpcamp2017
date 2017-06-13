/**
 * @Author: James Hosken
 * @Date:   2017-06-11
 * @Email:  james.hosken@nyu.edu
 * @Filename: server.js
 * @Last modified by:   James Hosken
 * @Last modified time: 2017-06-13
 */

/* DESCRIPTION
This is a super stupid server that simply takes the
twitter stream coming in and broadcasts some
of that data to all current socket.io connections.
*/

/* SETUP NOTES
Make sure that you run `npm init` before you install
any of the below packages. To install a package, in your server folder 
run `npm install [package name] --save`
*/

var app = require('express')();         //npm install --save express
var http = require('http').Server(app); //npm install --save socket.io
var io = require("socket.io")(http);    //npm install --save socket.io

var config = require("./config.js");    //This is for your API keys. See config-template in same folder

/////////////////
// FOR TWITTER //
/////////////////

var Twit = require("twit");

var T = new Twit(config);     // Refernece your config file with API keys

//Listen on the twitter stream for tweets containing the phrase "yolo"
var stream = T.stream('statuses/filter', { track: 'yolo' }, function(e){
  console.log(e);
});

stream.on('tweet', function (tweet) {
  console.log(tweet)
  io.emit(tweet);
})

///////////////////////////
// SOCKET.IO CONNECTIONS //
///////////////////////////

io.on('connection', function(socket){
  console.log('a user connected');
});

///////////////////
// SERVER ROUTES //
///////////////////

app.get('/', function(req, res){
  res.send('<h1>My server works!</h1>');
});

////////////
// LISTEN //
////////////

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on *:3000');
});
