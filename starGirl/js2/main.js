var canvas, ctx;

girlWidth = 800;
girlHeight = 400;

var girlPic = new Image();

var starPic = new Image();

var starNum = 52;
var stars = [];

var lastTime, mowTime, deltaTime;

document.body.onload = init;

showStar = false;
alpha = 0;


function init() {
	canvas = document.getElementById('starGirl');
	ctx = canvas.getContext('2d');

  girlPic.src = 'img/girl.jpg';
	starPic.src = 'img/star.png';

	// 添加鼠标移动事件
	document.addEventListener('mousemove', mouseMove, false);

	// 实例化多个星星
	for (var i = 0; i < starNum; i ++) {
		var obj = new StarObj();
		stars.push(obj);
		stars[i].init();	//调用init方法之后为每个stars都赋了属于自己的 x y picNum值
	}

	lastTime = new Date();
	gameLoop();

}

// 循环
function gameLoop() {
	window.requestAnimFrame(gameLoop);
	nowTime = new Date();
	// 获取每次执行gameloop之间的时间间隔
	deltaTime = nowTime - lastTime;
	lastTime = nowTime;


	drawBg();
	drawGirl();
	// 不断的调用画星星的函数
	drawStars();
	alphaNum();
}

// 画背景颜色
function drawBg() {
	ctx.fillStyle = '#534670';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 画女孩
function drawGirl() {
	ctx.drawImage(girlPic, 100, 100, girlWidth, girlHeight);
}

// 鼠标事件
function mouseMove (e) {
	if (e.pageX > 340 && e.pageX < 1140 && e.pageY > 140 && e.pageY < 540) {
		// 只要移动上去 就开始让alpha的值++
		showStar = true;
	} else {
		showStar = false;
	}
}