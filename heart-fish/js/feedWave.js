var FeedWaveObj = function () {
	this.x = [];
	this.y = [];
	this.r = [];
	this.isAlive = [];
	this.alpha = [];

}

FeedWaveObj.prototype.num = 2;

FeedWaveObj.prototype.init = function () {
	for (var i = 0; i < this.num; i ++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.isAlive[i] = false;
		this.alpha[i] = 0;
	}
}

FeedWaveObj.prototype.draw = function () {
	ctx1.save();
	ctx1.lineWidth = 3;
	ctx1.strokeStyle = '#E43A3A';
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'white';
	for (var i = 0; i < this.num; i ++) {
		if (this.isAlive[i]) {
			this.r[i] += deltaTime * 0.08;
			if (this.r[i] >= feedR) {
				this.isAlive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i]/feedR;
			if (alpha <= 0) {
				alpha = 0;
			}
			this.alpha[i] = alpha;
			ctx1.globalAlpha = this.alpha[i];
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2*Math.PI, false);
			ctx1.closePath();
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

FeedWaveObj.prototype.born = function (x, y) {
	for (var i = 0; i < this.num; i ++) {
		if (!this.isAlive[i]) {
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 0;
			this.isAlive[i] = true;
			return;
		}
	}
}