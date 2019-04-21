'use strict';

// 预加载图片
function loadImage(images, callback, timeout) {
	// 计数器 加载完成图片
	var count = 0;
	// 全部图片加载成功
	var success = true;
	// 超时
	var timeoutId = 0;
	// 是否加载超时
	var isTimeout = false;

	// 对图片数组进行遍历
	for (var key in images) {
		// 过滤prototype上的属性
		// hasOwnPrototype属性判断images中是否有key属性
		// 如果images中不包含key属性
		if (!images.hasOwnProperty(key)) {
			continue;
		}
		// 获得每个图片的元素
		var item = images[key];

		if (typeof item === 'string') {
			item = images[key] = {
				src: item
			};
		}

		// 如果不是想要的格式
		if (!item || !item.src) {
			continue;
		}


		// 计数加一
		count++;
		// 设置图片元素的id
		item.id = '_img_' + key + getId();
		// 设置图片的img
		item.img = window[item.id] = new Image();

		// 加载图片
		deLoad(item);
	}

	// 如果计数为0  直接调用callback函数
	if (!count) {
		callback(success);
	} else if (timeout) {
		timeoutId = setTimeout(onTimeout. timeout);
	}


	// 真正进行图片加载的函数
	function deLoad(item) {
		item.status = 'loading';
		
		var img = item.img;

		// 图片加载成功的回调函数
		img.onload = function() {
			success = success && true;
			item.status = 'loading';
			done();
		}

		// 图片加载成功的回调函数
		img.onerror = function() {
			success = false;
			item.status = 'error'
			done();
		}

		// 发起一个请求
		img.src = item.src;

		// 每张图片加载完成的回调函数
		function done() {
			// 清理资源
			img.onload = img.onerror = null;

			try {
				delete window[item.id];
			} catch(e) {

			}


			// 计数
			// 如果计数为零 --0 代表true 代表图片加载完毕
			if (!--count && isTimeout) {
				clearTimeout(timeoutId);
				callback(success);
			}
		}
	}

	// 超时函数
	function onTimeout() {
		isTimeout = true;
		callback(false);
	}

}


var __id = 0;
function getId() {
	return ++__id;
}

module.exports = loadImage;
