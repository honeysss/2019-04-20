// 自定义事件

define(['jquery'], function ($) {
	function Widget () {
		this.box = null;
	};

	Widget.prototype = {
		on: function (type, handler) {
			// 如果还未绑定过该事件 为该事件声明一个数组 并把该事件的函数push到数组中
			// 否则直接push到该事件的数组中
			// 此处的handler是一个回调函数 加入我绑定了一个click事件让它alert一个内容 click是type alert一个内容是handler
			if (typeof this.handlers[type] === 'undefined') {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},

		// 加入type是click 这里遍历所有的click事件 
		fire: function (type, data) {
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for (var i = 0; i < handlers.length; i ++) {
					handlers[i](data);
				}
			}
		},
		render(container) {
			this.renderUI();
			this.handlers = {};
			this.bindUI();
			this.syncUI();
			$(container || document.body).append(this.box);
		},
		destroy() {
			this.destructor();
			this.box.off();
			this.box.remove();
		},
		destructor() {},
		renderUI() {},
		bindUI() {},
		syncUI() {}
	};

	return {
		Widget
	}
})