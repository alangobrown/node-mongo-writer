
  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  var os = require('os');
 
var currentDate = new Date();

MongoClient.connect('mongodb://46.101.46.152:27017/test', function(err, db) {
    if(err) throw err;
 
    var collection = db.collection('test_insert');
    collection.insert({"time":currentDate, "host":os.platform() + ' ' +os.arch() + ' ' +os.hostname()}, function(err, docs) {
    	      // Locate all the entries using find 
      	collection.find({},{"_id":0}).toArray(function(err, results) {
        	console.dir(results);
        	db.close();
    	});
    });
});