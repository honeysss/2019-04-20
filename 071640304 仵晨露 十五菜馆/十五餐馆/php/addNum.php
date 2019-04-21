<?php
require_once ("connect.php");
session_start();
if(!empty($_SESSION['orderNum'])){
    for($i = 0;$i < sizeof($_SESSION['orderNum']);$i++){
        $sql = "update food set sellNum = sellNum + '".$_SESSION['orderNum'][$i]."' where foodName = '".$_SESSION['foodName'][$i]."'";
        mysqli_query($con,$sql);
    }
}
?>