window.onload = function() {
	var lis = document.getElementsByTagName('li');
	for (var i = 0; i < lis.length; i ++) {
		lis[i].onmousemove = function() {
			startMove(this, 500);
		}
		lis[i].onmouseout = function() {
			startMove(this, 300);
		}
 	}

 	// 好像是obj.style.width/height/left/right是行内元素 加上px可以修改元素的样式
 	// obj.offsetWidth/Left/Heoght是在外部style里书写的样式 不可以修改元素的样式

 	var speed = 0;
 	function startMove(obj, target) {
 		clearInterval(obj.timer);
 		obj.timer = setInterval(function() {
 			// 如果目标值大于现在的宽度 正值
 			// if (target > obj.offsetWidth) {
 			// 	speed = 10;
 			// } else {
 			// 	speed = -10;
 			// }
 			speed = (target - obj.offsetWidth) * 0.1;
 			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
 			if (target === obj.offsetWidth) {
 				clearInterval(obj.timer);
 			} else {
 				obj.style.width = obj.offsetWidth + speed + 'px';
 			}
 		}, 30);
 	}


}