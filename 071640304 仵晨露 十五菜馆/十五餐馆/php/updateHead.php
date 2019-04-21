<?php
    require_once ("connect.php");
    $userName = $_POST['userName'];
    $imgSrc = $_POST['imgSrc'];
    $sql = "update userr set img = '$imgSrc' where userName = '$userName';";
    $sq2 = "update comments set headImg = '$imgSrc' where userName = '$userName';";
    if(mysqli_query($con,$sql)) {
        if (mysqli_query($con, $sq2)) {
            echo "success";
            $_SESSION['img'] = $imgSrc;
        }
    }
?>