// 同时运动和链式运动


var speed = 0;
function startMove(obj, json, fn) {
	// 在外面获取到json的长度
	var len = 0;
	for (var i in json) {
		len ++;
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		// 定义一个变量等于0
		var j = 0;
		for (var attr in json) {
			var icur = 0;
			if (attr === 'opacity') {
				icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				icur = parseInt(getStyle(obj, attr));
			}

			speed = (json[attr] - icur) * 0.1;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (json[attr] === icur) {
				// 当有一个属性达到目标值的时候 让变量j累加一次 直到所有的属性都达到目标值 即j等于len时 清除定时器
				j ++;
				if (j === len) {
					clearInterval(obj.timer);
				}
				if (fn) {
					fn();
				}
			} else {
				if (attr === 'opacity') {
					obj.style[attr] = (icur + speed) / 100;
					obj.style.filter = 'alpha(opacity:' + (icur+speed) +')';
				} else {
					obj.style[attr] = icur + speed + 'px';
				}
			}
		}
		
	}, 30);
}

function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}