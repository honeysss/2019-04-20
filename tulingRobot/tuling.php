<?php 
	session_start();
	$time = date("Y-m-d H:i:s", time()+7*3600); 
	$content = ['你是不是想我啦?', '今天的天气真不错', '你今天开心吗?', '你好呀亲爱的~'];
	$message = $content[array_rand($content)];
	$_SESSION['data'] = [
		[
			'identity'=> 'robot',
			'img'=> 'img/robot.jpg',
			'time'=> $time,
			'content'=> $message
		]
	];
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport"
				content="width=device-width,
				height=device-height,
	 			initial-scale=1.0
	 			minimum-sale=1.0
	 			maximum-scale=1.0
	 			user-scaleable=no" />
	<title>tulingRobot</title>
	<link rel="stylesheet" href="css/index.css" />
</head>
<body>

	<div id="container">
		<!-- 背景图 -->
		<img src="img/1.jpg" class="bgPic" />

		<!-- 头部 -->
		<div id="top">
			<p class="robotName">灵儿</p>
		</div>

		<!-- 中间 -->
		<div class="content">
	
			<!-- 定义一个数组
				里面存放若干个对象 每一条消息都是一个对象
				里面有身份 头像 时间和内容
			最开始有一个机器人的对象
			我发送一条消息的时候往数组里push一个我当前消息的对象 
			机器人回复我的时候往数组里push带有机器人消息的对象
			在这里循环 如果是机器人 输出 机器人的内容 
			否则输出我的内容 -->
	
			<?php 
				for ($i = 0; $i < count($_SESSION['data']); $i ++) {
					if ($_SESSION['data'][$i]['identity'] === 'robot') {
			?>

			<!-- 机器人内容 -->
			<div class="robotContent">
				<!-- 时间 -->
				<p class="robotTime"><?php echo $_SESSION['data'][$i]['time']; ?></p>
				<!-- 头像 -->
				<img src="<?php echo $_SESSION['data'][$i]['img']; ?>" class="robotHead" />
				<!-- 内容 -->
				<span class="robotMessage"><?php echo $_SESSION['data'][$i]['content']; ?></span>
			</div>

			<div class="clear"></div>
		
			<?php 
				} else {
			 ?>

			<!-- 我的内容 -->
			<div class="meContent">
				<!-- 时间 -->
				<p class="meTime"><?php echo $_SESSION['data'][$i]['time']; ?></p>
				<!-- 头像 -->
				<img src="<?php echo $_SESSION['data'][$i]['img']; ?>" class="meHead" />
				<!-- 内容 -->
				<span class="meMessage"><?php echo $_SESSION['data'][$i]['content']; ?></span>
			</div>

			<div class="clear"></div>

			<?php

					}
				}
			?>
		</div>

		<!-- 底部 -->
		<div id="bottom">
			<input type="text" id="message" autofocus="autofocus" />
			<button id="sendMessgae">发送</button>
		</div>
	</div>
	
	<script src="http://libs.baidu.com/jquery/1.10.1/jquery.min.js"></script>
	<script src="js/index.js"></script>
</body>
</html>