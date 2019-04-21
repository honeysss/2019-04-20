var circle = document.getElementById('circle');
var trangle = document.getElementById('trangle');
var eye = document.getElementById('eye');
var food = document.getElementById('food');
var score = document.getElementById('scoreNum');
var spans = document.getElementsByTagName('span');
var time = 10;
var dire = null;
var timer = null, timer2 = null;
window.onload = function() {
	circle.style.left = '20px';
	circle.style.top = '20px';
	//给食物一个位置
	foodNewLoc();
	init();
	
	timer = setInterval(function() {
		showOrHide();
	}, 300)
	
	
	window.onkeydown = function(event) {
		changeDire(event);
	}
	mainEnter(time);
}

//计时
function mainEnter(t) {
	clearInterval(timer2);
	timer2 = setInterval(function() {
		move();
	}, t);
}


//更新分数
function updateScore() {
	var newScore = Number(score.innerHTML) + 1;
	score.innerHTML = newScore;
}
//食物重新定位
function foodNewLoc() {
	/*top 20-380*/
	var foodTop = Math.random() * 360 + 20;
	/*左  20-680*/
	var foodLeft = Math.random() * 660 + 20;
	
	
	food.style.left = foodLeft + 'px';
	food.style.top = foodTop + 'px';
}


//改变位置  初始化
function init() {
	var left = parseInt(circle.style.left);
	var top = parseInt(circle.style.top);
	trangle.style.left = left + 10 + 'px';
	trangle.style.top = top + 10 + 'px';
	eye.style.left = left + 30 + 'px';
	eye.style.top = top + 10 + 'px';
	
}

//改变位置 
function toRight() {
	init();
}

//改变位置 下
function toDown() {
	var left = parseInt(circle.style.left);
	var top = parseInt(circle.style.top);
	trangle.style.left = left + 5 + 'px';
	trangle.style.top = top + 16 + 'px';
	eye.style.left = left + 44 + 'px';
	eye.style.top = top + 24 + 'px';
}
//改变位置 上
function toUp() {
	var left = parseInt(circle.style.left);
	var top = parseInt(circle.style.top);
	trangle.style.left = left + 5 + 'px';
	trangle.style.top = top + 4 + 'px';
	eye.style.left = left + 12 + 'px';
	eye.style.top = top + 33 + 'px';
}
//改变位置 左
function toLeft() {
	var left = parseInt(circle.style.left);
	var top = parseInt(circle.style.top);
	trangle.style.left = left + 'px';
	trangle.style.top = top + 10 +'px';
	eye.style.left = left + 38 + 'px';
	eye.style.top = top + 37 + 'px';
}

//嘴巴
function showOrHide() {
	if (trangle.style.display === 'block') {
		trangle.style.display = 'none';
	} else {
		trangle.style.display = 'block';
	}
}

function changeDire(e) {
	e.preventDefault();
	if (e.keyCode === 38) {
		dire = 'up';
	}
	if (e.keyCode === 39) {
		dire = 'right';
	}
	if (e.keyCode === 40) {
		dire = 'down';
	}
	if (e.keyCode === 37) {
		dire = 'left';
	}
}

function move() {
	//上  left不变 top减少
	if (dire === 'up') {
		ifEatFood();
		//让span旋转-93度
		for (var i = 0; i < spans.length; i ++) {
			spans[i].style.transform = 'rotate(-93deg)';
		}
		var top = parseInt(circle.style.top) - 1;
		if (top <= 0) {
			end();
		}
		circle.style.top = top + 'px';
		toUp();
	}
	
	//右  top不变left减少
	if (dire === 'right') {
		//每次移动的时候判断是否吃到食物
		
		ifEatFood();
		
		//让span旋转-5度
		for (var i = 0; i < spans.length; i ++) {
			spans[i].style.transform = 'rotate(-5deg)';
		}
		var left = parseInt(circle.style.left) + 1;
		//如果到达边界 return
		if (left >= 740) {
			end();
		}
		circle.style.left = left + 'px';
		toRight();
	}
	//下 left不变top增加
	if (dire === 'down') {
		ifEatFood();
		//让span旋转90度
		for (var i = 0; i < spans.length; i ++) {
			spans[i].style.transform = 'rotate(90deg)';
		}
		var top = parseInt(circle.style.top) + 1;
		if (top >= 340) {
			end();
		}
		circle.style.top = top + 'px';
		toDown();
		
	}
	//左 top不变 left减少
	if (dire === 'left') {
		ifEatFood();
		//让span旋转-183度
		for (var i = 0; i < spans.length; i ++) {
			spans[i].style.transform = 'rotate(-183deg)';
		}
		var left = parseInt(circle.style.left) - 1;
		//如果到达边界 return
		if (left <= 0) {
			end();
		}
		circle.style.left = left + 'px';
		toLeft();
		
	}
}

//结束
function end() {
	alert('game over!');
	clearInterval(timer);
	clearInterval(timer2);
}

//是否吃到食物
function ifEatFood() {
	var circleL = parseInt(getStyle(circle, 'left'));
	var circleT = parseInt(getStyle(circle, 'top'));
	var circleW = parseInt(getStyle(circle, 'width'));
	var circleH = parseInt(getStyle(circle, 'height'));
	var foodL = parseInt(getStyle(food, 'left'));
	var foodT = parseInt(getStyle(food, 'top'));
	var foodW = parseInt(getStyle(food, 'width'));
	var foodH = parseInt(getStyle(food, 'height'));
	var disL = Math.abs(circleL - foodL);
	var disT = Math.abs(circleT - foodT);
	var s1 = disL <= circleW - 10 && disT <= foodW - 10 && (dire == 'up' || dire == 'right');
	var s2 = disL <= circleW - 10 && disT <= circleW - 10 && (dire == 'down' || dire == 'right');
	var s3 = disL <= foodW - 10 && disT <= circleW - 10 && (dire == 'up' || dire == 'left');
	var s4 = disL <= foodW - 10 && disT <= foodW - 10 && (dire == 'down' || dire == 'left');
	
	//吃到食物 让食物重新定位
	if (s1 || s2 || s3 || s4) {
		//每次吃到食物的时候让time加快一些
		time *= 0.99;
		mainEnter(time);
		updateScore()
		foodNewLoc();
		/*console.log('circle距离左边' + circleL + ", circleT距离上边" + circleT);
		console.log('food距离左边' + foodL + ", food距离上边" + foodT);
		clearInterval(timer2)*/
	}
}



//获得样式
function getStyle(ob, attr) {
	if (ob.currentStyle) {
		return ob.currentStyle[attr];
	} else {
		return getComputedStyle(ob, false)[attr];
	}
}
