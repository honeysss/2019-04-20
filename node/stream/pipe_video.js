var fs = require('fs');

var readStream = fs.createReadStream('./video.mp4').pipe(fs.createWriteStream('./video3.mp4'));
