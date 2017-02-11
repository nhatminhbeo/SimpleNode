var mongodb = require('mongodb');
var dburl = "mongodb://localhost:27017/example";

// Connect to mongodb server
mongodb.MongoClient.connect(dburl, function(error, db) {
	// Failed to connect
	if (error) {
		console.log(error);
		process.exit(1);
	}

	// Insert into the database
	db.collection('sample').insert({x:1}, function(error, result) {
		// Failed to insert
		if (error) {
			console.log(error);
			
		}

		// Find & print all entries
		db.collection('sample').find().toArray(function(error, docs) {
			// Failed to find (query) 
			if (error) {
				console.log(error);
				
			}

			console.log('Found docs:');
			docs.forEach(function(doc) {
				console.log(JSON.stringify(doc));
			});
			
		});
	});
});

module.exports = mongodb;