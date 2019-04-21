var AneObj = function () {
	this.rootx = [];
	// 海藻moveTo的位置
	this.headx = [];
	this.heady = [];
	this.buzy = [];
	// this.dire;
	this.amp = [];
	this.angel;
	this.l;
}

AneObj.prototype.num = 50;

// 初始化
AneObj.prototype.init = function () {
	var h = canHeight;
	for (var i = 0; i < this.num; i ++) {
		this.rootx[i] = Math.random() * (canWidth - 30) + 15;	//[15, canWidth-15]
		this.headx[i] = this.rootx[i];
		this.heady[i] = Math.random() * 30 + canHeight*1/3;		//[canHeight*2/3, canHeight*2/3+10]
		this.buzy[i] = false;
		this.amp[i] = Math.random() * 50 + 50;
	}
	// this.dire = 'left';
	this.angel = 0;
	
}

// 画海葵
AneObj.prototype.draw = function () {
	this.angel += deltaTime * 0.0008;
	this.l = Math.sin(this.angel);
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for (var i = 0; i < this.num; i ++) {
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i] + this.l * this.amp[i], canHeight - this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
	
}

// 海藻摇动
AneObj.prototype.swing = function () {
	for (var i = 0; i < ane.num; i ++) {
		if (this.dire == 'left') {
			ane.headx[i] -= 0.5;
		} else {
			ane.headx[i] += 0.5;
		}
		if (ane.headx[i] - ane.rootx[i] >= 60) {
			this.dire = 'left';
		}
		if (ane.headx[i] - ane.rootx[i] <= -60) {
			this.dire = 'right';
		}
	}
}