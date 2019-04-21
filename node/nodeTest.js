var fs = require('fs');
var zlib = require('zlib');


fs.createReadStream('介绍.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('介绍.txt.gz'));

