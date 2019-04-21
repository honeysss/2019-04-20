<?php
    require_once ("connect.php");
    $userName = $_POST['userName'];
    $loginName = $_POST['loginName'];
    $tel = $_POST['tel'];
    $address = $_POST['address'];
    $gender = $_POST['gender'];

    $sql1 = "select * from userinfo where userName = '$userName' and loginName = '$loginName' and tel = '$tel' and addr = '$address' and gender = '$gender';";
    $query1 = mysqli_query($con,$sql1);



    $sql2 = "insert into userinfo(userName, loginName, gender, tel, addr) values('$userName','$loginName','$gender','$tel','$address');";

//    如果数据库中已经存在一模一样的地址
    if($query1 && mysqli_num_rows($query1)){
        echo "exist";
    }else{
//        如果插入成功
        if(mysqli_query($con,$sql2)){
            echo "success";
        }
    }
?>