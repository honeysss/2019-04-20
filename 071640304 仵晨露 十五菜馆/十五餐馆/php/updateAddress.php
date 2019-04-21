<?php
    require_once ("connect.php");
session_start();
    $userName = $_POST['userName'];
    $loginName = $_POST['loginName'];
    $address = $_POST['address'];
    $tel = $_POST['tel'];
    $sex = $_POST['sex'];
    $id = $_POST['id'];


    $sql = "update userinfo set userName = '$userName',loginName = '$loginName',addr = '$address',tel = '$tel',gender = '$sex'
            where userinfoId = $id;";

    $sql1 = "select * from userinfo where userName = '$userName' and loginName = '$loginName' and addr = '$address' and tel = '$tel' and gender = '$sex';";
    $query1 = mysqli_query($con,$sql1);
    if($query1 && mysqli_num_rows($query1)){
//        此时在数据库中存在有一模一样的地址
        echo "false";
    }else if(mysqli_query($con,$sql)){
        echo "success";
    }
?>