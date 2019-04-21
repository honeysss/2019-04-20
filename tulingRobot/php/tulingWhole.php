<?php
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
	// 如果支持curl
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

	// 如果灵儿回复的消息里有超链接 把超链接添加到内容中国
	if (!empty($json->url)){
		$content .= "<a href=' ".$json->url." '>打开页面 </a>";
	}
	//处理返回的数据---列表
	if (!empty($json->list)) {
		$i=0;
		//新闻类
		if ($json->code == 302000) {
			$newinfo='';
			foreach ($json->list as $list_item) {
				$newinfo .= "\n[".++$i."]<a href=' ".$list_item->detailurl." '>".$list_item->article."</a>";

				if ($i==5)
				break;
			}
		$content .= $newinfo;
		}
		//菜谱类
		if ($json->code == 308000) {
			$menuinfo='';
			foreach ($json->list as $list_item) {
				$menuinfo.="\n[".++$i."] <a href=' ".$list_item->detailurl." '>".$list_item->name."</a>\n".$list_item->info;

				if ($i==5) 
					break;
			}
			$content .=' -- 共'.count($json->list)."项\n".$menuinfo;
		}
	}
	return $content;
}


//方法调用：



$arr = array(
'key' => 'c574d932b5e144f487017570c8bafd22',	//这里填写自己的机器人密钥 apiKey
'info' => '我喜欢你喔',
'userid' => '1102958935',
'loc' => ''
);


$res = lingerAnswer($arr);
echo $res;

?>
