//stub for lab 1_2
var AWS = require('aws-sdk');
var ec2 = new AWS.EC2();
AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

	callback( null, "czy to dziala?")
	ec2.describeInstances(null, function(err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else     callback(null, data);           // successful response
	});

}

exports.lab = task
