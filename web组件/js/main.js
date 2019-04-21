requirejs.config({
	paths: {
		jquery: '../jquery-ui-1.12.1.custom/external/jquery/jquery',
		jqueryUI: '../jquery-ui-1.12.1.custom/jquery-ui.min'
	}
});

requirejs(['jquery', 'alert', 'confirm', 'prompt', 'common'], function ($, a, c, p, common) {

	// 警告框
	var alertBox = new a.Alert();
	$('.alertBox').click(function () {
		alertBox.alert({
			width: 500,
			height: 300,
			content: '这是一个警告框',
			contentMessage: 'OK',
			hasMask: true,
			hasClose: true,
			handler4AlertBtn: function () {
				alert('this is a confirm button');
			},
			title: '警告框',
			handler4CancelBtn: function () {
				alert('this is a cancel button');
			},
			// 这里可以传自己定制的皮肤
			// 传入特定的class
			skinTheme: '.window_skin_a',
			isDraggabel: true,
			dragHandle: '.title'
		})
		// }).on('alert', function () {
		// 	alert('the second alert');
		// }).on('alert',function () {
		// 	alert('the third alert');
		// }).on('cancel', function () {
		// 	alert('the cancel close');
		// })
	});

	// 确认框
	var confirmBox = new c.Confirm();
	$('.confirmBox').click(function () {
		confirmBox.confirm({
			width: 500,
			height: 300,
			content: '这是一个确认框a',
			isDraggabel: false,
			hasMask: true,
			hasClose: false,
			handler4AlertBtn: function () {
				alert('this is a confirm button');
			},
			skinTheme: null,
			dragHandle: null,
			confirmBtn: 'yes',
			cancelBtn: 'no',
			confirm4Handle: function () {
				alert('you click the confirm');
			},
			cancel4ConfirmHandle: function () {
				alert('you click the cancel');
			},
			title: '确认框'
		});
	})

	// 提示框
	var promptBox = new p.Prompt();
	$('.promptBox').click(function () {
		promptBox.prompt({
			width: 500,
			height: 300,
			isDraggabel: false,
			hasMask: true,
			hasClose: false,
			handler4CancelBtn: null,
			skinTheme: '.window_skin_a',
			dragHandle: null,
			prompt4ConfirmBtn: '对',
			prompt4CancelBtn: '错',
			prompt4Handle: function (data) {
				alert('you are' + data + 'years old');
			},
			cancel4promptHandle: function () {
				alert('you click the cancel prompt');
			},
			title: '提示框',
			isPwd: true, 		//是否是密码形式
			placeHolder: '请输入你的年龄'
		});
		$('.promptContent').focus();
	})

	// 普通框
	// var commonBox = new common.Common();
	$('.commonBox').click(function () {
		// commonBox.common();
		$('.commonBox').commonMethod();
	})

})
