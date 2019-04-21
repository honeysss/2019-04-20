var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('../介绍.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('../介绍压缩.txt'));
