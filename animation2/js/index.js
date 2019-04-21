window.onload = function() {
	var oDiv = document.getElementById('box');
	// 每次鼠标移上去让元素的left值加一
	oDiv.onmouseover = function() {
		startMove(0);
	}
	oDiv.onmouseout = function() {
		startMove(-190);
	}

	var timer = null;
	var speed = 0;
	function startMove(target) {
		clearInterval(timer);
		timer = setInterval(function() {
			// 如果现在的偏移量大于目标的偏移量 说明要往左移动 速度为负
			// if (oDiv.offsetLeft > target) {
			// 	speed = (target - oDiv.offsetLeft) * 0.1;
			// } else {
				speed = (target - oDiv.offsetLeft) * 0.1;
				// 如果速度大于零 向上取整 如果速度小于零 向下取整
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			// }
			if (oDiv.offsetLeft === target) {
				clearInterval(timer);
			} else {
				oDiv.style.left = oDiv.offsetLeft + speed + 'px';
			}
		}, 30);		
	}
}