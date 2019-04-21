document.body.onload = game;

// 先定义 吃到黄色果实加十分 吃到蓝色果实让黄色果实的分数翻倍
var orangeScore = 1;

var can1, ctx1;

var can2, ctx2;

var canWidth, canHeight;

var lastTime, deltaTime;

var bg = new Image();

// 定义海藻
var ane;

// 定义水果
var fruit;
var fruitSize = 14;

// 定义大鱼
var mom;
// 定义大鱼尾巴的数组
var momTail = [];
// 定义大鱼眼睛的数组
var momEye = [];


var mx, my;

// 吃到果实的距离 和喂小鱼的距离
var theNum = 900;

// 定义小鱼
var baby;

// 定义小鱼尾巴的数组
var babyTail = [];
// 定义小鱼眼睛的数组
var babyEye = [];

// 尾巴摆动时间
var tailChange = 60;
// 眼睛闭上时间
var eyeClose = 200;

// 定义漂浮物的数组
var dustArr = [];

// 定义漂浮物
var dust;


// 定义小鱼的身体
var babyBody = [];

// 定义大鱼黄果实的身体
var momOrangeBody = [];
// 定义大鱼蓝果实的身体
// var momBlueBody = [];

// 小鱼身体减弱的时间
var babyBodyChange = 600;

// 大鱼身体减弱的时间
// var momBodyChange = 600;

// 定义游戏是否结束
var gameOver = false;

var data;

var wave;

var feedWave;

// 定义吃到果实波浪的半径
var fruitR = 50;

var feedR = 50;


var alpha = 0;


function game() {
	init();
	gameLoop();
}

// 初始化
function init () {

	lastTime = Date.now();
	deltaTime = 0;

	// 小鱼 
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');

	// 背景 海葵
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');


	bg.src = "../img/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new AneObj();
	ane.init();

	fruit = new FruitObj();
	fruit.init();

	mom = new MomObj();
	mom.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	can1.addEventListener('mousemove', omMouseMove, false);

	baby = new BabyObj();
	baby.init();

	for (var i = 0; i < 8; i ++) {
		babyTail[i] = new Image();
		babyTail[i].src = "../img/babyTail" + i + ".png";
	}

	for (var i = 0; i < 2; i ++) {
		babyEye[i] = new Image();
		babyEye[i].src = "../img/babyEye" + i + ".png";
	}


	for (var i = 0; i < 8; i ++) {
		momTail[i] = new Image();
		momTail[i].src = "../img/bigTail" + i + ".png";
	}

	for (var i = 0; i < 2; i ++) {
		momEye[i] = new Image();
		momEye[i].src = "../img/bigEye" + i + ".png";
	}

	for (var i = 0; i < 7; i ++) {
		dustArr[i] = new Image();
		dustArr[i].src = "../img/dust" + i + ".png";
	}


	dust = new DustObj();
	dust.init();


	for (var i = 0; i < 20; i ++) {
		babyBody[i] = new Image();
		babyBody[i].src = "../img/babyFade" + i + ".png";
	}


	for (var i = 0; i < 8; i ++) {
		momOrangeBody[i] = new Image();
		momOrangeBody[i].src = "../img/bigSwim" + i + ".png";
		// momBlueBody[i] = new Image();
		// momBlueBody[i].src = "../img/bigSwimBlue" + i + ".png";
	}


	data = new DataObj();
	data.init();



	wave = new WaveObj();
	wave.init();


	feedWave = new FeedWaveObj();
	feedWave.init();

}


// 游戏循环
function gameLoop () {
	requestAnimationFrame(gameLoop);
	ctx1.clearRect(0, 0, canWidth, canHeight);
	deltaTime = Date.now() - lastTime;
	if (deltaTime > 40) {
		deltaTime = 40;
	}
	lastTime = Date.now();
	drawBg();
	ane.draw();
	fruit.draw();
	mom.draw();
	baby.draw();
	// ane.swing();
	fruitMonitor();
	dust.draw();
	dustMonitor();
	data.draw();
	if (!gameOver) {
		momAndCollosion();
		momAndBaby();
		wave.draw();
		feedWave.draw();
	} else {
		gameOver2();
	}
}



function gameOver2 () {
	alpha += deltaTime * 0.0008;
	if (alpha >= 1) {
		alpha = 1;
	}
	ctx1.save();
	ctx1.globalAlpha = alpha;
	ctx1.fillStyle = 'red';
	ctx1.textAligin = 'center';
	ctx1.shadowColor = 'white';
	ctx1.shadowBlur = 5;

	ctx1.font = '40px Arial bold';
	ctx1.fillText('Game Over!', canWidth * 0.5 - 100, canHeight * 0.5);
	ctx1.restore();
}





// 鼠标移动事件
function omMouseMove (e) {
	var e = e || window.event;
	mx = windowToCanvas(e.pageX, e.pageY).x;
	my = windowToCanvas(e.pageX, e.pageY).y;
	

}

// 鼠标到画布的距离
function windowToCanvas(x, y) {
    var dom = can1.getBoundingClientRect();
    return {
        x: x - dom.left,
        y: y - dom.top
    }
}

