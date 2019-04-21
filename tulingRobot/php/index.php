<?php
session_start();

//方法调用
// 得到用户输入的内容
// 每次得到用户输入的信息的时候 接收传递过来的 message time 变成一个数组 push到$_SESSION['data']中
// 同时将robot得到的message img time变成一个数组push到data中
if (isset($_GET['meMessage'])) {
	$meMessage = $_GET['meMessage'];
} else {
	$meMessage = '';
}
if (isset($_GET['meTime'])) {
	$meTime = $_GET['meTime'];
}

// 用户数组
$meArr = [
			'identity'=> 'me',
			'img'=> 'img/me.jpg',
			'time'=> $meTime,
			'content'=> $meMessage
			];
array_push($_SESSION['data'], $meArr);


$send = array(
	'key' => 'c574d932b5e144f487017570c8bafd22',	//这里填写自己的机器人密钥 apiKey
	'info' => $meMessage,
	'userid' => '1102958935',
	'loc' => ''
);
$robotMessage = lingerAnswer($send);
$robotTime = date("Y-m-d H:i:s", time() + 7*3600);
$robotArr = [
			'identity'=> 'robot',
			'img'=> 'img/robot.jpg',
			'time'=> $robotTime,
			'content'=> $robotMessage
			];
array_push($_SESSION['data'], $robotArr);




// $array是传过来的信息 包括我说话的内容 我的apiKey 我的userid
// $posturl是灵儿的地址
function lingerAnswer ( $array, $posturl="http://www.tuling123.com/openapi/api" ) {
	// 如果传过来的消息为空 或者不是一个数组
	if (empty($array) || !is_array($array)) {
		return 'ERROR: Sorry, your param is wrong.';
	}

	//如果是数组 用json方式解析这个数组 
	$jsoninfo = json_encode($array);

	//模拟post请求
	//初始化curl 如果支持curl返回true 否则返回false
	$ch = curl_init();
	// 如果支持不curl
	if ( $ch === false ){
		return 'ERROR: Sorry, you cannot open curl.';
	}
	// 如果支持curls
	curl_setopt($ch, CURLOPT_URL, $posturl); 	//抓取指定网页
	curl_setopt($ch, CURLOPT_HEADER, 0);	//设置header
	curl_setopt($ch, CURLOPT_HTTPHEADER,
							array("Content-type:application/json;charset=utf-8",
							"Content-Length: " . strlen($jsoninfo)));		//设置head头的请求数据格式为json
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);		//要求结果为字符串且输出到屏幕上
	curl_setopt($ch, CURLOPT_POST, 1); 		//post提交方式
	curl_setopt($ch, CURLOPT_POSTFIELDS, $jsoninfo);

	$data = curl_exec($ch); 	//运行curl 返回请求的json数据
	$json = json_decode($data);		//把json数据转为php的对象类型

	curl_close($ch);	//关闭curl

	$content = $json->text;	//获取返回的文本信息

	return $content;
}
?>

<?php 
	for ($i = 0; $i < count($_SESSION['data']); $i ++) {
		if ($_SESSION['data'][$i]['identity'] === 'robot') {
?>

<!-- 机器人内容 -->
<div class="robotContent">
	<!-- 时间 -->
	<p class="robotTime"><?php 
		$timeStamp1 = strtotime($_SESSION['data'][$i]['time']);
		$timeStamp2 =strtotime($_SESSION['data'][$i-1]['time']);
		$timeDiff = $timeStamp1 - $timeStamp2; 
		if ($timeDiff > 120) {
			echo $_SESSION['data'][$i]['time']; 
		}
	 ?></p>
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
	<p class="meTime"><?php
	// 获取现在这个时间距离上一个时间的时间戳 如果大于两分钟才显示 否则不显示
	$timeStamp1 = strtotime($_SESSION['data'][$i]['time']);
	$timeStamp2 =strtotime($_SESSION['data'][$i-1]['time']);
	$timeDiff = $timeStamp1 - $timeStamp2; 
	if ($timeDiff > 30) {
		echo $_SESSION['data'][$i]['time']; 
	}
	 ?></p>
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
