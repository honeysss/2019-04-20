'use strict';


var loadImage = require('./imageLoader');
var Timeline = require('./timeline');

// 初始化状态
var STATE_INITIAL = 0;
// 开始状态
var STATE_START = 1;
// 停止状态
var STATE_STOP = 2;
// 同步任务
var TASK_SYNC = 0;
// 异步任务
var TASK_ASYNC = 1;

// 简单的函数封装
function next(callback) {
	callback && callback();
}







// 帧动画库类
function Animation() {
	// 任务队列
	this.taskQueue = [];
	// 索引
	this.index = 0;
	// 状态 为初始化状态
	this.state = STATE_INITIAL;
	this.timeline = new Timeline();
}

/**
 * 添加一个同步任务 加载多张图片
 * @param  {[type]} imgList [description]
 * @return {[type]}         [description]
 */
Animation.prototype.loadImage = function(imgList) {
	var taskFn = function(next) {
		loadImage(imgList.slice(), next);
	};
	var type = TASK_SYNC;

	return this._add(taskFn, type);


};

//添加一个异步定时任务 通过定时改变图片背景位置
Animation.prototype.changePosition = function(ele, positions, imgUrl) {
	var len = positions.length;
	var taskFn;
	var type;
	var _this = this;
	if (!len) {
		taskFn = next;
		type = TASK_SYNC;
	} else {
		taskFn = function(next, time) {
			if (imgUrl) {
				ele.style.backgroundImage = 'url(' + imgUrl + ')';
			}
			// 获得当前背景图片位置索引
			var index = Math.min(type/_this.interval || 0, len-1);
			var postion = positions[index].split(' ');
			// 改变背景图片位置
			ele.style.backgroundPosition = positions[0] + 'px ' + positions[1] + 'px';
			if (index == len-1) {
				next();
			}
		}
		type = TASK_ASYNC;
	}

	return this._add(taskFn, type);
};

//添加一个异步定时任务，通过定时改变img标签的src属性
Animation.prototype.changeSrc = function(ele, imgList) {
	var _this = this;
	var len = imgList.length;
	var taskFn, type;
	if (len) {
		taskFn = function(next, time) {
			var index = Math.min(time / _this.interval | 0, len - 1);
			ele.src = imgList[index];
			if (index === len-1) {
				next();
			}
		}	
		type = TASK_ASYNC;
	} else {
		taskFn = next;
		type = TASK_SYNC;
	}

	return this._add(taskFn, type);
};

//添加一个异步定时执行的任务 自定义动画每帧执行的任务函数
Animation.prototype.enterFrame = function(taskFn) {
	return this._add(taskFn, TASK_ASYNC);
};

// 回调函数
Animation.prototype.then = function(callback) {
	var taskFn = function(next) {
		callback();
		next();
	};
	var type = TASK_SYNC;
	return this._add(taskFn, type);
};


Animation.prototype.start = function(interval) {
	if (this.state === STATE_START) {
		return this;
	}
	// 如果任务链中没有任务
	if (!this.taskQueue.length) {
		return this;
	}
	this.state = STATE_START;
	this.interval = interval;
	this._runTask();
	return this;
};

// 重复次数
Animation.prototype.repeat = function(times) {
	var _this = this;
	var raskFn = function() {
		if (typeof times === 'undefined') {
			// 无限循环 回退到上一个任务
			_this.index--;
			_this._runTask();
			return;
		}
		if (times) {
			times--;
			// 回退
			_this.index--;
			_this._runTask();
		} else {
			// 达到重复次数 跳转到下一个任务
			var task = _this.taskQueue[_this.index];
			_this._next(task);
		}
	};
	var type = TASK_SYNC;
	return this._add(taskFn, type);
};

// repeat的更友好的接口
Animation.prototype.repeatForever = function() {
	return this.repeat();
};

// 等待时间
Animation.prototype.wait = function(time) {
	if (this.taskQueue && this.taskQueue.length > 0) {
		this.taskQueue[this.taskQueue.length - 1].wait = time;
	}
	return this;
};

// 停止
Animation.prototype.pause = function() {
	if (this.state === STATE_START) {
		this.state = STATE_STOP;
		this.timeline.stop();
		return this;
	}
	return this;
};

//重新执行上一次暂停的任务
Animation.prototype.restart = function() {
	if (this.state === STATE_STOP) {
		this.state = STATE_START;
		this.timeline.restart();
		return this;
	}
	return this;
};

//释放资源
Animation.prototype.dispose = function() {
	if (this.state === STATE_INITIAL) {
		this.state = STATE_INITIAL;
		this.taskQueue = null;
		this.timeline.stop();
		this.timeline = null;
		return this;
	}
	return this;
};
// 添加一个任务到任务队列
Animation.prototype._add = function(taskFn, type) {
	this.taskQueue.push({
		taskFn: taskFn,
		type: type
	});

	return this;
};
// 执行任务
Animation.prototype._runTask = function() {
	if (!this.taskQueue || this.state !== STATE_START) {
		return;
	}
	// 任务执行完毕
	if (this.index === this.taskQueue.length) {
		this.dispose();
		return;
	}
	// 获得任务链上的当前任务
	var task = this.taskQueue[this.index];
	// 如果是同步的 执行同步 如果是异步的 执行异步
	if (task.type === TASK_SYNC) {
		this._syncTask(task);
	} else {
		this._asyncTask(task);
	}

};
// 执行同步任务
Animation.prototype._syncTask = function(task) {
	var _this = this;
	var next = function() {
		// 切换到下一个任务
		_this._next(task);
	};
	var taskFn = task.taskFn;
	taskFn(next);
};
// 切换到下一个任务
Animation.prototype._next = function(task) {
	this.index++;
	var _this = this;
	task.wait ? setTimeout(function() {
		_this._next();
	}, task.wait) : _this._runTask();
};
// 执行异步任务
Animation.prototype._asyncTask = function(task) {
	var _this = this;
	// 定义每一帧执行的回调函数
	var enterFrame = function(time) {
		var taskFn = task.taskFn;
		var next = function() {
			// 停止当前任务
			_this.timeline.stop();
			_this._next(task);
		};
		taskFn(next, time);
	};

	this.timeline.onenterframe = enterFrame;
	this.timeline.start(this.interval);
};


module.exports = function() {
	return new Animation();
}