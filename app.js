var express = require("express");
var showInfo = require( __dirname + "/view/show.js");
var app = express();
var upload_router = require( __dirname + "/controllers/pictures");

app.use("/api/upload", upload_router);

var http = require('http').Server(app);
var io = require('socket.io')(http);


//check server status
app.get('/', function(req, res){ 
 	//res.sendFile(__dirname + "/view/index.html"); 
});

io.on('connection', function(socket){
    console.log('connected');
    io.emit('refresh', showInfo.show());
});



 

//app.set('port', process.env.PORT || 3000);
http.listen(3000, function(){
     console.log("listen *:3000");
});