var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/u/5141792/courses?page=1';

function filter(html) {
    var $ = cheerio.load(html);
    var mainPart = $('.tl-item');
    var courseData = [];
    mainPart.each(function () {
        var studyDate = $(this).find('.time').text().replace(/\n*\s*/g, '');
        var courses =  $(this).find('.course-one');
        var courseInfo = {
            studyDate : studyDate,
            course : []
        };

        courses.each(function () {
            var courseTitle = $(this).find('.course-list-cont').find('.study-hd').find('a').text();
            var courseProgress = $(this).find('.course-list-cont').find('.study-points').find('.i-left').text();
            var courseTime = $(this).find('.course-list-cont').find('.study-points').find('.i-mid').text();

            courseInfo.course.push({
                courseTitle :courseTitle,
                courseProgress :courseProgress,
                courseTime :courseTime
            })
        })

        courseData.push(courseInfo);
    })

    return courseData;



    // [{
    //     studyDate,       //学习日期
    //     course:[
    //         courseTitle     //课程标题
    //         courseProgress      //课程进度
    //         courseCostTime      //课程用时
    //
    //     ]
    // }]
}

function print(courseData) {
    courseData.forEach(function (item) {
        console.log(item.studyDate + '\n');
        item.course.forEach(function (item1) {
            console.log(item1.courseTitle + '\t' + item1.courseProgress + '\t' + item1.courseTime + '\n');
        })
    })
}

http.get(url, function (res) {
    var html = '';

    res.on('data', function (data) {
        html += data;
    })

    res.on('end', function () {
        var courseData = filter(html);
        print(courseData);
    })
})