var fs = require('fs');

fs.readFile('logo.png', function (err, origin_buffer) {
	console.log(Buffer.isBuffer(origin_buffer));
	console.log(origin_buffer.toString());

	fs.writeFile('logo_buffer.png', origin_buffer, function (err) {
		if (err){
			console.log(err);
		}
	});

	// var base64Img = new Buffer(origin_buffer).toString('base64');
	var base64Img = origin_buffer.toString('base64');
	// 这里输出来的base64编码前面加上“data:image/png;base64,”可转化成网页上能应用的图片
	// console.log(base64Img);

	var decodedImg = new Buffer.from(base64Img, 'base64');
	console.log(Buffer.compare(decodedImg, origin_buffer));

	fs.writeFile('logo_decoded.png', decodedImg, function (err) {
		if (err) {
			console.log(err);
		}
	});


});
