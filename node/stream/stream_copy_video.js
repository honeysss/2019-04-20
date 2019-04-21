var fs = require('fs');
var readStream = fs.createReadStream('./video.mp4');
var writeStream = fs.createWriteStream('./video2.mp4');


readStream
.on('data', function (chunk) {
	if(writeStream.write(chunk) === false) {
		readStream.pause();
		console.log('still cached');
	}
})
.on('end', function () {
	writeStream.close();
});

writeStream.on('drain', function () {
	readStream.resume();
});
