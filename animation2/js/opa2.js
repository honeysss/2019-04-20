window.onload = function() {
	var lis = document.getElementsByTagName('li');
	for (var i = 0; i < lis.length; i ++) {
		lis[i].onmouseover = function() {
			startMove(this,100);
			this.alpha = 30;
		}
		lis[i].onmouseout = function() {
			startMove(this,30);
		}
	}

	function startMove(obj, target) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			// 如果目标值大于当前的透明度 负值
			if (target > obj.alpha) {
				obj.alpha += 10;
			} else {
				obj.alpha -= 10;
			}
			// 如果达到目标值 清空timer
			if (obj.alpha === target) {
				clearInterval(obj.timer);
			} else {
				obj.style.opacity = obj.alpha/100;
				obj.style.filter = 'alpha(opacity:' + obj.alpha + ')';
			}
		}, 30)
	}
}