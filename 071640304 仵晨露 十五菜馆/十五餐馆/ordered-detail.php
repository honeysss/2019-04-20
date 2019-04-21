<?php
require_once ("php/connect.php");
session_start();
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
    <title>ordered-detail</title>
</head>
<body id="detailed-body">
<!--        详细订单-->
<div class="detailed">
    <!--                食物的信息-->
    <ul class="food-info">

        <?php
            if(!empty($_SESSION['orderNum'])){
                for($i = 0;$i < sizeof($_SESSION['orderNum']);$i ++){

        ?>

        <li>
            <img src="<?php echo $_SESSION['img1'][$i];?>"/>
            <p class="food-info-left detail-name"><?php echo $_SESSION['foodName'][$i];?></p>
            <p class="food-info-right detail-price-icon">￥<span class="detail-price"><?php echo $_SESSION['perPrice'][$i];?></span> </p>
            <p class="food-info-right detail-num-icon">&times;<span class="detail-num"><?php echo $_SESSION['orderNum'][$i];?></span> </p>
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
            <p class="food-info-right reduced-icon">-￥<span class="reduced-price"><?php echo $_SESSION['rePrice'];?></span> </p>
        </li>
        <li>
            <p class="food-info-right actual-pay">
                实付
                <span class="actual-pay-icon">￥</span>
                <span class="actual-pay-price"><?php echo $_SESSION['payPrice'];?></span>
            </p>
        </li>
    </ul>

    <!--                配送的信息-->
    <ul class="de-info">
        <li>
            <p class="de-info-left de-info-p">配送信息</p>
        </li>
        <li>
            <p class="de-info-left">订餐时间</p>
            <p class="de-info-right"><?php echo $_SESSION['buyTime'];?></p>
        </li>
        <li>
            <p class="de-info-left">送达时间</p>
            <p class="de-info-right"><?php echo $_SESSION['arriveTime'];?></p>
        </li>
        <li>
            <p class="de-info-left">收货地址</p>
            <p class="de-info-right de-info-info">
                <span class="de-info-add"><?php echo $_SESSION['address'];?></span>
                <span class="de-info-name"><?php echo $_SESSION['loginName'];?></span>
                <span>(<span class="de-info-sex"><?php echo $_SESSION['gender'];?></span>)</span>
                <span class="de-info-tel"><?php echo $_SESSION['tel'];?></span>
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
            <p class="order-info-right orderId"><?php echo $_SESSION['orderId'];?></p>
        </li>
        <li>
            <p class="order-info-left">支付方式</p>
            <p class="order-info-right pay-method"><?php echo $_SESSION['payMethod'];?></p>
        </li>
        <li>
            <p class="order-info-left">下单时间</p>
            <p class="order-info-right">
                <span class="big-pay-time"><?php echo $_SESSION['buyTime'];?></span>
            </p>
        </li>
        <li>
            <p class="order-info-left">订单备注</p>
            <p class="order-info-right recommend"><?php echo $_SESSION['remark'];?></p>
        </li>
    </ul>

    <a href="mainPage.php" title="返回首页" class="back-mainPage">返回首页</a>

</div>
</body>
</html>