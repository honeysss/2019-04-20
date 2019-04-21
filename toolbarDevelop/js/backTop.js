define(['jquery', 'position'], function($, position) {
	function BackTop(el, opts) {
		this.opts = $.extend(BackTop.options, opts);
		this.$el = $(el);
		this.scroll = new position.scrollTo({
			mode: this.opts.mode,
			speed: this.opts.speed,
			dest: this.opts.dest
		})

	// proxy的第一个参数是要调用的方法 第二个参数是this的指向
	// 这里调用的方法是scroll里的move方法，如果不改变this的指向，这里的this会指向$('.toolbar-four')标签
	// 我们需要让this指向实例化的scroll对象
		if(this.opts.mode === 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		} else {
			this.$el.on('click', $.proxy(this._go, this));
		}

		$(window).on('scroll', $.proxy(this._checkPosition, this));

	}

	BackTop.options = {
		mode: 'move',
		dest: 0,
		speed: 300,
		pos: $(window).height()
	}

	BackTop.prototype._move = function () {
		this.scroll.move();
	};

	BackTop.prototype._go = function () {
		this.scroll.go();
	}

	BackTop.prototype._checkPosition = function () {
		var $el = this.$el;
		if ($(window).scrollTop() > this.opts.pos - 20) {
			$el.fadeIn();
		} else {
			$el.fadeOut();
		}
	}

// 插件形式
	$.fn.extend({
		// 插件的名字是backTop 返回一个函数 接收opts参数
		backTop: function (opts) {
			// 循环实例化对象
			return this.each(function() {
				new BackTop(this, opts);
			})
		}
	})

	return {
		BackTop
	}

});