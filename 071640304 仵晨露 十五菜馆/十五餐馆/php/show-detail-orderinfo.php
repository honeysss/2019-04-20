<?php
    require_once ("connect.php");
    session_start();
    $orderId = $_GET['orderId'];
    $userName = $_GET['userName'];
    $loginName = $_GET['loginName'];
    $arriveTime = $_GET['arriveTime'];
    $remark = $_GET['remark'];
    $totalPrice = $_GET['totalPrice'];
    $rePrice = $_GET['rePrice'];
    $payMethod = $_GET['payMethod'];
    $state = $_GET['state'];
    $buyTime = $_GET['buyTime'];
    $payPrice = $_GET['payPrice'];
    $gender = $_GET['gender'];
    $tel = $_GET['tel'];
    $address = $_GET['address'];

//    数组
    $orderNum = $_GET['orderNum'];
    $img = $_GET['img'];
    $foodName = $_GET['foodName'];
    $perPrice = $_GET['perPrice'];

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

    $_SESSION['orderId'] = $orderId;
    $_SESSION['orderNum'] = $orderNum;
    $_SESSION['userName'] = $userName;
    $_SESSION['loginName'] = $loginName;
    $_SESSION['arriveTime'] = $arriveTime;
    $_SESSION['remark'] = $remark;
    $_SESSION['totalPrice'] = $totalPrice;
    $_SESSION['rePrice'] = $rePrice;
    $_SESSION['payMethod'] = $payMethod;
    $_SESSION['img1'] = $img;
    $_SESSION['foodName'] = $foodName;
    $_SESSION['state'] = $state;
    $_SESSION['buyTime'] = $buyTime;
    $_SESSION['payPrice'] = $payPrice;
    $_SESSION['perPrice'] = $perPrice;
    $_SESSION['gender'] = $gender;
    $_SESSION['tel'] = $tel;
    $_SESSION['address'] = $address
?>