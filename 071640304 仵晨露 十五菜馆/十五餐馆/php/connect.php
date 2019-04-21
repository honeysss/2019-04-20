<?php
    //继承config.php
    require_once("config.php");
    //连接数据库
    $con = mysqli_connect(HOST,USERNAME,PASSWORD);
    if(!($con)){
        echo "连接失败！".mysqli_connect_error();
    }
    //选择数据库
    if(!(mysqli_select_db($con,"fifteenrestaurant"))){
        echo mysqli_error();
    }
    //设置字符集
    if(!(mysqli_set_charset($con,"utf8"))){
        echo mysqli_error();
    }
?>