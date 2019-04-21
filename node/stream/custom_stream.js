var stream = require('stream');
var util = require('util');

function ReadStream () {
	// 让定义的ReadStream的this指向stream中的Readable
	stream.Readable.call(this);
}
// 让定义的函数继承stream.Readable 这个时候定义的函数就可以在继承的函数的原型链上重写方法
util.inherits(ReadStream, stream.Readable);


ReadStream.prototype._read = function () {
	this.push('I');
	this.push('love');
	this.push('you,');
	this.push('scj\n');
	this.push(null);
};

function WriteStream () {
	stream.Writable.call(this);
	this._cached = new Buffer.from('');
}

util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function (chunk) {
	console.log(chunk.toString());
};

function TransformStream () {
	stream.Transform.call(this);
}

util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._transform = function(chunk){
	this.push(chunk);
};

TransformStream.prototype._flush = function(cb){
	this.push('en123');
	cb && cb();
};

var rs = new ReadStream();
var ws = new WriteStream();
var ts = new TransformStream();

rs.pipe(ts).pipe(ws);


