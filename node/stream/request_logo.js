var http = require('http');
var fs = require('fs');
var request = require('request');

http.createServer(function (req, res) {
	// fs.readFile('../Buffer/logo.png', function (err, data) {
	// 	if(err) {
	// 		res.end('file not exist');
	// 	}else {
	// 		res.writeHead(200, {'Content-Type': 'text/plain'});
	// 		res.end('data');
	// 	}

	// });
	
	// fs.createReadStream('../Buffer/logo.png').pipe(res);
	
	request('https://home.firefoxchina.cn/img/logo_sprite_2014.png').pipe(res);



}).listen(8090);