<?php
session_start();
$identifyCode = $_POST['identifyCode'];
if($_SESSION['identifyCode'] === $identifyCode){
    echo "success";
}

?>