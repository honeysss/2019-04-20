define(['jquery', 'jqueryUI', 'widget'], function ($, $UI, widget) {
	var wid = new widget.Widget();
	function Alert () {
		this.configs = {
			width: 500,
			height: 300,
			contentMessage: '确认',
			content: '这是一个警告框a',
			isDraggabel: false,
			hasMask: true,
			hasClose: true,
			handler4AlertBtn: null,
			handler4CancelBtn: null,
			skinTheme: null,
			dragHandle: null,
			title: '警告框a'
		}
	}

	

	// 继承别的类也可以通过这种方法
	Alert.prototype = $.extend(wid, {
		renderUI() {
			this.box = $('<div class="window_box">' +
												'<span class="title"></span>' +
												'<div class="content"></div>' +
												 '<span class="confirm"></div>'+
												'</div>');
			this.box.appendTo('body');


			// 添加标题
			var title = $('.window_box').find('.title');
			title.text(this.configs.title);
			// 添加警告的文字
			var boxCon = $('.window_box').find('.content');
			boxCon.html(this.configs.content);
			// 添加按钮里的文字
			var btn = $('.window_box').find('.confirm');
			btn.html(this.configs.contentMessage);
			// 添加关闭按钮
			this.configs.hasClose && this.box.append('<span class="close">&times;</span>');
			// 添加皮肤
			this.configs.skinTheme && $('.window_box').addClass('window_skin_a');
			// 添加遮罩
			var mask = $('<div class="mask"></div>');
			this.configs.hasMask && mask.appendTo('body');

		},
		bindUI() {
			var _this = this;
			var closeBtn = $('.window_box').find('.close');
			var btn = $('.window_box').find('.confirm');

			// 先绑定事件
			if (this.configs.handler4AlertBtn) {
				this.on('alert', this.configs.handler4AlertBtn);
			}
			if (this.configs.handler4CancelBtn) {
				this.on('cancel', this.configs.handler4CancelBtn);
			}

			closeBtn.click(function () {
				// 在这里触发刚刚绑定的alert事件
				_this.fire('cancel');
				_this.destroy();
			});
			btn.click(function () {
				// 在这里触发刚刚绑定的cancel事件
				_this.fire('alert');
				_this.destroy();
			});
		},
		destructor() {
			this.configs.hasMask && $('.mask').off() && $('.mask').remove();
		},
		syncUI() {
			if(this.configs.isDraggabel) {
				$('.window_box').draggable({
					cursor: 'pointer',
					handle: this.configs.dragHandle,
					containment: this.configs.hasMask ? '.mask' : ''
				});
			}

			this.box.css({
				'width': this.configs.width,
				'height': this.configs.height,
				'top': (this.configs.top || ($(window).height - this.configs.height)/2) + 'px',
				'left': (this.configs.left || ($(window).width - this.configs.width)/2) + 'px',
			})
		},

		alert (configs) {
			this.configs = $.extend(this.configs, configs);
			this.render();
			return this;
		}
	});

	return {
		Alert
	}
})