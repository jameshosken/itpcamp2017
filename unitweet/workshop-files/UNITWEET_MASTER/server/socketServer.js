var app = require("express")();
var http = require("http").Server(app);

var io = require("socket.io")(http);

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