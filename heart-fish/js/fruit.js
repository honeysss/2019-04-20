var FruitObj = function () {
	this.x = [];
	this.y = [];
	this.speed = [];
	this.isAlive = [];
	this.orange = new Image();
	this.blue = new Image();
	this.l = [];
	this.fruitType = [];
	// 定义一个植物的生长速度 运动速度也可以根据生长速度随机得到
	this.speed = [];
	// 定义一个海葵的id 用来改变海葵的空闲状态
	this.aneId = [];

}

FruitObj.prototype.num = 20;


FruitObj.prototype.init = function () {
	for (var i = 0; i < this.num; i ++) {
		this.isAlive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.born(i);
		// 初始化速度
		this.speed[i] = Math.random() * 0.007 + 0.005;
	}
	this.orange.src = "../img/fruit.png";
	this.blue.src = "../img/blue.png";
}


FruitObj.prototype.draw = function () {
	for (var i = 0; i < this.num; i ++) {
		var aneId = this.aneId[i];
		// 如果这个水果的状态是活着  才把这个水果画到屏幕上
		if (this.isAlive[i]) {
			if (this.l[i] < fruitSize) {
				this.x[i] = ane.headx[aneId] + ane.l * ane.amp[aneId];
			}
				// 得到出生的海葵的位置
				// 生长的大小等于生长速度乘以时间差
				// 生长速度不同 运动速度也不同 因为两者是联系在一起的 所以生长速度快的运动速度也快
			this.l[i] += this.speed[i] * (deltaTime-5);
			if (this.l[i] >= fruitSize) {
				// 当这个水果离开海葵的时候 海葵处于空闲状态
				ane.buzy[aneId] = false;
				this.l[i] = fruitSize;
				// 运动速度等于生长速度乘以6乘以时间差
				this.y[i] -= this.speed[i] * 6 * deltaTime;
			}
			ctx2.drawImage(this.fruitType[i], this.x[i] - this.l[i]*0.5, this.y[i] - this.l[i]*0.5, this.l[i], this.l[i]);

			if (this.y[i] <= 10) {
				this.isAlive[i] = false;
			}
		}
	}
}	

FruitObj.prototype.born = function(i){
	var aneId = Math.floor(Math.random() * ane.num);
	
	// 当该海葵还没有被占用 赋值 否则继续循环
	while (ane.buzy[aneId]) {
		aneId = Math.floor(Math.random() * ane.num);
	}
	this.x[i] = ane.headx[aneId];
	this.y[i] = canHeight - ane.heady[aneId];
	ane.buzy[aneId] = true;
	// 该水果的海葵的id存下来
	this.aneId[i] = aneId;
	this.l[i] = 0;
	this.isAlive[i] = true;
	this.fruitType[i] = Math.random() > 0.1 ? this.orange : this.blue;
};

FruitObj.prototype.dead = function (i) {
	this.isAlive[i] = false;
}



// 果实监听函数 看屏幕上的果实是否少于15 如果少 则重生一个
function fruitMonitor () {
	var num = 0;
	for (var i = 0; i < fruit.num; i ++) {
		if (fruit.isAlive[i]) {
			num ++;
		}
	}

	if (num < 25) {
		sendFruit();
		return;
	}
}

// // 重生果实
function sendFruit () {
	for (var i = 0; i < fruit.num; i ++) {
		if (!fruit.isAlive[i]) {
			fruit.born(i);
			return;
		}
	}
}
