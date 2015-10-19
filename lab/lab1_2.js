//stub for lab 1_2
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();
var task =  function(request, callback){

	callback( null, "czy to dziala?")
	params = {}
	ec2.describeInstances(params, function(err, data) {
	  if (err) console.log(err, err.stack); // an error occurred
	  else     callback(null, "SUKCES!");           // successful response
	});

}

exports.lab = task
