
var Shape = function (opts) {
	// 坐标 半径 透明度 速度 颜色 覆盖 一开始都是固定死的舒服
	this.x;
	this.y;
	this.R;
	this.color;
	this.vx;
	this.vy;
	this.style;
	this.speed;
	this.starR;
	this.rot;
	this.alpha;
	this.d;
	this.moonr;
	this.opts = $.extend(Shape.opts, opts);

	this.init();
}

Shape.opts = {
	mode: 'circle'
}

Shape.prototype = {
	init() {
		// 随机坐标
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;

		// 旋转角度
		this.rot = Math.random()*30;
		// 透明度
		this.alpha = Math.random()*0.7 + 0.3;	

		// 半径
		this.R = Math.random() * 60 + 10;
		this.starR = parseInt(Math.ceil(Math.random()*4 + 3));		//[3, 7]
		this.moonr = Math.random() * 100 + 50;
		this.d = Math.ceil(Math.random() * 1 + 1);

		if (this.x > canvas.width - this.R) {
			this.x = canvas.width - this.R;
		}
		if (this.x < this.R) {
			this.x = this.R;
		}
		if (this.y < this.R) {
			this.y = this.R;
		}
		if (this.y > canvas.height - this.R) {
			this.y = canvas.height - this.R;
		}

		// 随机颜色
		var r = parseInt(Math.ceil(Math.random() * 255));
		var g = parseInt(Math.ceil(Math.random() * 255));
		var b = parseInt(Math.ceil(Math.random() * 255));
		var a = parseInt(Math.ceil(Math.random() * 7 + 2)) / 10;

		this.color = 'rgba(' + r + ',' + g + ',' + b + ',' + a +')';

		//速度
		this.speed = [Math.random() * -3 + -2, Math.random() * 3 + 2]
		this.vx = this.speed[parseInt(Math.random() * this.speed.length)];
		this.vy = this.speed[parseInt(Math.random() * this.speed.length)];

		// 覆盖
		var coverStyle = ['source-over', 'destination-over'];
		var style = coverStyle[parseInt(Math.floor(Math.random()*coverStyle.length))];
	},

	// 画
	drawShape() {
		if (this.opts.mode === 'circle') {
			ctx.globalCompositeOperation = this.style;
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.R, 0, 2*Math.PI, true);
			ctx.closePath();
			ctx.fill();
		}
		if (this.opts.mode === 'nut') {
			ctx.beginPath();
			// 这个时候ture 和 false 很重要
			ctx.arc(this.x, this.y, this.R, 0, 2*Math.PI, false);
			ctx.arc(this.x, this.y, this.R/2, 0, 2*Math.PI, true);
			ctx.closePath();


			ctx.globalCompositeOperation = this.style;
			ctx.fillStyle = this.color;
			ctx.shadowColor = this.color;
			ctx.shadowOffsetX = this.R/10;
			ctx.shadowOffsetY = this.R/10;
			ctx.shadowBlur = this.R/10;
			ctx.fill();
		}
		if (this.opts.mode === 'star') {
			ctx.save();
			// 位移
			ctx.translate(this.x, this.y);
			// 旋转
			this.rot += 1;
			ctx.rotate(this.rot/180 * Math.PI);
			// 缩放
			ctx.scale(this.R, this.R);
			// 透明度
			ctx.globalAlpha = this.alpha;
			ctx.beginPath();
			for (var i = 0; i < 5; i ++) {
				ctx.lineTo(Math.cos((72*i + 18)/180 * Math.PI), 
									-Math.sin((72*i + 18)/180 * Math.PI));

				ctx.lineTo(Math.cos((72*i + 54)/180 * Math.PI) * 0.5, 
									-Math.sin((72*i + 54)/180 * Math.PI) * 0.5) ;
			}
			ctx.closePath();

			ctx.fillStyle = '#fb3';
			ctx.lineJoin = 'round';

			ctx.fill();

			ctx.restore();
		}
		if (this.opts.mode === 'moon') {
			ctx.save();
			ctx.translate(this.x, this.y);
			this.rot += 1;
			ctx.rotate(this.rot*Math.PI / 180);
			ctx.scale(this.moonr, this.moonr);
			ctx.fillStyle = '#fd5';
			// 透明度
			ctx.globalAlpha = this.alpha;
			ctx.beginPath();
			ctx.arc(0, 0, 1, 0.5 * Math.PI, 1.5*Math.PI, true);
			ctx.moveTo(0, -1);
			ctx.arcTo(this.d, 0, 0, 1, this.dis(0, -1, this.d, 0) / this.d);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
	},
	dis(x1, y1, x2, y2) {
		return Math.sqrt((x1-x2) * (x1-x2) + (y1-y2)*(y1-y2));
	},

	// 更新
	update() {
		// 更新坐标
		// s = vt;
		this.x += this.vx * 0.7;
		this.y += this.vy * 0.7;

		// 碰撞检测
		if (this.x > canvas.width - this.R) {
			this.x = canvas.width - this.R;
			this.vx = -this.vx;
		}
		if (this.x < this.R) {
			this.x = this.R;
			this.vx = -this.vx;
		}
		if (this.y < this.R) {
			this.y = this.R;
			this.vy = -this.vy;
		}
		if (this.y > canvas.height - this.R) {
			this.y = canvas.height - this.R;
			this.vy = -this.vy;
		}

		// 画圆
		this.drawShape();
	}
}
