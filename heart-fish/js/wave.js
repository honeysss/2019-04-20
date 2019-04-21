var WaveObj = function () {
	this.r = [];
	this.alpha = [];
	this.x = [];
	this.y = [];	
	// 0代表黄色 1代表绿色
	this.color = [];
	this.isAlive = [];
}


WaveObj.prototype.num = 10;

WaveObj.prototype.init = function () {
	for (var i = 0; i < this.num; i ++) {
		this.isAlive[i] = false;
		this.r[i] = 0;
	}

}

WaveObj.prototype.draw = function () {

	ctx1.save();
	ctx1.lineWidth = 3;
	ctx1.shadowColor = 'white';
	ctx1.shadowBlur = 10;
	for (var i = 0; i < this.num; i ++) {
		if (this.isAlive[i]) {
			this.r[i] += deltaTime * 0.08;
			if (this.r[i] >= fruitR) {
				this.isAlive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i]/fruitR;
			if (alpha <= 0) {
				alpha = 0;
			}
			this.alpha[i] = alpha;
			ctx1.strokeStyle = this.color[i];
			ctx1.globalAlpha = this.alpha[i];
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2*Math.PI, false);
			ctx1.closePath();
			ctx1.stroke();
		}
	}
	ctx1.restore();
	
}

WaveObj.prototype.born = function (x, y, c) {
	for (var i = 0; i < this.num; i ++) {
		if (!this.isAlive[i]) {
			this.r[i] = 0;
			if (c == 0) {
				this.color[i] = 'orange';
			} else {
				this.color[i] = 'blue';
			}
			this.x[i] = x;
			this.y[i] = y;
			this.isAlive[i] = true;
			return;
		}
	}
}