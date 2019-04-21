var fs = require('fs');

var data = fs.readFileSync('../nodeTest.js');
fs.writeFile('./zlib.js', data, function (err) {
	if(err) {
		console.log(err);
	}
});