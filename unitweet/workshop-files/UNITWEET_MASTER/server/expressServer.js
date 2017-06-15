var app = require("express")();
var http = require("http").Server(app);

app.get('/', function(req, res){
	res.send('<h1>This is a test of an express server!!!</h1>');
});

http.listen(3000, function(){
	console.log("listening on *:3000");
});