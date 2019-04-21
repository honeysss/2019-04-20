define(['jquery', 'jqueryUI', 'alert'], function ($, $UI, a) {
	var aler = new a.Alert();
	function Prompt () {
		this.configs = {
			width: 500,
			height: 300,
			isDraggabel: false,
			hasMask: true,
			hasClose: false,
			handler4CancelBtn: null,
			skinTheme: null,
			dragHandle: null,
			// confirm
			prompt4ConfirmBtn: '确定',
			prompt4CancelBtn: '取消',
			prompt4Handle: null,
			cancel4promptHandle: null,
			title: '提示框',
			isPwd: false, 		//是否是密码形式
			placeHolder: '说点什么吧...'
		}
	}

	Prompt.prototype = $.extend(aler, {
		renderUI() {
			this.box = $('<div class="window_box">' +
												'<span class="title"></span>' +
												'<div class="footer">'+
												'<input class="promptContent"/>'+
												'<span class="promptConfirm">确定</span>'+
												'<span class="promptCancel">取消</span>' +
												'</div>'+
												'</div>');
			this.box.appendTo('body');
			
			var input = $('.promptContent');

			var type = this.configs.isPwd ? "password" : "text";
			var placeholder = this.configs.placeHolder || '';
			input.attr('type', type);
			input.attr('placeholder', placeholder);


			// 添加标题
			var title = $('.window_box').find('.title');
			title.text(this.configs.title);
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
			var promptConfirm = $('.promptConfirm');
			var promptCancel = $('.promptCancel');

			//prompt
			if (this.configs.prompt4Handle) {
				this.on('alert', this.configs.prompt4Handle);
			}
			if (this.configs.cancel4promptHandle) {
				this.on('cancel', this.configs.cancel4promptHandle);
			}

			promptConfirm.click(function () {
				var data = $('.promptContent').val();
				_this.fire('alert', data);
				_this.destroy();
			});
			promptCancel.click(function () {
				_this.fire('cancel');
				_this.destroy();
			});

			// 先绑定事件
			if (this.configs.handler4CancelBtn) {
				this.on('cancel', this.configs.handler4CancelBtn);
			}

			closeBtn.click(function () {
				// 在这里触发刚刚绑定的alert事件
				_this.fire('cancel');
				_this.destroy();
			});
		},
		prompt(configs) {
			this.configs = $.extend(this.configs, configs);
			this.render();
			return this;
		}
	});

	return {
		Prompt
	}
})