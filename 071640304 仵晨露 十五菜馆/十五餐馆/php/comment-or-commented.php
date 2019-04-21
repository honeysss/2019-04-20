<?php
    require_once ("connect.php");
    $userName = $_POST['userName'];
    $orderId = $_POST['orderId'];

    $sql = "SELECT * from comments where userName = '$userName' AND orderId =$orderId;";
    $query = mysqli_query($con,$sql);
    if($query && mysqli_num_rows($query)){
        echo "success";
    }
?>