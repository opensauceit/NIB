var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;

var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies


app.get('/nodeschool', function(req, res){
    res.send('end me a POST request to /qs/helloworld/attempts');
});

app.post('/qs/helloworld/attempts', function(req, res){
	console.log(req.body.input);

	nodeSchoolVerify(req.body.input, function(output) {
		res.send(output);
	});
});

function nodeSchoolVerify(input, cb) {
	var command = 'echo "' + input + '" | docker run --rm -i -e WORKSHOP="HELLO WORLD" nib',
	    output = {},
	    proc;

	proc = exec(command, function callback(error, stdout, stderr){
		output.stdout = stdout;
		cb(output);
	});

	proc.on('exit', function(code) {
		console.log('error code is ' + code);
		output.status = code == 0 ? "ok" : "failing";
	});
}

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});