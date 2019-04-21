define(['jquery', 'stars'], function ($, stars) {
	var star = new stars.Star();
	var Canvas = function () {
		var _this = this;
		// 设置宽高等
		this.configs = {
			marginTop: 40,
			bgColor: '#343D42',
			girlWidth: 800,
			girlHeight: 400,
			girlSrc: '../img/girl.jpg',
			starSrc: '../img/star.png',
			starNum: 60,
			picNum: 0,
			starNum: 60,
		}
		this.canvas = document.getElementById('myCanvas');
		this.ctx = document.getElementById('myCanvas').getContext('2d');
		// 悬浮事件
		this.canvas.onmousemove = function (e) {
			_this.mouseOver(e);
		}
		this.init();
	}

	Canvas.prototype = $.extend(star, {
		// 初始化画布
		init() {
			var _this = this;
			this.canvas.style.backgroundColor = this.configs.bgColor;
			this.canvas.style.marginTop = this.configs.marginTop + 'px';
			this.canvas.style.marginLeft = ($(window).width() - 1000) / 2 + 'px';
			setInterval(this.gameLoop(), 50);
			// window.requestAnimFrame(_this.gameLoop());
		},
		gameLoop() {
			// 画女孩
			this.drawGirl();
		},
		drawGirl() {
			var _this = this;
			var girlPic = new Image();
			girlPic.src = this.configs.girlSrc;
			girlPic.onload = function () {
				_this.ctx.drawImage(girlPic, 100, 100, 800, 400);
			}
		},
		mouseOver(e) {
			var point = this.windowToCanvas(e.pageX, e.pageY);
			// canvas上的坐标
			var canX = point.x;
			var canY = point.y;
			// 当坐标在女孩的背景图的范围内的时候
			if (canX > 100 && canX < 900 && canY > 100 && canY < 500) {
				this.drawGirl();
				this.drawStars();
			} else {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				this.drawGirl();
			}
		},
		//把鼠标的坐标转换为canvas上的坐标
		windowToCanvas(x, y) {
			// 得到画布的left和top值
			var can = this.canvas.getBoundingClientRect();
			return {
				x: x - can.left,
				y: y - can.top
			}
		} 
	})

	return {
		Canvas
	}

})