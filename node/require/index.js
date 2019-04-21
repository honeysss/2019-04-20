var index = require('./class');

function add(classes) {
//    classes是一个数组 里面有 班级名字 老师名字 学生名字
    var teName  = classes.teName;
    var stuName  = classes.stuName;
    index.add(teName, stuName);

}

exports.add = add;