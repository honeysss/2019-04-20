var speed = 0;
function startMove(obj, attr, target, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var icur = 0;
		if (attr === 'opacity') {
			icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		} else {
			icur = parseInt(getStyle(obj, attr));
		}

		speed = (target - icur) * 0.1;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (target === icur) {
			clearInterval(obj.timer);
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
	}, 30);
}

function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}