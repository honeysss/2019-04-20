// 动态展示数字
function showNumberWithAnimation(i, j, number) {
	var numberCell = $('#number-cell-' + i + '-' + j);
	numberCell.css({
		'backgroundColor': getNumberBackgroundColor(number),
		'color': getNumberColor(number),
	});

	numberCell.text(number);

	numberCell.animate({
		'width': cellSideLength,
		'height': cellSideLength,
		'top': getTop(i),
		'left': getLeft(j)
	}, 50);

};

// 移动
function showMoveAnimation (fromX, fromY, toX, toY) {
	//把当前的格子i j移动到目的地i k
	 var numberCell = $('#number-cell-' + fromX + '-' + fromY);
	 numberCell.animate({
	 	'left': getLeft(toY),
	 	'top': getTop(toX)
	 }, 200);
}