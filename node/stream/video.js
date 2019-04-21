var fs = require('fs');

var readStream = fs.createReadStream('./video.mp4');
var n = 0;

readStream
.on('data', function (chunk) {
	n++;
	console.log('data emits');

	readStream.pause();
	console.log('data pause');
	setTimeout(function () {
		console.log('data pause end');
		readStream.resume();
	}, 2000);
})
.on('end',function () {
	console.log(n);
	console.log('data ends');
})
.on('close', function () {
	console.log('data close');
})
.on('error', function (e) {
	console.log(e.stack);
});
