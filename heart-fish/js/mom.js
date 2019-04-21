var MomObj = function () {
	this.x;
	this.y;
	this.angle;

	this.tailTimer;
	this.tailCount;
	this.eyeTimer;
	this.eyeCount;
	this.orangeBodyTimer;
	this.orangeBodyCount;
	this.blueBodyCount;
	this.blueBodyTimer;
	// 定义一个大鱼吃到果实的数量
	this.fruitNum;
	this.fruitType;
	this.blue = new Image();
}

MomObj.prototype.init = function () {
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;

	this.tailTimer = 0;
	this.tailCount = 0;
	this.eyeTimer = 0;
	this.eyeCount = 0;
	// 大鱼的身体默认是满值
	this.orangeBodyCount = 7;
	this.blueBodyCount = 0;
	this.orangeBodyTimer = 0;
	this.blueBodyTimer = 0;
	this.fruitNum = 7;
	// 默认为黄色
	this.fruitType = 0;
	this.blue.src = '../img/bigSwimBlue7.png';

}

MomObj.prototype.draw = function () {

	this.x = lerpDistance(mx, this.x, 0.97);
	this.y = lerpDistance(my, this.y, 0.97);


	// 计算角度
	// 得到大鱼y坐标距离鼠标y坐标的差 x同理
	var delY = this.y - my;
	var delX = this.x - mx;

	// 该函数计算这个坐标距离原点的角度
	var angle = Math.atan2(delY, delX);
	this.angle = lerpAngle(angle, this.angle, 0.7);


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
		if (this.eyeTimer > timer) {		// [1000, 3000]
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

	// 定义一个时间 到一定时间让大鱼身体减弱 如果减弱到零  则游戏结束
	// this.orangeBodyTimer += deltaTime;
	
	// if (this.orangeBodyTimer > momBodyChange) {
	// 	// 如果减到零
	// 	if (this.orangeBodyCount == 0) {
	// 		this.orangeBodyCount = 0;
	// 		// console.log('游戏结束');
	// 	} else {
	// 		this.orangeBodyCount -= 1;
	// 	}
	// 	this.orangeBodyTimer %= momBodyChange;
	// }


	// 定义一个时间 
	// this.blueBodyTimer += deltaTime;
	
	// if (this.blueBodyTimer > momBodyChange) {
	// 	// 如果减到零
	// 	if (this.blueBodyCount == 0) {
	// 		this.blueBodyCount = 0;
	// 	} else {
	// 		this.blueBodyCount -= 1;
	// 	}
	// 	this.blueBodyTimer %= momBodyChange;
	// }

	


	var tailCount = this.tailCount;
	var eyeCount = this.eyeCount;
	var orangeBodyCount = this.orangeBodyCount;
	// var blueBodyCount = this.blueBodyCount;
	
	// 如果大鱼的身体值等于零
	if (orangeBodyCount == 0) {
		gameOver = true;
	}


	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(momTail[tailCount], -momTail[tailCount].width * 0.5 + 25, -momTail[tailCount].height * 0.5);

	if (this.fruitType == 0) {
		ctx1.drawImage(momOrangeBody[orangeBodyCount], -momOrangeBody[orangeBodyCount].width * 0.5, -momOrangeBody[orangeBodyCount].height * 0.5);
	} else {
		ctx1.drawImage(this.blue, -this.blue.width * 0.5, -this.blue.height * 0.5);
	}
	
	ctx1.drawImage(momEye[eyeCount], -momEye[eyeCount].width * 0.5, -momEye[eyeCount].height * 0.5);
	ctx1.restore();
}

