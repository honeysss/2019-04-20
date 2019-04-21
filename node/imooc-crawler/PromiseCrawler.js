var http  = require('http');
// var Promise = require('Promise');
var baseUrl = 'http://www.imooc.com/learn/';

//npm install cheerio --save
var cheerio = require('cheerio');

var videoIds = [348, 259, 197, 134, 75];


var fetchCourseArr = [];

videoIds.forEach(function (id) {
    fetchCourseArr.push(getPageAsync(baseUrl + id));
})

function getPageAsync(url) {
    return new Promise(function (resolve, reject) {
        console.log("正在爬取" + url)
        http.get(url, function (res) {
            var html = '';

            res.on('data', function (data) {
                html += data;
            })

            res.on('end', function () {
                resolve(html);
            })
        }).on('error', function (e) {
            reject(e);
            console.log('获取课程数据出错');
        })
    });
}


function filter(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var title = $('.hd').find('h2').text().replace(/\s*/g, '');
    var number = $(".static-item").find(".js-learn-num").text();
    //先定义一个空数组
    var courseData = {
        title : title,
        number : number,
        videos : []
    };
    //这里的chapters是dom节点 所以用each方法
    chapters.each(function (item) {
        var chapterTitle = $(this).find('h3').text().replace(/\s*/g, '');
        var intro = $(this).find('.chapter-description').text().replace(/\s*/g, '');
        var videos = $(this).find('.video').children('li');
        //定义一个对象 有章标题 副标题 一个课程数组
        var chapterData = {
            chapterTitle : chapterTitle,
            intro : intro,
            video : []
        }
        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text().replace(/\s*/g, '');
            var id = video.attr('href').split('/video/')[1].replace(/\s*/g, '');
            //循环课程数组li 把每个课程的名字和id好push到数组中
            chapterData.video.push({
                videoTitle : videoTitle,
                id : id
            })
        })
        //现在chapterData已经包括了 章标题 副标题 课程名 课程id
        courseData.videos.push(chapterData);
    })
    return courseData;
}


Promise
    .all(fetchCourseArr)
    .then(function (pages) {
        var coursesData = [];
        pages.forEach(function (html) {
            var courses = filter(html);
            coursesData.push(courses);
        })

        coursesData.sort(function (a, b) {
            return a.number < b.number;
        })
        printData(coursesData);
    })

function printData(courseInfo) {
    courseInfo.forEach(function (item2) {
        console.log(item2.number + "人学过" + item2.title + '\n');
        //这里的courseInfo是一个数组 用forEach
        item2.videos.forEach(function (item) {
            console.log('###');
            console.log(item.chapterTitle + '\n');
            console.log(item.intro);
            item.video.forEach(function (item1) {
                console.log(item1.videoTitle + '\t' + item1.id);
            })
        })
    })

}
//
//
// cousesData : {
//     title : title,
//         number : number,
//         videos :[
//                 chapterTitle : chapterTitle,
//                 intro : intro,
//                 video : [
//                         videtTitle : videoTitle,
//                         id : id
//                     ]
//             ]
//     ]
// }