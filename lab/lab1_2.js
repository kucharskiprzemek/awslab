//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

	callback( null, "czy to dziala?")
	ec2.describeInstances(null, function(err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else     console.log(data);           // successful response
	});
	callback(null, data)
}

exports.lab = task
