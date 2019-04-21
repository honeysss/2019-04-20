var board = new Array();
var score = 0;
var hit = new Array();

var font = 0;

var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;

$(document).ready(function() {
	prepareForMobile();
	// 新的游戏
	newGame();
	// 点击按钮开始新游戏
	$('button').on('click', newGame);
})

// 手机端
function prepareForMobile () {

	if (documentWidth > 500) {
		gridContainerWidth = 500;
		cellSideLength = 100;
		cellSpace = 20;
	}
	$('.container').css({
		'width': gridContainerWidth,
		'height': gridContainerWidth,
		'border-radius': gridContainerWidth * 0.02
	});

	$('.grid').css({
		'width': cellSideLength,
		'height': cellSideLength,
		'border-radius': cellSideLength * 0.02
	})

}

// 新游戏
function newGame() {
	// 初始化
	init();
	// 在随机的两个格子的产生数字2或4
	generateOneNumber();
	generateOneNumber();

};


// 画界面
function init() {
	// 初始化格子的值为0
	// 初始化碰撞
	for (var i = 0; i < 4; i++) {
		board[i] = new Array();
		hit[i] = new Array();
		for (var j = 0; j < 4; j++) {
			board[i][j] = 0;
			hit[i][j] = false;
		}
	}

	// 初始化分数
	score = 0;
	setScore(score);

	// 初始化每个格子的位置
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var gridCell = $('#grid-' + i + '-' + j);
			gridCell.css('left', getLeft(j));
			gridCell.css('top', getTop(i));;
		}
	}

	// 更新格子
	updateBoardView();

}

// 更新格子
// 初始化的时候和每次移动数字的时候需要更新格子
function updateBoardView() {
	// 如果此时存在数字 先把数字清空
	$('.number-cell').remove();

	// 再根据board里的值 添加新的number-cell元素
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			// 动态生成数字的格子
			$('.container').append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>');
			var theNumberCell = $('#number-cell-' + i + '-' + j);
			if (board[i][j] == 0) {
				theNumberCell.css({
					'top': getTop(i) + gridContainerWidth/2,
					'left': getLeft(j) + gridContainerWidth/2,
					'width': 0,
					'heigt': 0
				});
			} else {
				theNumberCell.css({
					'backgroundColor': getNumberBackgroundColor(board[i][j]),
					'color': getNumberColor(board[i][j]),
					'width': cellSideLength,
					'height': cellSideLength,
					'top': getTop(i),
					'left': getLeft(j)
				});

				theNumberCell.text(board[i][j]);

			}
			

			hit[i][j] = false;
		}
	}

	for (var i = 0; i < 4; i ++) {
		for (var j = 0; j < 4; j ++) {
			if (board[i][j].toString().length > 3) {
				// console.log('1');
				$('#number-cell-' + i + '-' + j).css('font-size', (0.4 * cellSideLength) + 'px');
			} else {
				$('#number-cell-' + i + '-' + j).css('font-size', (0.6 * cellSideLength) + 'px');
			}
		}
	}
	$('.number-cell').css({
		'line-height': cellSideLength + 'px'
	});
}

// 生成数字
function generateOneNumber () {

	// 先判断是否还有空余的格子
	if (noSpace(board)) {
		return false;
	}

	// 随机取一个0到3之间的数
	var randX = parseInt(Math.floor(Math.random() * 4));
	var randY = parseInt(Math.floor(Math.random() * 4));

	// 如果此时取到的x y已经有值 要循环取 直到是0
	// while(true) {
	// 	if (board[randX][randY] !== 0) {
	// 		var randX = parseInt(Math.floor(Math.random() * 4));
	// 		var randY = parseInt(Math.floor(Math.random() * 4));
	// 	} else {
	// 		break;
	// 	}
	// }
	
	var time = 0;
	while (time < 50) {
		if (board[randX][randY] === 0) {
			break;
		} else {
			var randX = parseInt(Math.floor(Math.random() * 4));
			var randY = parseInt(Math.floor(Math.random() * 4));
			time ++;
		}
	}

	if (time === 50) {
		for (var i = 0; i < 4; i ++) {
			for (var j = 0; j < 4; j ++) {
				if (board[i][j] === 0) {
					randX = i;
					randY = j;
					break;
				}
			}
		}
	}

	// 随机取2或4
	var randNum = Math.random() > 0.5 ? 2 : 4;

	// 在board上用动画的形式显示该数字
	// 同时也为board赋值
	board[randX][randY] = randNum;
	showNumberWithAnimation(randX, randY, randNum);

	return true;
}


// 键盘事件
$(document).keydown(function(e) {
	var e = e || window.event;
	switch(e.keyCode) {
		// left
		case 37:
			// 阻挡按键带来的默认效果（滚动条）
			e.preventDefault();
			if (moveLeft()) {
				// 如果向左移动
				// 生成一个新的数字
				setTimeout(generateOneNumber, 200);
				// 判断游戏是否结束
				setTimeout(isGameOver, 300);
			}

			break;
		// up
		case 38:
			e.preventDefault();
			if (moveUp()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}

			break;
		// right
		case 39:
			e.preventDefault();
			if (moveRight()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}
			break;
		// down
		case 40:
			e.preventDefault();
			if (moveDown()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}

			break;
		default:
			break;
	}
});

// 触屏事件
// 触屏
document.addEventListener('touchstart', function (e) {
	var e = e || window.event;
	startX = e.touches[0].pageX;
	startY = e.touches[0].pageY;

})

// 移动
// 阻止默认效果
document.addEventListener('touchmove', function (e) {
	e.preventDefault();
})

// 离开
document.addEventListener('touchend', function (e) {
	var e = e || window.event;
	endX = e.changedTouches[0].pageX;
	endY = e.changedTouches[0].pageY;

	// 判断是在x方向还是y方向
	var deltaX = endX - startX;
	var deltaY = endY - startY;

	// 如果距离过小 就return
	if (Math.abs(deltaX) < 0.1 * documentWidth && Math.abs(deltaY) < 0.1 * documentHeight) {
		return;
	}

	if (Math.abs(deltaX) - Math.abs(deltaY) > 0) {
		// 在x方向
		if (deltaX > 0) {
			// 在x正方向
			if (moveRight()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}
		} else {
			if (moveLeft()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}
		}
	} else {
		// 在y方向
		if (deltaY > 0) {
			// y正方向
			if (moveDown()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}
		} else {
			if (moveUp()) {
				setTimeout(generateOneNumber, 200);
				setTimeout(isGameOver, 300);
			}
		}
	}
})


// 游戏是否结束
function isGameOver () {
	if (noSpace(board)) {
		if (!canMoveLeft(board) &&
			!canMoveUp (board) &&
			!canMoveRight (board) &&
			!canMoveDown (board)) {
			alert('Game Over!');
		}
	}
}


// 向左移动
function moveLeft () {
	
	// 判断是否可以向左移动
	if (!canMoveLeft(board)) {
		return false;
	}

	// 向左移动
	for (var i = 0; i < 4; i ++) {
		for (var j = 1; j < 4; j ++) {
			if (board[i][j] !== 0) {
				for (var k = 0; k < j; k ++) {
					// 1、为零 		2、相等
					// 如果左边的可以是落脚点的点的右边没有障碍物
					if (board[i][k] === 0 && noBarRight(i, j, k, board) && !hit[i][j]) {

						// move
						showMoveAnimation(i, j, i, k);
						// 为i k设置元素
						board[i][k] = board[i][j];
						board[i][j] = 0;

						hit[i][j] = true;
						continue;

					} else if (board[i][k] === board[i][j] && noBarRight(i, j, k, board) && !hit[i][j]) {
						// move
						showMoveAnimation(i, j, i, k);
						
						// add
						board[i][k] += board[i][j];
						board[i][j] = 0;
						
						// add score
						score += board[i][k];
						setScore(score);

						hit[i][j] = true;
						continue;

					}
				}
			}
		}
	}

	// 因为updateBoardView是把所有的数字先清空又动态生成的所以会有一种刷新的效果

	setTimeout(updateBoardView, 200);
	return true;
}


// 向上移动
function moveUp () {
	// 判断是否能向上移动
	if (!canMoveUp(board)) {
		return false;
	}

	// 向上移动
	for (var i = 1; i < 4; i ++) {
		for (var j = 0; j < 4; j ++) {
			// 如果该格子不为零
			if (board[i][j] !== 0) {
				for (var k = 0; k < i; k ++) {
					if (board[k][j] === 0 && noBarDown(i, j, k, board) && !hit[i][j]) {
						// move
						showMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						hit[i][j] = true;
						continue;
					} else if (board[k][j] === board[i][j] && noBarDown(i, j, k, board) && !hit[i][j]) {
						// move
						showMoveAnimation(i, j, k, j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						// add
						score += board[k][j];
						setScore(score);
						hit[i][j] = true;
						continue;
					}
				}
			}
		}
	}
	setTimeout(updateBoardView, 200);
	return true;
}

// 向右移动
function moveRight () {
	// 判断是否能向右移动
	if(!canMoveRight(board)) {
		return false;
	}
	// 向右移动
	for (var i = 0; i < 4; i ++) {
		for (var j = 0; j < 3;j ++) {
			if (board[i][j] !== 0) {
				for (var k = 3; k > j; k --) {
					if (board[i][k] === 0 && noBarLeft(i, j, k, board) && !hit[i][j]) {
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						hit[i][j] = true;
						continue;
					} else if (board[i][k] === board[i][j] && noBarLeft(i, j, k, board) && !hit[i][j]) {
						showMoveAnimation(i, j, i, k);
						board[i][k] += board[i][j];
						board[i][j] = 0;

						score += board[i][k];
						setScore(score);
						hit[i][j] = true;
						continue;
					}
				}
			}
		}
	}

	setTimeout(updateBoardView, 200);
	return true;
}

// 向下移动
function moveDown () {
	// 判断是否能够向下移动
	if (!canMoveDown(board)) {
		return false;
	}

	// 向下移动
	for (var i = 0; i < 3; i ++) {
		for (var j = 0; j < 4; j ++) {
			if (board[i][j] !== 0) {
				for (var k = 3; k > i; k --) {
					if (board[k][j] === 0 && noBarTop(i, j, k, board) && !hit[i][j]) {
						showMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						hit[i][j] = true;
						continue;
					} else if (board[k][j] === board[i][j] && noBarTop(i, j, k, board) && !hit[i][j]) {
						showMoveAnimation(i, j, k, j);
						board[k][j] += board[i][j];
						board[i][j] = 0;

						score += board[k][j];
						setScore(score);
						hit[i][j] = true;
						continue;
					}
				}
			}
		}
	}

	setTimeout(updateBoardView, 200);
	return true;
}