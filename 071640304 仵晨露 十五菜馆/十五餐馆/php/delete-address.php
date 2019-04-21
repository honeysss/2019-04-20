<?php
    require_once ("connect.php");
    $id = $_POST['id'];
    $sql = "delete from userinfo where userinfoId = $id;";
    mysqli_query($con,$sql);


?>

