// HTTP PORTION

var http = require('http');
var fs = require('fs');
var httpServer = http.createServer(requestHandler);
var url = require('url');
io = require('socket.io');
var io = io.listen(httpServer);
httpServer.listen(8080);
console.log("Server running on 138.197.215.156:8080")

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
}


// WEBSOCKET PORTION

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', 

	function (socket) {
	
		console.log("We have a new client: " + socket.id);
		
		///MY SOCKET EVENTS HERE

		socket.on('newshape', function(data){
			socket.broadcast.emit('sendShape', data);
		});

		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);