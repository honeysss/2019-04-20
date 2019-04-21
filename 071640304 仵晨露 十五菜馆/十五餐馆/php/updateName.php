<?php
    require_once("connect.php");
    $newName = $_POST['newName'];
    $oldName = $_POST['oldName'];
    $sql = "update userr set userName = '$newName' where userName = '$oldName'";

    $sql1 = "select * from userr where userName = '$newName'";

    $sql2 = "update orderinfo set userName = '$newName' where userName = '$oldName';";

    $sql3 = "update comments set userName = '$newName' where userName = '$oldName';";
    $query1 = mysqli_query($con,$sql1);
//   如果该用户名已经存在
    if($query1 && mysqli_num_rows($query1)){
//        echo '{"state":"success","num":"1"}';
        echo "false";
    }else{
//        如果该用户名不存在，则对用户表中的用户名进行更改，同时也对订单信息表中的用户名进行更改

        $query = mysqli_query($con,$sql);
        $query2 = mysqli_query($con,$sql2);
        $query3 = mysqli_query($con,$sql3);
        if($query && $query2 && $query3){
//            echo '{"state":"success","num":"1"}';
            echo "success";
        }
    }
?>