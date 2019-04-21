<?php
require_once ("connect.php");
session_start();
$orderId = $_POST['orderId'];
$userName = $_POST['userName'];
$loginName = $_POST['loginName'];
$arriveTime = $_POST['arriveTime'];
$remark = $_POST['remark'];
$totalPrice = $_POST['totalPrice'];
$rePrice = $_POST['rePrice'];
$payMethod = $_POST['payMethod'];
$state = $_POST['state'];
$buyTime = $_POST['buyTime'];
$payPrice = $_POST['payPrice'];
$gender = $_POST['gender'];
$tel = $_POST['tel'];
$address = $_POST['address'];

$foodName = $_POST['foodName'];
$img = $_POST['img'];
$perPrice = $_POST['perPrice'];
$orderNum = $_POST['orderNum'];

if($remark == ""){
    $remark = "无备注信息";
}

if($gender == "女"){
    $gender = "女士";
}else if($gender == "男"){
    $gender = "先生";
}


if($state == 1){
    $arriveTime = "预计在 ".$arriveTime." 送达";
}else if ( $state == 0){
    $arriveTime = "----";
}


?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>show-detail-order</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/comment.css"/>
    <link rel="stylesheet" href="css/business.css"/>
    <link rel="stylesheet" href="css/mine.css"/>
    <link rel="stylesheet" href="css/order.css"/>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/php.js/sign and register.js"></script>
    <script src="js/comment.js"></script>
    <script src="js/order.js"></script>
    <script src="js/mine.js"></script>
    <script src="js/php.js/my.js"></script>
    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
<ul class="food-info">

    <?php
        if(!empty($orderNum)){
            for($i = 0;$i<sizeof($orderNum);$i++){

    ?>

    <li>
        <img src="<?php echo $img[$i];?>"/>
        <p class="food-info-left detail-name"><?php echo $foodName[$i];?></p>
        <p class="food-info-right detail-price-icon">￥<span class="detail-price"><?php echo $perPrice[$i];?></span> </p>
        <p class="food-info-right detail-num-icon">&times;<span class="detail-num"><?php echo $orderNum[$i];?></span> </p>
    </li>

    <?php

            }
        }
    ?>

    <li>
        <p class="food-info-left de-price">配送费</p>
        <p class="food-info-right de-price-icon">￥<span class="de-price-num">1</span> </p>
    </li>
    <li>
        <p class="food-info-left reduced">在线支付立减优惠</p>
        <p class="food-info-right reduced-icon">-￥<span class="reduced-price"><?php echo $rePrice;?></span> </p>
    </li>
    <li>
        <p class="food-info-right actual-pay">
            实付
            <span class="actual-pay-icon">￥</span>
            <span class="actual-pay-price"><?php echo $payPrice;?></span>
        </p>
    </li>
</ul>

<!--                配送的信息-->
<ul class="de-info">
    <li>
        <p class="de-info-left de-info-p">配送信息</p>
    </li>
    <li>
        <p class="de-info-left">送达时间</p>
        <p class="de-info-right"><?php echo $arriveTime;?></p>
    </li>
    <li>
        <p class="de-info-left">收货地址</p>
        <p class="de-info-right de-info-info">
            <span class="de-info-add"><?php echo $address;?></span>
            <span class="de-info-name"><?php echo $loginName;?></span>
            <span>(<span class="de-info-sex"><?php echo $gender;?></span>)</span>
            <span class="de-info-tel"><?php echo $tel;?></span>
        </p>
    </li>
    <li>
        <p class="de-info-left">配送方式</p>
        <p class="de-info-right">商家配送</p>
    </li>
</ul>

<!--              订单信息  -->
<ul class="order-info">
    <li>
        <p class="order-info-left order-info-p">订单信息</p>
    </li>
    <li>
        <p class="order-info-left">订单号</p>
        <p class="order-info-right orderId"><?php echo $orderId;?></p>
    </li>
    <li>
        <p class="order-info-left">支付方式</p>
        <p class="order-info-right pay-method"><?php echo $payMethod;?></p>
    </li>
    <li>
        <p class="order-info-left">下单时间</p>
        <p class="order-info-right">
            <span class="big-pay-time"><?php echo $buyTime;?></span>
        </p>
    </li>
    <li>
        <p class="order-info-left">订单备注</p>
        <p class="order-info-right recommend"><?php echo $remark;?></p>
    </li>
</ul>
</body>
</html>
