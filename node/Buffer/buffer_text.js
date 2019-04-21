var fs = require('fs');
var data = fs.readFileSync('buffer_text.txt');
console.log(data.toString());