documentWidth = window.screen.availWidth;
documentHeight = window.screen.availHeight;

gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getLeft (j) {
	return cellSpace + (cellSideLength + cellSpace) * j;
};

function getTop (i) {
	return cellSpace + (cellSideLength + cellSpace) * i;
};


// 数字的背景色和数字的颜色在更新格子和生成数字的时候都会用到
// 数字的背景色
function getNumberBackgroundColor(number) {
	switch (number) {
		case 2:
			return '#eee4da';
			break;
		case 4:
			return '#ede0c8';
			break;
		case 8:
			return '#f2b179';
			break;
		case 16:
			return '#f59563';
			break;
		case 32:
			return '#f67c5f';
			break;
		case 64:
			return '#f65e3b';
			break;
		case 128:
			return '#edcf72';
			break;
		case 256:
			return '#edcc61';
			break;
		case 512:
			return '#99cc00';
			break;
		case 1024:
			return '#33b5e5';
			break;
		case 2048:
			return '#09c';
			break;
		case 4096:
			return '#a6c';
			break;
		case 8192:
			return '#93c';
			break;
		default:
			break;
	}
};

// 数字的颜色
function getNumberColor (number) {
	if (number === 2 || number === 4) {
		return '#776e65';
	} else {
		return 'white';
	}
};

// 判断是否还有空间
function noSpace (board) {
	// 如果还有剩余空间 返回false 否则返回true
	for (var i = 0; i < 4; i ++) {
		for (var j = 0; j < 4; j ++) {
			if (board[i][j] === 0) {
				return false;
			}
		}
	}

	return true;
}

// 判断是否能向左移动
function canMoveLeft (board) {
	for (var i = 0; i < 4; i ++) {
		for (var j = 1; j < 4; j ++) {
			if (board[i][j] !== 0) {
				// 如果左边的格子为零或者与当前格子的值相同 则符合可向左移动条件
				if (board[i][j-1] === 0 || board[i][j-1] === board[i][j]) {
					return true;
				}
			}
			
		}
	}

	return false;
}

// 判断该点的右边是否有障碍物
function noBarRight (row, col1, col2, board) {
	// 如果在k的右边存在一个格子不为零
	// 则返回false
	for (var j = col2+1; j < col1; j ++) {
		if (board[row][j] !== 0) {
			return false;
		}
	}
	return true;
}

// 判断是否能向上移动
function canMoveUp (board) {
	for (var i = 1; i < 4; i ++) {
		for (var j = 0; j < 4; j ++) {
			if (board[i][j] !== 0) {
				if (board[i-1][j] === 0 || board[i-1][j] === board[i][j]) {
					return true;
				}
			}
		}
	}

	return false;
}

// 判断该点的下方是否有障碍物
function noBarDown (row1, col, row2, board) {
	for (var i = row2+1; i < row1; i ++) {
		if (board[i][col] !== 0) {
			return false;
		}
	}	

	return true;
}

// 判断是否能向右移动
function canMoveRight (board) {
	for (var i = 0; i < 4; i ++) {
		for (var j = 0; j < 3; j ++) {
			if (board[i][j] !== 0) {
				if (board[i][j+1] === 0 || board[i][j+1] === board[i][j]) {
					return true;
				}
			}
		}
	}

	return false;
}

// 判断该格子的左边是否有障碍物
function noBarLeft (row, col1, col2, board) {
	for (var j = col1+1; j < col2; j ++) {
		if (board[row][j] !== 0) {
			return false;
		}
	}
	return true;
}

// 判断是否能向下移动
function canMoveDown (board) {
	for (var i = 0; i < 3; i ++) {
		for (var j = 0; j < 4; j ++) {
			if (board[i][j] !== 0) {
				if (board[i+1][j] === 0 || board[i+1][j] === board[i][j]) {
					return true;
				}
			}
		}
	}

	return false;
}

// 判断该格子的上方是否有障碍物
function noBarTop (row1, col, row2, board) {
	for (var i = row1+1; i < row2; i ++) {
		if (board[i][col] !== 0) {
			return false;
		}
	}
	return true;
}




// 设置分数
function setScore (score) {
	$('#score').text(score);
	$('#score').animate({
		'fontSize': '30px'
	}, 40);
	$('#score').animate({
		'fontSize': '16px'
	}, 100);
}
