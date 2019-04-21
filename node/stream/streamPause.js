var fs = require('fs');

var readStream  = fs.createReadStream('../nodeTest.js');
var n = 0;

readStream
.on('data', function (chunk) {
	console.log('data emits');
	console.log(Buffer.isBuffer(chunk));
	// console.log(chunk.toString());
	n++;
	readStream.pause();
	console.log('data pause');
	setTimeout(function () {
		console.log('data pause end');
		// 重新启动readStream
		readStream.resume();
	}, 2000);
})
// .on('readable', function () {
// 	console.log('data is readable');
// })
.on('end', function () {
	console.log(n);
	console.log('data ends');
})
.on('close', function () {
	console.log('data close');
})
.on('error', function (err) {
	console.log(err.stack);
});
