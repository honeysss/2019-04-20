var DataObj = function () {
	this.orangeFruitNum;
	this.blueFruitNum;
	this.double;
	this.orangeFruit = new Image();
	this.blueFruit = new Image();
	this.score;
}

DataObj.prototype.init = function () {
	this.orangeFruitNum = 0;
	this.blueFruitNum = 0;
	this.double = 1;
	this.orangeFruit.src = "../img/fruit.png";
	this.blueFruit.src = "../img/blue.png";
	this.score = 0;
}


DataObj.prototype.draw = function () {
	ctx1.fillStyle = '#F9E8E8';
	ctx1.textAligin = 'center';
	ctx1.shadowColor = 'white';
	ctx1.shadowBlur = 10;
	ctx1.save();
	ctx1.drawImage(this.orangeFruit, canWidth * 0.5, canHeight - 60, 14, 14);
	ctx1.drawImage(this.blueFruit, canWidth * 0.5, canHeight - 30, 14, 14);
	ctx1.fillText(this.orangeFruitNum, canWidth * 0.5 + 20, canHeight - 60);
	ctx1.fillText(this.blueFruitNum, canWidth * 0.5 + 20, canHeight - 30);
	ctx1.restore();

	ctx1.save();
	ctx1.font = '20px Arial bold';
	ctx1.fillText('SCORE:', canWidth * 0.5 - 40, 40);
	ctx1.fillText(this.score, canWidth * 0.5 + 40 , 40);
	ctx1.restore();

}

