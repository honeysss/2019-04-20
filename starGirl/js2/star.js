
var StarObj = function () {
	this.x;
	this.y;
	this.picNum;
	this.timer;
	this.speed;
	this.startX;
	this.startY;
	this.showX;
	this.showY;
}

StarObj.prototype.init = function () {
	// 随机坐标
	this.x = Math.random() * 793 + 100; 		//[100, 893)
	this.y = Math.random() * 393 + 100;		//[100, 493)

	// 第几个星星
	this.picNum = Math.floor(Math.random() * 6);

	// 初始化间隔时间
	this.timer = 0;

	// 初始化距离
	this.speed = Math.random() * 3 - 1.5;	// [-1.5, 1.5)

	// 初始化显示的坐标 要显示的大小 正常是从0 0 开始 显示7*7个像素大小
	this.startX = 0;
	this.startY = 0;
	this.showX = 7;
	this.showY = 7;
}

StarObj.prototype.updatePicNum = function () {

	// 修改坐标	s = vt
	var distance = this.speed * deltaTime * 0.004;
	this.x += distance
	this.y += distance
	// 边界判断 如果超过边界 重新初始化这颗星星 它会重新生成在女孩图片上面
	if (this.x < 97 || this.x > 900 || this.y < 97 || this.y > 500) {
		this.init();
		// 返回 不执行下面的代码
		return;
	}	
	// x 如果x的坐标 93 100
	if (this.x >= 97 && this.x <= 104) {
		this.startX = 104 - this.x;
		this.showX = 7 - this.startX;
	}
	// x 如果x的坐标 893 900
	if (this.x >= 893 && this.x <= 900) {
		this.showX = 900 - this.x;
	}
	
	// y 如果y的坐标 93 100
	if (this.y >= 97 && this.y <= 104) {
		this.startY = 104 - this.y;
		this.showY = 7 - this.startY;
	}
	// y 如果y的坐标 500 507
	if (this.y >= 493 && this.y <= 500) {
		this.showY = 500 - this.y;
	}

	// 让间隔时间等于函数执行的间隔时间
	this.timer += deltaTime;
	if (this.timer > 50) {
		this.picNum += 1;		//0 1 2 3 4 5
		this.picNum %= 6;
		// 如果间隔大于50 清空timer值 下次重新计算 否则继续叠加 直到大于50
		this.timer = 0;
	}
}

StarObj.prototype.drawStar = function () {
	ctx.save();
	ctx.globalAlpha = alpha;
	// if (showStar) {
		ctx.drawImage(starPic, this.picNum * 7 + this.startX, this.startY, this.showX, this.showY, this.x, this.y, this.showX, this.showY);
	// }
	ctx.restore();
}

// 绘制多个星星 因为在一定时间后重复调用这个函数
// 拿第一个星星stars[0]为例 先画了它的第一个picNum状态 然后更新它的picNum
// 下一次再画它的时候 它的picNum会变成上次更新后的数字 以此类推
function drawStars () {
	for (var i = 0; i < starNum; i ++) {
		stars[i].drawStar();
		// 更新
		stars[i].updatePicNum();
		// console.log(stars[0].picNum);    //0 1 2 3 4 5 0 1 2 3 4 5 0...
	}
}


// 星星的透明度
function alphaNum () {
	if (showStar) {
		alpha += 0.03 * deltaTime * 0.05;
		if (alpha > 1) {
			alpha = 1;
		}
	} else {
		alpha -= 0.03 * deltaTime * 0.05;
		if (alpha < 0) {
			alpha = 0;
			// 当透明度为0的时候重新初始化星星以便下次move上来的时候产生星星的位置还是随机的
			for (var i = 0; i < starNum; i ++) {
				stars[i].init();
			}
		}
	}
}