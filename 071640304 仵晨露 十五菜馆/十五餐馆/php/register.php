<?php
require_once("connect.php");
session_start();
$username = $_POST['username'];
$psw = $_POST['psw'];
$identifyCode = $_POST['identifyCode'];

$sql1 = "select * from userr where userName = '$username'";
$query1 = mysqli_query($con, $sql1);
//先看验证码是否正确

if($_SESSION['identifyCode'] === $identifyCode) {
//如果存在该账号
    if ($query1 && mysqli_num_rows($query1)) {
//    检查密码是否正确
        $sql2 = "select * from userr where userName = '$username' and psw = '$psw'";
        $query2 = mysqli_query($con, $sql2);
//    如果密码正确
        if ($query2 && mysqli_num_rows($query2)) {
            while ($result = mysqli_fetch_assoc($query2)) {
                $data[] = $result;
            }
            if (!empty($data)) {
                foreach ($data as $value) {
                    $imgSrc = $value['img'];
                    echo $imgSrc;
                    $_SESSION['img'] = $imgSrc;
                    $_SESSION['userName'] = $username;
                }
            }
        } //    如果密码不正确
        else {
            echo "wrong psw";
        }
    } //如果不存在该账号
    else {
        echo "wrong username";
    }
}else{
    echo "wrongCode";
}

?>