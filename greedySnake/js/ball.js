WIDTH = 900;
HEIGHT = 600;
RADIUS = 10;
window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    //设置蛇移动的频率
    rate = 300;
    //设置移动的方向0-3上右下左
    var direction = 1;
    //保存贪吃蛇的实际长度
    var ballLength = 3;
    //保存移动的路径,元素为{'x':x,'y':y}格式
    var snakeBoard = [];
    //蛇身单元大小
    var size = 30;


    // drawBroad();
//    先把网格绘制出来
    function drawBroad() {
        ctx.strokeStyle = "lightgray";
        for (var i = 0; i < 30; i++) {
            ctx.moveTo(30 * i, 0);
            ctx.lineTo(30 * i, 600);
            ctx.stroke();
        }
        for (var i = 0; i < 20; i++) {
            ctx.moveTo(0, 30 * i);
            ctx.lineTo(900, 30 * i);
            ctx.stroke();
        }
    }


//    画圆球的函数 传过来i j
    function renderBall(i, j) {
        ctx.beginPath();
        ctx.arc(size/2 + i * size, size/2 + j * size, RADIUS, 2 * Math.PI, false);
        ctx.closePath();

        var grd = ctx.createRadialGradient(size/2 + i * size, size/2 + j * size, RADIUS, size/2 + i * size, size/2 + j * size, 2);
        grd.addColorStop(0, "#FF4040");
        grd.addColorStop(1, "#FFAEB9");

        ctx.fillStyle = grd;
        ctx.fill();

        snakeBoard.push({'x': i, 'y': j});
    }

    //定义两个随机数 在页面打开时随机在页面上产生圆球
    //x的范围在0 - 25
    //y的范围在0 - 19
    x = Math.floor(Math.random()*24 + 2);
    y = Math.floor(Math.random()*20);
    for (var i = 0; i <= ballLength; i++) {
        renderBall(x - i, y);
    }
    snakeBoard.reverse();


    var interval = setInterval(function () {
        snake_leave();
    },rate);
    //    在页面上不为1的地方随机产生一个小球
//    随机产生的小球用一个新的数组存储
    var randomBall = [];
    for (var i = 0; i < 30; i++) {
        randomBall[i] = [];
        for (var j = 0; j < 20; j++) {
            randomBall[i][j] = 0;
        }
    }

    function renderAnotherBall(i, j) {
        ctx.beginPath();
        ctx.arc(size / 2 + i * size, size / 2 + j * size, RADIUS, 2 * Math.PI, false);
        ctx.closePath();

        var grd = ctx.createRadialGradient(size / 2 + i * size, size / 2 + j * size, RADIUS, size / 2 + i * size, size / 2 + j * size, 2);
        grd.addColorStop(0, "#f3ea11");
        grd.addColorStop(1, "#ede7d7");

        ctx.fillStyle = grd;
        ctx.fill();

        randomBall[i][j] = 1;
    }
    //先获取到snakeBoard中所有 x y 的值
    //让randomBall[x][y] = 1
    //x1 y1 不能取到这些值


    x1 = Math.floor(Math.random()*30);
    y1 = Math.floor(Math.random()*20);
    renderAnotherBall(x1, y1);



    //贪吃蛇移动函数
    function snake_leave() {
        //根据移动方向来移动
        switch (direction) {
            case 0:
                y -= 1;
                break;
            case 1:
                x += 1;
                break;
            case 2:
                y += 1;
                break;
            case 3:
                x -= 1;
                break;
        }
        //判断是否撞墙
        if ((x*size) >= WIDTH || (y*size) >= HEIGHT || x < 0 || y < 0) {
            alert("游戏结束");
            clearInterval(interval);
            return;
        }
        //判断是否撞到自己
        for (var i = 0; i < snakeBoard.length; i++) {
            var xx = parseInt(snakeBoard[i].x);
            var yy = parseInt(snakeBoard[i].y);
            if (xx === x && yy === y) {
                alert("游戏结束");
                clearInterval(interval);
                return;
            }
        }
        //每次移动一下，蛇身最后都要减去1
        if (snakeBoard.length > ballLength) {
            //把数组的第一个元素删除并返回,map中的数据为{key:value}形式
            var foot = snakeBoard.shift();
            ctx.clearRect((foot.x)*30 + 5, (foot.y)*30 + 5, size-10, size-10);
        }
        //判断是否吃到了食物
        for(var i = 0;i<30;i++){
            for(var j =0;j<20;j++){
                if(randomBall[i][j] === 1){
                    var m = i;
                    var n = j;
                }
            }
        }
        if(x === m && y === n){
            ballLength++;
            randomBall[m][n] = 0;
            //这个x1 y1 是随机产生小球的位置
            x1 = Math.floor(Math.random()*30);
            y1 = Math.floor(Math.random()*20);
            renderAnotherBall(x1,y1);
            rate = rate - 100;
        }


        //每次移动，进行蛇头的改变
        snakeBoard.push({'x': x, 'y': y});

        ctx.beginPath();
        ctx.arc(15 + x * 30, 15 + y * 30, RADIUS, 2 * Math.PI, false);
        ctx.closePath();

        var grd = ctx.createRadialGradient(15 + x * 30, 15 + y * 30, RADIUS, 15 + x * 30, 15 + y * 30, 2);
        grd.addColorStop(0, "#FF4040");
        grd.addColorStop(1, "#FFAEB9");

        ctx.fillStyle = grd;
        ctx.fill();

    };

    //添加方向键键盘控制事件
    document.onkeydown = function (event) {
        var code = event.keyCode;
        switch (code) {
            case 37:
                if (direction != 1) direction = 3;
                break;
            case 38:
                if (direction != 2) direction = 0;
                break;
            case 39:
                if (direction != 3) direction = 1;
                break;
            case 40:
                if (direction != 0) direction = 2;
                break;
        }
    };

};




