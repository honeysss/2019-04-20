<?php
    require_once ("connect.php");
    session_start();
    $orderId = $_GET['orderId'];
    $upNum = $_GET['upNum'];
    $badNum = $_GET['badNum'];

    if(!empty($_SESSION['commentFoodName'])){
        for($i = 0;$i<sizeof($_SESSION['commentFoodName']);$i++){
            if($upNum[$i] == 1){
                $sql = "insert into upordown VALUES ($orderId,'".$_SESSION['commentFoodName'][$i]."',null);";
                mysqli_query($con,$sql);
            }else if($badNum[$i] == 1){
                $sql = "insert into upordown VALUES ($orderId,null,'".$_SESSION['commentFoodName'][$i]."');";
                mysqli_query($con,$sql);
            }
            echo $sql;
        }
    }

?>