var http  = require('http');
var url = 'http://www.imooc.com/learn/348';

//npm install cheerio --save
var cheerio = require('cheerio');


function filter(html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    //先定义一个空数组
    var courseData = [];
    //这里的chapters是dom节点 所以用each方法
    chapters.each(function (item) {
        var chapterTitle = $(this).find('h3').text().replace(/\s*/g, '');
        var intro = $(this).find('.chapter-description').text().replace(/\s*/g, '');
        var videos = $(this).find('.video').children('li');
        //定义一个对象 有章标题 副标题 一个课程数组
        var chapterData = {
            chapterTitle : chapterTitle,
            intro : intro,
            videos : []
        }
        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text().replace(/\s*/g, '');
            var id = video.attr('href').split('/video/')[1].replace(/\s*/g, '');
            //循环课程数组li 把每个课程的名字和id好push到数组中
            chapterData.videos.push({
                videoTitle : videoTitle,
                id : id
            })
        })
        //现在chapterData已经包括了 章标题 副标题 课程名 课程id
        courseData.push(chapterData);
    })
    return courseData;
}

function printData(courseInfo) {
    //这里的courseInfo是一个数组 用forEach
    courseInfo.forEach(function (item) {
        console.log(item.chapterTitle + '\n');
        console.log(item.intro);
        item.videos.forEach(function (item1) {
            console.log(item1.videoTitle + '\t' + item1.id);
        })
    })
}

http.get(url, function (res) {
    var html = '';

    res.on('data', function (data) {
        html += data;
    })

    res.on('end', function () {
        var courseInfo = filter(html);
        printData(courseInfo);
    })
}).on('error', function () {
    console.log('获取课程数据出错');
})