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
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];


var WINDOW_WIDTH = 1080;
var WINDOW_HEIGHT = 800;

var radius = 8;
var MARGIN_LEFT = 50;
var MARGIN_TOP = 100;

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


// console.log(digit[0][1][2]);

window.onload = function () {
    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;
    MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);
    radius = Math.round(WINDOW_WIDTH * 4/5 /108) -1;
    MARGIN_TOP = Math.round(WINDOW_HEIGHT/8);
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
            addBalls(MARGIN_LEFT + 39*(radius+1), MARGIN_TOP, parseInt(nextMinute/10));
        }
        if(parseInt(minute %10) != parseInt(nextMinute %10)){
            addBalls(MARGIN_LEFT + 54*(radius+1), MARGIN_TOP, parseInt(nextMinute%10));
        }
        if(parseInt(nextSecond /10) != parseInt(second/10)){
            addBalls(MARGIN_LEFT + 78*(radius+1), MARGIN_TOP, parseInt(nextSecond/10));
        }
        if(parseInt(nextSecond%10) != parseInt(second%10)){
            addBalls(MARGIN_LEFT + 93*(radius+1), MARGIN_TOP, parseInt(nextSecond%10));
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
console.log(balls.length);
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
    renderNum(MARGIN_LEFT + 30*(radius+1),MARGIN_TOP,10,ctx);
    renderNum(MARGIN_LEFT + 39*(radius+1),MARGIN_TOP,parseInt(minute/10),ctx);
    renderNum( MARGIN_LEFT + 54*(radius+1), MARGIN_TOP, parseInt(minute%10), ctx);
    renderNum( MARGIN_LEFT + 69*(radius+1), MARGIN_TOP, 10, ctx);
    renderNum(MARGIN_LEFT + 78*(radius+1), MARGIN_TOP, parseInt(second/10), ctx);
    renderNum(MARGIN_LEFT + 93*(radius+1), MARGIN_TOP, parseInt(second%10), ctx);

    for(var i = 0;i<balls.length;i++){
        ctx.fillStyle = balls[i].color;

        ctx.beginPath();
        ctx.arc(balls[i].x,balls[i].y,radius,0,2*Math.PI,true);
        ctx.closePath();

        ctx.fill();
    }

}

function renderNum( x , y , num ,ctx ) {
    ctx.fillStyle = "#ff686e";

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
