var canvas = document.getElementById('shapeCanvas');
var ctx = canvas.getContext('2d');
var shapeNum = 80;
var shapes = [];

document.body.onload = init();
function init () {
	for (var i = 0; i < shapeNum; i ++) {
		// 实例化圆
		var shape = new Shape({
			mode: 'nut'
		});
		shapes.push(shape);
		shapes[i].init();
		shapes[i].drawShape();
	}

	setInterval(updateshape, 20);
}

function updateshape () {
	// 清除
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < shapes.length; i ++) {
		shapes[i].update();
	}
}