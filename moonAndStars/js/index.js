
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var starNum = 150;
// 定义一个星星的数组
var stars = [];

window.onload = function () {

	// 初始化星星数组
	for (var i = 0; i < canvas.width; i ++) {
		stars[i] = [];
		for (var j = 0; j < canvas.height; j ++) {
			stars[i][j] = 0;
		}
	}

	// 画背景
	drawBg();

	// 画星星
	draw();

	// 画月亮
	drawMoon(2, 600, 150, 100, 20);

	// 写文字
	writeFont();
}

// 写字
function writeFont () {
	ctx.font = 'bold 40px YouYuan';
	// ctx.fillStyle = '#F5356B';
	// ctx.fillText('晚安 小狗杰', 345, canvas.height - 100, 100);
	// ctx.fillText('love you like you miss you', 300, canvas.height - 30, 200);
	var image = new Image();
	image.src = '../img/1.jpg';
	image.onload = function () {
		var pattern = ctx.createPattern(image, 'repeat');
		ctx.fillStyle = pattern;
		ctx.fillText('love you like you miss you ', 290, canvas.height - 35, 200);
	}
}

// 画背景
function drawBg () {
	var grd = ctx.createRadialGradient(canvas.width/2, canvas.height, 0, canvas.width/2, canvas.height, canvas.height);
	grd.addColorStop(0, '#035');
	grd.addColorStop(1, 'black');
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 月亮
function drawMoon (d, x, y, r, rot, /*optinal*/fillColor) {

	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(rot*Math.PI / 180);
	ctx.scale(r, r);
	ctx.fillStyle = fillColor || '#fd5';
	moonPath(d);
	ctx.fill();
	ctx.restore();
	
}
// 月亮的路径
function moonPath (d) {

	ctx.beginPath();
	ctx.arc(0, 0, 1, 0.5 * Math.PI, 1.5*Math.PI, true);
	ctx.moveTo(0, -1);
	ctx.arcTo(d, 0, 0, 1, dis(0, -1, d, 0) / d);
	ctx.closePath();
	
}

// 计算两点之间的距离
function dis (x1, y1, x2, y2) {
	return Math.sqrt((x1-x2) * (x1-x2) + (y1-y2)*(y1-y2));
}

// 画五角星
function draw () {

	// 画多个星星
	for (var i = 0; i < starNum; i ++) {
		// 半径
		var R = parseInt(Math.ceil(Math.random()*4 + 3));		//[3, 7]

		// 位置
		// x在随机数和R中间取最大值
		var x = parseInt(Math.ceil(Math.max(Math.random()*canvas.width - 2*R + R, R)));	
		var y = parseInt(Math.ceil(Math.random()*canvas.height*2/3 + R)); 		

		// 每次随机完坐标之后都判断一下这个坐标是否已经被占用 如果被占用 重新选
		// 如果没有 将这个坐标 和坐标范围内R的范围都标记为已被占用
		// 如果没被占用
		if (stars[x][y] === 0) {
			for (var m = x-R; m < x+R; m ++) {
				for (var n = y-R; n < y+R; n ++) {
					// 越界
					if (m < 0) {
						m = 0;
					}
					if (m > canvas.width) {
						m = canvas.width;
					}
					if (n < 0) {
						n = 0;
					}
					if (n > canvas.height) {
						n = canvas.height;
					}
					stars[m][n] = 1;
				}
			}
		}
		// 如果被占用
		while(true) {
			x = parseInt(Math.ceil(Math.max(Math.random()*canvas.width - 2*R + R, R)));	
			y = parseInt(Math.ceil(Math.random()*canvas.height*2/3 + R));
			if (stars[x][y] === 0) {
				break;
			}
		}

		// 旋转角度
		var rot = Math.random()*30;		//[0,30]

		// 透明度
		var alpha = Math.random()*0.7 + 0.3;		//[0.3 1]

		drawManyStar(R, x, y, rot, alpha);
	}
}

// 对绘制的图形做一些处理（旋转 缩放 位移 颜色等）
function drawManyStar (R, x, y, rot, alpha) {

	ctx.save();

	// 位移
	ctx.translate(x, y);

	// 旋转
	ctx.rotate(rot/180 * Math.PI);

	// 缩放
	ctx.scale(R, R);

	// 透明度
	ctx.globalAlpha = alpha;


	drawPath();

	ctx.fillStyle = '#fb3';
	ctx.lineJoin = 'round';

	ctx.fill();

	ctx.restore();
}

// 只有星星的路径
function drawPath () {
	ctx.beginPath();
	for (var i = 0; i < 5; i ++) {
		ctx.lineTo(Math.cos((72*i + 18)/180 * Math.PI), 
							-Math.sin((72*i + 18)/180 * Math.PI));

		ctx.lineTo(Math.cos((72*i + 54)/180 * Math.PI) * 0.5, 
							-Math.sin((72*i + 54)/180 * Math.PI) * 0.5) ;
	}
	ctx.closePath();
}