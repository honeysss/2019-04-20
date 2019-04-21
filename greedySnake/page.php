<?php
header("Content-type:text/html;charset=utf-8");
define("HOST","localhost:3306");
define("USERNAME",'root');
define("PASSWORD",'');

$con = mysqli_connect(HOST,USERNAME,PASSWORD);
if(!$con){
    echo "连接失败";
    mysqli_connect_error();
}
if(!mysqli_select_db($con,"message")){
    echo mysqli_error();
}
if(!mysqli_set_charset($con,"utf8")){
    echo mysqli_error();
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>pages</title>
    <style>
        th,td{
            height:30px;
        }
        .banner{
            position: absolute;
            margin-top:500px;
            margin-left: 23%;
        }
        .banner a{
            display: inline-block;
            width:40px;
            height:40px;
            text-align: center;
            line-height: 40px;
            margin-right: 20px;
            text-decoration: none;
            color: #1b3eff;
            background-color: antiquewhite;
        }
        .banner a:hover{
            background-color: #3556ff;
            color: red;
        }
        .prev,
        .next{
            width:80px !important;
            background-color: antiquewhite;
        }
        .top,
        .tail{
            width:60px !important;
            background-color: antiquewhite;
        }
        .num{
            border-radius: 10px;
            border: 1px solid red;
        }
        .num:hover{
            background-color: antiquewhite !important;
            color: #1b3eff !important;
        }
        .topDis,
        .tailDis,
        .prevDis,
        .nextDis{
            background-color: gainsboro !important;
            color: slategray !important;
            cursor: auto;
        }
        .topDis:hover,
        .tailDis:hover,
        .prevDis,
        .nextDis{
            background-color: gainsboro !important;
            color: slategray !important;
            cursor: auto;
        }
        .toPage{
            width:320px;
            height:40px;
            position: absolute;
            top:70px;
            left: 30%;
            font-size: 16px;
        }
        .misc{
            background-color: white !important;
            color: black !important;
            width: 20px !important;
        }

    </style>
</head>
<body style="width: 100%;height: 100%;position: relative;">
<?php

$page = $_GET['p'] ? $_GET['p'] : 1;

$pageLength = 10;

//获取数据条数
$sql1 = "select count(*) from pages;";
$query1 = mysqli_query($con,$sql1);
//总条数
$allNum = ceil(mysqli_fetch_array($query1)[0] / $pageLength);
//当前页面
$currentPage = ($page-1) * $pageLength;

//获取数据
$sql = "select * from pages limit $currentPage,$pageLength;";
$query = mysqli_query($con,$sql);
if($query && mysqli_num_rows($query)){
    while($result = mysqli_fetch_assoc($query)){
        $data[] = $result;
    }
}
//显示数据
if(!empty($data)){
    echo "<table border='1' style='position: absolute;margin: 50px 280px;width: 60%;height: 70%;'>";
    echo "<tr><th>id</th><th>内容</th></tr>";
    foreach ($data as $value){
        echo "<tr><td>".$value['pageId']."</td><td>".$value['pageContent']."</td></tr>";
    }
    echo "</table>";
}

//显示页数
$showPage = 5;


//显示分页条
$pageBanner = "<div class='banner'>";
if($page == 1){
    $pageBanner .= "<a href=javascript:;' class='top topDis' >首页</a>";
    $pageBanner .= "<a href=javascript:;' class='prev prevDis'>上一页</a>";
}else{
    $pageBanner .= "<a href='".$_SERVER['PHP_SELF']."?p=1' class='top' >首页</a>";
    $pageBanner .= "<a href='".$_SERVER['PHP_SELF']."?p=".($page-1)."' class='prev'>上一页</a>";
}

//定义一个起始位置
$start = $page - floor($showPage/2);
$end = $page + floor($showPage/2);

if($page <= floor($showPage / 2)){
    $start = 1;
    $end = $showPage;
}else if($page >$allNum - floor($showPage/2) && $page <= $allNum){
    $end = $allNum;
    $start = $allNum - $showPage + 1;
}
if($start != 1){
    $pageBanner .= "<a class='misc'>....</a>";
}
for($i = $start;$i<=$end;$i++){
    if($i == $page){
        $pageBanner .= "<a href=javascript:;' class='num'>".$i."</a>";
    }else{
        $pageBanner .= "<a href='".$_SERVER['PHP_SELF']."?p=".$i."'>".$i."</a>";
    }

}
if($end != $allNum){
    $pageBanner .= "<a class='misc'>....</a>";
}
if($page == $allNum){
    $pageBanner .= "<a href=javascript:;' class='next nextDis'>下一页</a>";
    $pageBanner .= "<a href=javascript:;' class='tail tailDis'>尾页</a>";
}else{
    $pageBanner .= "<a href='".$_SERVER['PHP_SELF']."?p=".($page+1)."' class='next'>下一页</a>";
    $pageBanner .= "<a href='".$_SERVER['PHP_SELF']."?p=".$allNum."' class='tail'>尾页</a>";
}
$pageBanner .= "<div class='toPage'>
<form method='get' action='page.php?p=name'>
跳转到&nbsp;&nbsp;&nbsp;
<input type='number' max='".$allNum."' min='1' name='p'>&nbsp;&nbsp;&nbsp;页&nbsp;&nbsp;&nbsp;
<input type='submit' value='确定'>
</form>
</div>";


$pageBanner .= "</div>";
echo $pageBanner;

?>
</body>
</html>
