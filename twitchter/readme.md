# Create server

1. Create server directory and cd in using command line
2. `npm init`(Hit enter when prompted to set up default package.json)
3. Install node packages
  * `npm install --save express`
  * `npm install --save http`
  * `npm install --save socket.io`
  * `npm install --save twit`
4. Create server.js file in your folder & setup requirements:
  * `var express = require('express');`
  * `var app = express()`
  * `app.use(express.static(__dirname + '/public'));`
  * `var http = require('http').Server(app);`
  * `var io = require("socket.io")(http);`
  * `var config = require("./config.js");`
5. Create config.js and add your twitter keys:
  * `module.exports = {consumer_key: "xxx", consumer_key_secret: "xxx", access_token: "xx-xxx", access_token_secret: "xxx"}`
6. Create a public folder inside your public folder and add this line to *server.js*:
