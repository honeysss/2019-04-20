var student = require('./student');
var teacher = require('./teacher');

function add(teName, stuName) {
    teacher.add(teName);
    stuName.forEach(function (item) {
        student.add(item);
    })
}
exports.add = add;
