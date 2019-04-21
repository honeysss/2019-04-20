define(['jquery', 'jqueryUI', 'alert'], function ($, $UI, a) {
	// 因为alert已经继承了widget的方法，所以直接继承alert也等于继承了widget
	var aler = new a.Alert();
	function Confirm () {
		this.configs = {
			width: 500,
			height: 300,
			content: '这是一个确认框',
			isDraggabel: false,
			hasMask: true,
			hasClose: false,
			handler4CancelBtn: null,
			skinTheme: null,
			dragHandle: null,
			// confirm
			confirmBtn: '确定',
			cancelBtn: '取消',
			confirm4Handle: null,
			cancel4ConfirmHandle: null,
			title: '确认框'
		}
	}

	Confirm.prototype = $.extend(aler, {
		renderUI() {
			this.box = $('<div class="window_box">' +
												'<span class="title"></span>' +
												'<div class="content"></div>' +
												 '<div class="footer">'+
												 '<span class="confirmBtn"></span><span class="cancelBtn"></span>' +
												 '</div>'+
												'</div>');
			this.box.appendTo('body');
			
			// confirm
			$('.confirmBtn').text(this.configs.confirmBtn);
			$('.cancelBtn').text(this.configs.cancelBtn);
			// 添加标题
			var title = $('.window_box').find('.title');
			title.text(this.configs.title);
			// 添加警告的文字
			var boxCon = $('.window_box').find('.content');
			boxCon.html(this.configs.content);
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
			var confirmBtn = $('.confirmBtn');
			var cancelBtn = $('.cancelBtn');

			// confirm
			if (this.configs.confirm4Handle) {
				this.on('alert', this.configs.confirm4Handle);
			}
			if (this.configs.cancel4ConfirmHandle) {
				this.on('cancel', this.configs.cancel4ConfirmHandle);
			}
			if (this.configs.handler4CancelBtn) {
				this.on('cancel', this.configs.handler4CancelBtn);
			}

			confirmBtn.click(function () {
				_this.fire('alert');
				_this.destroy();
			});
			cancelBtn.click(function () {
				_this.fire('cancel');
				_this.destroy();
			});
			closeBtn.click(function () {
				// 在这里触发刚刚绑定的alert事件
				_this.fire('cancel');
				_this.destroy();
			});
		},
		confirm(configs) {
			this.configs = $.extend(this.congigs, configs);
			this.render();
			return this;
		}

	});

	return {
		Confirm
	}

})