// 漂浮物
var DustObj = function () {
	this.x = [];
	this.y = [];
	this.speed = [];
	this.isAlive = [];
	this.dustNum = [];
	this.angel;
	this.l;
	this.amp = [];
}

DustObj.prototype.num = 30;

DustObj.prototype.init = function(){
	for (var i = 0; i < this.num; i ++) {
		this.x[i] = Math.random() * (canWidth-40) + 20;
		this.y[i] = Math.random() * canHeight;
		this.speed[i] = Math.random() * 0.007 + 0.005;
		this.isAlive[i] = true;
		this.dustNum[i] = parseInt(Math.floor(Math.random()*7));
		this.amp[i] = 20 + Math.random() * 25;
	}
	this.angel = 0;
};

DustObj.prototype.draw = function () {
	for (var i = 0; i < this.num; i ++) {
		if (this.isAlive[i]) {
			this.angel += deltaTime * 0.000027;
			this.l = Math.sin(this.angel);
			this.y[i] -= this.speed[i] * 3 * deltaTime;
			var dustNum = this.dustNum[i];
			// 画漂浮物
			ctx1.drawImage(dustArr[dustNum], this.x[i] + this.l * this.amp[i], this.y[i] - dustArr[dustNum].height*0.5, dustArr[dustNum].width, dustArr[dustNum].height);

			if (this.y[i] <= 10) {
				this.isAlive[i] = false;
			}

		}
	}
}

DustObj.prototype.born = function (i) {
	this.x[i] = Math.random() * (canWidth-40) + 20;		//[20, canWidth-20]
	this.y[i] = Math.random() * (-125) + canHeight-5;		//[0, canHeight]
	this.speed[i] = Math.random() * 0.007 + 0.005;
	this.isAlive[i] = true;
	this.dustNum[i] = parseInt(Math.floor(Math.random()*7));		//[0, 6]
}

function dustMonitor () {
	var dustNum = 0;
	for (var i = 0; i < dust.num; i ++) {
		if (dust.isAlive[i]) {
			dustNum ++;
		}
	}

	if (dustNum < dust.num) {
		sendDust();
	}

}


function sendDust () {
	for (var i = 0; i < dust.num; i ++) {
		if (!dust.isAlive[i]) {
			dust.born(i);
		}
	}
}
