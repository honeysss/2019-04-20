<?php
require_once("connect.php");
session_start();
$username = $_POST['username'];
$psw = $_POST['psw'];
$psw1 = $_POST['psw1'];
$imgSrc = $_POST['imgSrc'];
$identifyCode = $_POST['identifyCode'];
$sql = "select userName from userr where userName = '$username'";   //查询userr表中是否已经存在该用户名
$query = mysqli_query($con,$sql);


$sql1 = "insert into userr VALUES ('$username','$psw','$imgSrc')";
if($_SESSION['identifyCode'] == $identifyCode) {
    if ($query && mysqli_num_rows($query)) {
        echo "false";
    } else {
        if (mysqli_query($con, $sql1)) {
            echo "success";
            $_SESSION['userName'] = $username;
            $_SESSION['img'] = $imgSrc;
        }

    }
}else{
    echo "wrongCode";
}

?>