/**
 * @Author: James Hosken
 * @Date:   2017-06-21
 * @Email:  james.hosken@nyu.edu
 * @Filename: server.js
 * @Last modified by:   James Hosken
 * @Last modified time: 2017-06-21
 */

 var express = require('express');         //npm install --save express
 var app = express();
 app.use(express.static(__dirname + '/public'));
 var http = require('http').Server(app); //npm install --save socket.io
 var io = require("socket.io")(http);    //npm install --save socket.io

 var config = require("./config.js");    //This is for your API keys. See config-template in same folder

 /////////////////
 /////////////////

 var Twit = require("twit");

 var T = new Twit(config);     // Refernece your config file with API keys

 //Listen on the twitter stream for tweets containing the phrase "yolo"
 var stream = T.stream('statuses/filter', { track: "forward,down,left,right,red,green,blue", language: "en"}, function(e){
   console.log("New Tweet!");
 });

 stream.on('tweet', function (tweet) {
   var usefulData = {name: tweet.user.name, text: tweet.text}

   //Log to the server logs
   //console.log(usefulData);

   if(usefulData.text.includes("forward")){
     io.emit("up", {usefulData});     //Send to unity!
     console.log("up");
   }
   if(usefulData.text.includes("down")){
     io.emit("down", {usefulData});     //Send to unity!
     console.log("down");
   }
   if(usefulData.text.includes("left")){
     io.emit("left", {usefulData});     //Send to unity!
     console.log("left");
   }
   if(usefulData.text.includes("right")){
     io.emit("right", {usefulData});     //Send to unity!
     console.log("right");
   }
   if(usefulData.text.includes("red")){
     io.emit("red", {usefulData});     //Send to unity!
     console.log("red");
   }
   if(usefulData.text.includes("blue")){
     io.emit("blue", {usefulData});     //Send to unity!
     console.log("blue");
   }
   if(usefulData.text.includes("green")){
     io.emit("green", {usefulData});     //Send to unity!
     console.log("green");
   }
 })

 ///////////////////////////
 // SOCKET.IO CONNECTIONS //
 ///////////////////////////

 io.on('connection', function(socket){
   console.log('a user connected');

   io.emit("message", {content: "Hi!"})

   //Handle disconnection
   socket.on('disconnect', function(){
    console.log('user disconnected');
  });
 });

 ///////////////////
 // SERVER ROUTES //
 ///////////////////

 app.get("/", function(req, res){
   res.sendFile("index.html");
 });

 ////////////
 // LISTEN //
 ////////////

 http.listen(process.env.PORT || 3000, function(){
   console.log('listening on *:3000');
 });
