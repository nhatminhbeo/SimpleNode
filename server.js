// Dependencies
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var express = require('express')
var app = express();
var server = http.createServer(app);
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