/**
 * @Author: James Hosken
 * @Date:   2017-06-13
 * @Email:  james.hosken@nyu.edu
 * @Filename: socketServer.js
 * @Last modified by:   James Hosken
 * @Last modified time: 2017-06-13
 */

var app = require('express')();
var http = require('http').Server(app);

//Require the socket package, and connect it to the http listener
var io = require("socket.io")(http);

/*
Listen for socket connections.
Each time a new connection is made, the
below code will be attached to that connection.
*/

io.on('connection', function(socket){
  console.log('a user connected: ' + socket.id);

  /*
    Broadcast that a new user has connected
    emit( MessageName: {MessageContent})
  */
  io.emit("newuser", {message: "Hello New User!"})
});

//This will serve some content when someone hits the main page
app.get('/', function(req, res){
  res.send('<h1>This is a test of an express server.</h1>');
});


//Open a port and listen to requests.
http.listen(3000, function(){
  console.log('listening on *:3000');
});
