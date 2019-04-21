var canvas = document.getElementById('lightCanvas');
var ctx = canvas.getContext('2d');


// 坐标 半径 速度
x = Math.random() * canvas.width;
y = Math.random() * canvas.height;

// 半径
R = 80;

if (x > canvas.width - R) {
	x = canvas.width - R;
}
if (x < R) {
	x = R;
}
if (y < R) {
	y = R;
}
if (y > canvas.height - R) {
	y = canvas.height - R;
}

var speed = [Math.random() * -3 + -2, Math.random() * 3 + 2]
vx = speed[parseInt(Math.random() * speed.length)];
vy = speed[parseInt(Math.random() * speed.length)];



document.body.onload = init();

function init () {
	setInterval(function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawAll();
		update();
	});
}

function drawAll () {
	var image = new Image();
	image.src = '../img/2.jpg';
	ctx.save();
	// 绘制背景色
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	// 画个圆

	ctx.beginPath();
	ctx.arc(x, y, R, 0, 2*Math.PI, false);
	ctx.closePath();
	ctx.clip();

	ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

	ctx.restore();
}

function update () {
	// 更新坐标
	// s = vt;
  x += vx * 0.3;
	y += vy * 0.3;

	// 碰撞检测
	if (x > canvas.width - R) {
		x = canvas.width - R;
		vx = speed[parseInt(Math.random() * speed.length)];
	}
	if (x < R) {
		x = R;
		vx = -speed[parseInt(Math.random() * speed.length)];
	}
	if (y < R) {
		y = R;
		vy = speed[parseInt(Math.random() * speed.length)];
	}
	if (y > canvas.height - R) {
		y = canvas.height - R;
		vy = -speed[parseInt(Math.random() * speed.length)];
	}

	drawAll();
}
