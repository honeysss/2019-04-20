define(['jquery', 'jqueryUI', 'alert'], function ($, $UI, a) {
	var aler = new a.Alert();
	function Common () {
		this.configs = {
			width: 500,
			height: 300,
			contentMessage: '确认',
			content: '这是一个弹窗',
			isDraggabel: false,
			hasMask: true,
			handler4AlertBtn: null,
			handler4CancelBtn: null,
			skinTheme: null,
			dragHandle: null,
			title: '弹窗'
		}
	}

	Common.prototype = $.extend(aler, {
		renderUI() {
			this.box = $('<div class="window_box">' +
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
			// 添加皮肤
			this.configs.skinTheme && $('.window_box').addClass('window_skin_a');
			// 添加遮罩
			var mask = $('<div class="mask"></div>');
			this.configs.hasMask && mask.appendTo('body');

		},
		bindUI() {
			var _this = this;
			var btn = $('.window_box').find('.confirm');

			// 先绑定事件
			if (this.configs.handler4AlertBtn) {
				this.on('alert', this.configs.handler4AlertBtn);
			}
			btn.click(function () {
				// 在这里触发刚刚绑定的cancel事件
				_this.fire('alert');
				_this.destroy();
			});
		},

		common (configs) {
			this.configs = $.extend(this.configs, configs);
			this.render();
			return this;
		}
	});

	// 插件
	
	$.fn.extend({
		commonMethod(configs) {
			return this.each(function () {
				new Common().common(configs);
			})
		}
	})

	return {
		Common
	}
})