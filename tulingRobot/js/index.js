WIDTH = $(window).width();
HEIGHT = $(window).height();

$(document).ready(function() {
	// 初始化界面
	init();
})

function init () {

	if (WIDTH >= 500) {
		$('#container').css('width', WIDTH*0.3);
		$('#container').css('margin', '20px auto');
	} else {
		$('#container').css('width', WIDTH);
	}
	$('#container').css('height', HEIGHT);
	
	containerWidth();


	// 输入框回车键
	$('#message').keyup(function (e) {
		var e = e || window.event;
		if (e.keyCode === 13) {
			sendMessage();
			changeBg();
		}
	})
	// 点击发送
	$('#sendMessgae').click(function () {
		sendMessage();
		changeBg();
	})
	scrollToDown();

	// 键盘输入事件
	$('#message').on('keyup', function () {
		changeBg();
	})

}


//	消息的宽度
function containerWidth () {
	// 聊天消息的宽度
	// 机器人
	// 如果屏幕宽度大于400 在pc端 以300为分解
	// 否则是手机端 以200为分界
	var robotMessage = $('.robotMessage');
	robotMessage.each(function (i) {
		var robotMessageWidth = parseInt($('.robotMessage').eq(i).css('width'));
		if (WIDTH > 400) {
			if (robotMessageWidth >= 300) {
				$('.robotMessage').eq(i).css('width', '300px');
			}
		} else {
			if (robotMessageWidth >= 205) {
				$('.robotMessage').eq(i).css('width', '205px');
			}
		}
	})
	// 我
	var meMessage = $('.meMessage');
	meMessage.each(function (i) {
		var meMessageWidth = parseInt($('.meMessage').eq(i).css('width'));
		if (WIDTH > 400) {
			if (meMessageWidth >= 300) {
				$('.meMessage').eq(i).css('width', '300px');
			}
		} else {
			if (meMessageWidth >= 205) {
				$('.meMessage').eq(i).css('width', '205px');
			}
		}
	})
}

// 改变发送的背景色
function changeBg () {
	var val = $('#message').val();
	if (val !== '') {
		$('#sendMessgae').css('background-color', '#9178F3');
	} else {
		$('#sendMessgae').css('background-color', '#A19C9C');
	}
}

// 发送消息
function sendMessage () {
	var val = $('#message').val();
	$('#message').val('');
	if (val !== '') {
		// 获得当下的一个时间
		var meTime = getTime();
		// 这里的路径...
		$.get('../../tulingRobot/php/index.php', {
			meMessage: val,
			meTime: meTime
		}, function (data) {
			$('.content').html(data);
			containerWidth();
			scrollToDown();
		})
	}
}

// 获取当前时间的函数
function getTime () {
	var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;

  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + date.getHours() + seperator2 + date.getMinutes()
          + seperator2 + date.getSeconds();
  return currentdate;
}

// 滚动条一直显示到最底部
function scrollToDown () {
	var scrollTop = $('.content')[0].scrollHeight;
	$('.content').scrollTop(scrollTop);
}
	