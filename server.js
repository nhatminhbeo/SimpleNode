// Dependencies
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
// var mongodb = require('./logic/connect');
var mongodb = require('mongodb');
var dburi = "mongodb://localhost:27017/example";

// Server
var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

// App config
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
	console.log('Server running!');
})

app.get('/', function(req, res) {
	res.sendFile('index.html');
})




/*
// RESTful API route for controllers to get data from the logic layer, and serve the view layer
app.get('/data', function(req, res) {
	// Connect to mongodb server
	mongodb.MongoClient.connect(dburi, function(error, db) {
		// Failed to connect
		if (error) {
			console.log(error);
			process.exit(1);
		}
		// Find & print all entries
		db.collection('sample').find().toArray(function(error, docs) {
			// Failed to find (query) 
			if (error) {
				console.log(error);
				
			}

			console.log('Found docs:');
			res.status(200).json(JSON.stringify(docs));
		});
	});
});
*/