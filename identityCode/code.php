<?php
    require_once ("mysession.php");
    session_start();
    echo $_SESSION['identifyCode'];
?>