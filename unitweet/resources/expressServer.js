/**
 * @Author: James Hosken
 * @Date:   2017-06-13
 * @Email:  james.hosken@nyu.edu
 * @Filename: expressServer.js
 * @Last modified by:   James Hosken
 * @Last modified time: 2017-06-13
 */

 var app = require('express')();
 var http = require('http').Server(app);

//This will serve some content when someone hits the main page
 app.get('/', function(req, res){
   res.send('<h1>This is a test of an express server.</h1>');
 });


//Open a port and listen to requests.
 http.listen(3000, function(){
   console.log('listening on *:3000');
 });
