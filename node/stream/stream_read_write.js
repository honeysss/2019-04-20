var fs = require('fs');

// 没有用var readStream = fs.createReadStream()方法是因为该方法需要一个路径作为参考内容
// writeStream同理
// 文件中的方法可以自定义内容 不用输出到别的文件中
var Readable = require('stream').Readable;
var Writable = require('stream').Writable;

var readStream  = new Readable();
var writeStream = new Writable();


readStream.push(' I');
readStream.push(' love');
readStream.push(' you,');
readStream.push(' scj\n');
readStream.push(null);

writeStream.write = function (chunk, encode) {
	console.log(chunk.toString());
};

readStream.pipe(writeStream);


