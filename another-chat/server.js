// HTTP Portion
/* won't be making many changes in HTTP portion */


var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var url = require('url');
httpServer.listen(8080); //this will part of our url when we access our page

function requestHandler(req, res) {

	var parsedUrl = url.parse(req.url);
	console.log("The Request is: " + parsedUrl.pathname);
		
	fs.readFile(__dirname + parsedUrl.pathname, 
		// Callback function for reading
		function (err, data) {
			// if there is an error
			if (err) {
				res.writeHead(500);
				return res.end('Error loading ' + parsedUrl.pathname);
			}
			// Otherwise, send the data, the contents of the file
			res.writeHead(200);
			res.end(data);
  		}
  	);
  	
  	/*
  	res.writeHead(200);
  	res.end("Life is wonderful");
  	*/
}


// WebSocket Portion
// WebSockets work with the HTTP server

/* Where we send and receive events */

var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
	// We are given a websocket object in our function
	function (socket) {

		/* ALL MESSAGE SENDING BACK AND FORTH HAPPENS HERE */

		//THIS IS WHERE EVERYTHING HAPPENS - PRIMARY SPOT FOR WRITING CODE
		//where we listen for messages
		//where we also send messages
	
		console.log("We have a new client: " + socket.id);
		
		// this is how socket.on will look
		// When this user emits, client side: socket.emit('otherevent',some data);
		socket.on('chatmessage', function(data) {
			// Data comes in as whatever was sent, including objects
			console.log("Received: 'chatmessage' " + data);
			
			// Send it to all of the clients
			socket.broadcast.emit('chatmessage', data);
		});
		
		socket.on('chatmessage', doSomething);
		
		socket.on('disconnect', function() {
			console.log("Client has disconnected " + socket.id);
		});
	}
);