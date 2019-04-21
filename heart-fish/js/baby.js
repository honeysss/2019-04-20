var BabyObj = function () {
	this.x;
	this.y;

	this.tailTimer;
	this.tailCount;
	this.eyeTimer;
	this.eyeCount;
	this.bodyTimer;
	this.bodyCount;
}

BabyObj.prototype.init = function () {
	this.x = mom.x + 50;
	this.y = mom.y;
	this.angle = 0;
	this.tailTimer = 0;
	this.tailCount = 0;
	this.eyeTimer = 0;
	this.eyeCount = 0;
	this.bodyTimer = 0;
	this.bodyCount = 0;
}

BabyObj.prototype.draw = function () {
	this.x = lerpDistance(mom.x, this.x, 0.99);
	this.y = lerpDistance(mom.y, this.y, 0.99);

	// 得到小鱼距离大于的距离并且计算出两者之间相差的角度 以坐标原点为原点
	var delX = this.x - mom.x;
	var delY = this.y - mom.y;
	var angle = Math.atan2(delY, delX);

	// 让小鱼的旋转角度不断趋向于两者之间的角度
	this.angle = lerpAngle(angle, this.angle, 0.8);

	this.tailTimer += deltaTime;
	// 如果时间间隔大于某一个数值 改变尾巴的帧数 清空timer
	if (this.tailTimer > tailChange) {
		this.tailCount = (this.tailCount + 1) % 8;
		this.tailTimer %= tailChange;
	}

	this.eyeTimer += deltaTime;
	// 判断一下当前是睁眼还是闭眼状态
	if (this.eyeCount == 0) {
		// 睁眼
		var timer = Math.random() * 2000 + 1000;
		if (this.eyeTimer > timer) {
			this.eyeCount = 1;
			this.eyeTimer %= timer;
		}
	} else {
		// 闭眼
		if (this.eyeTimer > eyeClose) {
			this.eyeCount = 0;
			this.eyeTimer %= eyeClose;
		}
	}


	this.bodyTimer += deltaTime;
	if (this.bodyTimer > babyBodyChange) {
		// 如果加到19
		if (this.bodyCount == 19) {
			this.bodyCount = 19;
			gameOver = true;
		} else {
			this.bodyCount += 1;
		}
		this.bodyTimer %= babyBodyChange;
	}



	var tailCount = this.tailCount;
	var eyeCount = this.eyeCount;
	var bodyCount = this.bodyCount;



	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyTail[tailCount], -babyTail[tailCount].width * 0.5 + 23, -babyTail[tailCount].height * 0.5);
	ctx1.drawImage(babyBody[bodyCount], -babyBody[bodyCount].width * 0.5, -babyBody[bodyCount].height * 0.5);
	ctx1.drawImage(babyEye[eyeCount], -babyEye[eyeCount].width * 0.5, -babyEye[eyeCount].height * 0.5);

	ctx1.restore();

}