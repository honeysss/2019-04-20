define(['jquery'], function ($) {
	var Star = function () {
		this.config = {
			starSrc: '../img/star.png',
			starNum: 60,
		}
	}

	Star.prototype = {
		// 调用画星星
		drawStars() {
			// 画星星 循环
			for (var i = 0; i < this.config.starNum; i ++) {
				this.drawStar();
			}
		},
		// 画星星
		drawStar() {
			var _this = this;
			var starPic = new Image();
			starPic.src = this.config.starSrc;
			// 随机坐标
			var randX = Math.random() * 786 + 107; 		//[107, 893)
			var randY = Math.random() * 386 + 107;		//[107, 493)
			// 随机第几个星星 [0, 4]
			var randStar = Math.floor(Math.random() * 5); 	

			_this.ctx.save();
			_this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
			starPic.onload = function () {
				_this.ctx.drawImage(starPic, randStar * 7, 0, 7, 7, randX, randY, 7, 7);		
			}
			_this.ctx.restore();
		},
	}
	return {
		Star
	}

})