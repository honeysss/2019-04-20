// 这里定义一个模板 可以在入口文件index.js中使用 当然别的地方也可以使用
// move和go方法
// 因为需要jquery插件，所以引入了jquery
define(['jquery'], function ($) {
	// 创建一个构造函数
	function ScrollTo(opts) {
		this.opts = $.extend(ScrollTo.DEFAULTS, opts);
		this.$el = $('html, body');
	};

// 设置一些默认的值
	ScrollTo.DEFAULTS = {
		speed: 300,
		dest: 0
	};

	ScrollTo.prototype.move = function () {
		var opts = this.opts,
				dest = this.opts.dest;
		if ($(window).scrollTop !== dest) {
			if (!this.$el.is(':animated')) { //判断是否在运动
				this.$el.animate({
					scrollTop: dest
				}, opts.speed);
			}
		}
	};

	ScrollTo.prototype.go = function () {
		var dest = this.opts.dest;
		if ($(window).scrollTop !== dest) {
			if (!this.$el.is(':animated')) {
				this.$el.scrollTop(dest);
			}
		}
	}

// 返回构造函数 让别的页面可以实例化并且使用它
	return {
		scrollTo: ScrollTo
	};
})