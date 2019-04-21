WIDTH = window.screen.availWidth;
HEIGHT = window.screen.availWidth;
canvasLeft =  WIDTH * 0.06;
canvasTop =  HEIGHT * 0.04;
canvas = document.getElementById("lineCanvas");
canvas.width = WIDTH * 0.7;
canvas.height = HEIGHT * 0.4;
canvas.style.left = canvasLeft + 'px';
canvas.style.top = canvasTop + 'px';
var ctx = canvas.getContext('2d');
x = 0;
y = 0;
x1 = 0;
y1 = 0;
draging = false;
color = "gray";
fontWeight = 5;
cleraWeigth = 0;
lastTime = 0;
nowTime = 0;
lastLineWidthRate = 0;


function changeColor(i) {
    cleraWeigth = 0;
    $(".color").css("right","13%");
    $(".eraser").find("ul").find("li").removeClass("activeEraser");
    $(".color").find("ul").find("li").eq(i).addClass("activeColor");
    $(".color").find("ul").find("li").eq(i).siblings("li").removeClass("activeColor");
    color =  $(".color").find("ul").find("li").eq(i).css('background-color');
}


function changeSize(i) {
    cleraWeigth = 0;
    $(".eraser").find("ul").find("li").removeClass("activeEraser");
    $(".size").find("ul").find("li").eq(i).addClass("activeSize");
    $(".size").find("ul").find("li").eq(i).siblings("li").removeClass("activeSize");
    if(i === 0){
        fontWeight = 20;
    }else if(i === 1){
        fontWeight = 10;
    }else if(i === 2){
        fontWeight = 5;
    }
}

function eraseCanvas(i) {
    color = "white";
    $(".color").find("ul").find("li").removeClass("activeColor");
    $(".color").css("right","13.4%");
    $(".eraser").find("ul").find("li").eq(i).addClass("activeEraser");
    $(".eraser").find("ul").find("li").eq(i).siblings("li").removeClass("activeEraser");
    if(i === 0){
        cleraWeigth = 30;
    }else if(i === 1){
        cleraWeigth = 20;
    }else if(i === 2){
        cleraWeigth = 10;
    }
}

// canvas距离转换
function windowToCanvas(x, y) {
    var dom = canvas.getBoundingClientRect();
    return {
        x: x - dom.left,
        y: y - dom.top
    }
}

// 绘制开始
function beginStroke (point) {
    draging = true;
    x = point.x;
    y = point.y;

    var dis = windowToCanvas(x, y);
    x = dis.x;
    y = dis.y;

    lastTime = new Date().getTime();
}
// 绘制过程
function strokeProgress (point) {
    // 如果在画之前就赋值 在鼠标再次点击的时候，x y的值将会是上次鼠标松开的坐标位置
    x1 = point.x;
    y1 = point.y;

    // var domX = canvas.style.left.replace(/px/,'');
    // var domY = canvas.style.top.replace(/px/,'');
   
    var dis = windowToCanvas(x1, y1);
    x1 = dis.x;
    y1 = dis.y;
    
    nowTime = new Date().getTime();
    var t = nowTime - lastTime;
    lastTime = nowTime;
    var s = calculateDistance(x, y, x1, y1);

    // 通过时间和距离算出当前画笔的粗细率
    newLineWidthRate = calculateWidth(t, s);
    lastLineWidthRate = newLineWidthRate;

    renderLine(x, y, x1, y1);
    // 画完一次之后把上一次的坐标位置赋值为当前的坐标位置 以此类推
    x = x1;
    y = y1;
}

// 绘制结束
function strokeEnd () {
   draging = false;
}


// 触控事件
// 开始
canvas.addEventListener('touchstart', function (e) {
    draging = true;
    e = e || window.event;
    e.preventDefault();
    beginStroke({
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
    });
})
// 过程
canvas.addEventListener('touchmove', function (e) {
    e = e || window.event;
    e.preventDefault();
    if (draging) {
       strokeProgress({
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        }); 
    }
})

// 结束
canvas.addEventListener('touchend', function (e) {
    e = e || window.event;
    e.preventDefault();
    strokeEnd();
})

function mouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    if (e.button !== 0) {
        draging = false;
        return;
    }
    beginStroke({
        x: e.pageX,
        y: e.pageY
    });

}

function mouseMove(e) {
    e = e || window.event;
    e.preventDefault();
    if (draging){
        strokeProgress({
            x: e.pageX,
            y: e.pageY
        });
    }

}


var maxRate = 1;
var minRate = 0.3;
var maxV= 10;
var minV = 0.1;
// 计算画笔粗细
function calculateWidth (t, s) {
     // 速度
     var v = s/t;
     if (v <= minV) {
        resultRate = maxRate;
     } else if (v >= maxV) {
        resultRate = minRate;
     } else {
        resultRate = maxRate - (v-minV) / (maxV-minV) *(maxRate - minV);
     }

      if (lastLineWidthRate === 0) {
        return resultRate;
      }

     return Math.sqrt(lastLineWidthRate*lastLineWidthRate*2/3 + resultRate*resultRate*1/3);


}

// 计算两点之间的距离
function calculateDistance (x, y, x1, y1) {
    return Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
}

function mouseUp(e) {
    e = e || window.event;
    e.preventDefault();
   strokeEnd();
}

function mouseOut (e) {
    var e = e || window.event;
    e.preventDefault();
   strokeEnd();
}



function renderLine(x, y, x1, y1) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    if(cleraWeigth === 0){
        ctx.lineWidth = fontWeight * newLineWidthRate;
    }else{
        ctx.lineWidth = cleraWeigth;
    }
    ctx.lineCap="round";
    // 当两条线条交汇时，创建圆形边角：
    ctx.lineJoin = "round";
    ctx.closePath();
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

