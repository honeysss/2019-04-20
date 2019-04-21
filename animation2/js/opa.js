window.onload = function() {
	var oDiv = document.getElementById('box');
	oDiv.onmouseover = function() {
		startMove(100);
	}
	oDiv.onmouseout = function() {
		startMove(30);
	}

	var timer = null;
	var alpha = 30;
	function startMove(target) {
		clearInterval(timer);
		timer = setInterval(function() {
			// 如果目标值大于当前的透明度 负值
			if (target > alpha) {
				alpha += 10;
			} else {
				alpha -= 10;
			}
			// 如果达到目标值 清空timer
			if (alpha === target) {
				clearInterval(timer);
			} else {
				oDiv.style.opacity = alpha/100;
				oDiv.style.filter = 'alpha(opacity:' + alpha + ')';
			}
		}, 30)
	}
}