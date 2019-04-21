
//定义在一起的时间
theDay = new Date(2017,0, 17);
theYear = theDay.getFullYear();
theMonth = theDay.getMonth() + 1;
theDate = theDay.getDate();

//第一次见面的时间
theDay1 = new Date(2011,10, 14);
theYear1 = theDay1.getFullYear();
theMonth1 = theDay1.getMonth() + 1;
theDate1 = theDay1.getDate();


//上次见面的时间
theDay2 = new Date(2018,8, 9);
theYear2 = theDay2.getFullYear();
theMonth2 = theDay2.getMonth() + 1;
theDate2= theDay2.getDate();

var digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ]
    ];


WINDOW_WIDTH = 800;
WINDOW_HEIGHT = 400;
var MARGIN_LEFT = 0;
var MARGIN_TOP = 20;

// var endTime = new Date(2018,9,17,10,23,12);

var balls = [];
var colors = [
    "#FF3030",
    "#BF3EFF",
    "#9B30FF",
    "#98FB98",
    "#4876FF",
    "#00F5FF",
    "#FFB5C5",
    "#FF34B3",
    "#1E90FF",
    "#0000FF"
]


window.onload = function () {
    //在一起
    var result = showDate(theYear, theMonth, theDate);
    $(".yearNum").text(result[0]);
    $(".monthNum").text(result[1]);
    $(".dayNum").text(result[2]);

    //第一次见面
    var result1 = showDate(theYear1, theMonth1, theDate1);
    $(".yearNum1").text(result1[0]);
    $(".monthNum1").text(result1[1]);
    $(".dayNum1").text(result1[2]);

    //上次见面
    var result2 = showDate(theYear2, theMonth2, theDate2);
    if(result2[0] == 0){
        $(".yearNum2,.year2").text("");
    }else{
        $(".yearNum2").text(result2[0]);
    }
    $(".monthNum2").text(result2[1]);
    $(".dayNum2").text(result2[2]);


    radius = 4;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    currentTime = showTime();       //当前时间
    //绘制画布
    setInterval(
        function () {
            render( ctx );
            update();
        },
        50
    )
}



function showDate(theYear, theMonth, theDate) {
    //当前时间
    var nowDay = new Date();
    var nowYear = nowDay.getFullYear();
    var nowMonth = nowDay.getMonth() + 1;
    var nowDate = nowDay.getDate();

    var result = renderDate(theYear, theMonth, theDate, nowYear, nowMonth, nowDate);
    return result;
}

function renderDate(theYear, theMonth, theDate, nowYear, nowMonth, nowDate) {
    var year = 0;
    var month = 0;
    var date = 0;

    //定义一个年的状态 平年1 闰年2
    var yearState = 0;
    if (nowYear % 4 == 0 && nowYear % 400 == 0) {
        yearState = 1;
    } else {
        yearState = 2;
    }

    // ctx.clearRect( 0 , 0 , WINDOW_WIDTH , WINDOW_HEIGHT);

    year = Number(nowYear) - Number(theYear);
    //如果当前年份减去那时候的年份 小于0 说明此时是一个还没有到的时间
    if (year < 0) {
        //    year < 0 的情况下 要让那时候的日期减去当前日期
        year = theYear - nowYear;
        month = theMonth - nowMonth;
        // 如果此时的month<0
        if (month < 0) {
            year = year - 1;
            month = month + 12;
        }
        date = theDate - nowDate;

        if (date < 0) {
            month = month - 1;
            if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
                date = date + 31;
            } else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 8 || nowMonth == 11) {
                date = date + 30;
            } else if (yearState == 1 && nowMonth == 2) {
                date = date + 28;
            } else if (yearState == 2 && nowMonth == 2) {
                date = date + 29;
            }
        }
    } else if (year == 0) {
        month = nowMonth - theMonth;
        // 如果当前月份减去那时候的月份小于零  说明还没到新的一年 让year-1 月份为当前月份减去那时的月份再加上12
        if (month < 0) {
            //    year < 0 的情况下 要让那时候的日期减去当前日期
            month = theMonth - nowMonth;
            date = theDate - nowDate;

            if (date < 0) {
                month = month - 1;

                if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
                    date = date + 31;
                } else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 8 || nowMonth == 11) {
                    date = date + 30;
                } else if (yearState == 1 && nowMonth == 2) {
                    date = date + 28;
                } else if (yearState == 2 && nowMonth == 2) {
                    date = date + 29;
                }
            }
        } else if (month > 0) {
            date = nowDate - theDate;

            if (date < 0) {
                month = month - 1;

                if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
                    date = date + 31;
                } else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 8 || nowMonth == 11) {
                    date = date + 30;
                } else if (yearState == 1 && nowMonth == 2) {
                    date = date + 28;
                } else if (yearState == 2 && nowMonth == 2) {
                    date = date + 29;
                }

            }
        } else if (month == 0) {
            //如果月份刚好等于0
            date = nowDate - theDate;

            if (date < 0) {
                date = theDate - nowDate;
                year = 0;
                month = 0;

            }
        }

    } else {
        //    year>0 说明已经过去
        month = nowMonth - theMonth;
        if (month < 0) {
            year = year - 1;
            month = month + 12;
        }
        date = nowDate - theDate;
        if (date < 0) {
            month = month - 1;
            if (month < 0) {
                year = year - 1;
                month = month + 12;
            }
            if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
                date = date + 31;
            } else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 8 || nowMonth == 11) {
                date = date + 30;
            } else if (yearState == 1 && nowMonth == 2) {
                date = date + 28;
            } else if (yearState == 2 && nowMonth == 2) {
                date = date + 29;
            }
        }
    }
    var arrayDate = new Array(year, month, date);
    return arrayDate;
}



function update() {
    var nextTime = showTime();      //又获取一次当前时间  与上一次获取的秒数相比较 如果相同，不变，如果不相同，则更新
    var nextHour = parseInt( nextTime/3600 );
    var nextMinute = parseInt( (nextTime - nextHour*3600 ) /60);
    var nextSecond = nextTime % 60;


    var hours = parseInt(currentTime / 3600);
    var minute = parseInt( (currentTime - hours*3600) / 60);
    var second = currentTime % 60;

    if(second != nextSecond){

        currentTime = nextTime;
        if(parseInt(hours / 10) != parseInt(nextHour / 10)){
            addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(nextHour/10));
        }
        if(parseInt(hours %10) != parseInt(nextHour %10 )){
            addBalls(MARGIN_LEFT +15*(radius+1), MARGIN_TOP, parseInt(nextHour%10));
        }
        if(parseInt(minute /10 ) != parseInt(nextMinute /10 )){
            addBalls(MARGIN_LEFT + 55*(radius+1), MARGIN_TOP, parseInt(nextMinute/10));
        }
        if(parseInt(minute %10) != parseInt(nextMinute %10)){
            addBalls(MARGIN_LEFT + 70*(radius+1), MARGIN_TOP, parseInt(nextMinute%10));
        }
        if(parseInt(nextSecond /10) != parseInt(second/10)){
            addBalls(MARGIN_LEFT + 110*(radius+1), MARGIN_TOP, parseInt(nextSecond/10));
        }
        if(parseInt(nextSecond%10) != parseInt(second%10)){
            addBalls(MARGIN_LEFT + 125*(radius+1), MARGIN_TOP, parseInt(nextSecond%10));
        }
    }

    updateBalls();
}

function updateBalls() {
    for(var i = 0;i<balls.length;i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if(balls[i].y + radius >= WINDOW_HEIGHT){
            balls[i].y = WINDOW_HEIGHT - radius;
            balls[i].vy = -balls[i].vy*0.75;
        }
    }
    var count = 0;
    for(var i = 0;i<balls.length;i++){
        if(balls[i].x + radius >=0 && balls[i].x <= WINDOW_WIDTH){
            balls[count++] = balls[i];
        }
    }

    while(balls.length > Math.min(500,count)){
        balls.pop();
    }
}

function addBalls(x, y, num) {
    var i =0 , j = 0;
    for(i = 0;i < digit[num].length;i++){  //遍历第num个数组  10
        for (j = 0;j< digit[num][i].length;j++){       //7
            if(digit[num][i][j] == 1){
                var aBall = {
                    x:x + j*2*(radius+1)+(radius+1),
                    y:y + i*2*(radius+1) + (radius+1),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
                    vy:-5,
                    g:1.5+Math.random(),
                    color:colors[Math.floor(Math.random()*colors.length)]
                }
                balls.push(aBall);
            }
        }

    }
}


function showTime() {
    var nowTime = new Date();
    var ret = nowTime.getHours() * 3600 + nowTime.getMinutes() * 60 +nowTime.getSeconds();

    return ret;
}


function render( ctx ) {

    ctx.clearRect( 0 , 0 , WINDOW_WIDTH , WINDOW_HEIGHT);

    var hours = parseInt(currentTime / 3600);
    var minute = parseInt( (currentTime - hours*3600) / 60);
    var second = currentTime % 60;

    renderNum( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) , ctx );
    renderNum(MARGIN_LEFT + 15*(radius+1),MARGIN_TOP,parseInt(hours%10),ctx);

    renderNum(MARGIN_LEFT + 55*(radius+1),MARGIN_TOP,parseInt(minute/10),ctx);
    renderNum( MARGIN_LEFT + 70*(radius+1), MARGIN_TOP, parseInt(minute%10), ctx);

    renderNum(MARGIN_LEFT + 110*(radius+1), MARGIN_TOP, parseInt(second/10), ctx);
    renderNum(MARGIN_LEFT + 125*(radius+1), MARGIN_TOP, parseInt(second%10), ctx);

    for(var i = 0;i<balls.length;i++){
        ctx.fillStyle = balls[i].color;

        ctx.beginPath();
        ctx.arc(balls[i].x,balls[i].y,radius,0,2*Math.PI,true);
        ctx.closePath();

        ctx.fill();
    }

}

function renderNum( x , y , num ,ctx ) {

    ctx.fillStyle = "#ff7d8d";
    var i =0 , j = 0;
    for(i = 0;i < digit[num].length;i++){  //遍历第num个数组  10
        for (j = 0;j< digit[num][i].length;j++){       //7
            if(digit[num][i][j] == 1){
                ctx.beginPath();
                ctx.arc( x + j*2*(radius+1)+(radius+1) , y + i * 2 * (radius+1)+(radius+1) , radius, 0 , 2*Math.PI , false);
                ctx.closePath();
                ctx.fill();
            }
        }

    }
}

