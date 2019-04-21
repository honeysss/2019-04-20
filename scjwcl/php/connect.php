

<?php
header("Content-type:text/html;charset = utf-8");
define("HOST","localhost:3306");
define("USERNAME","root");
define("PASSWORD","");
$con = mysqli_connect(HOST,USERNAME,PASSWORD);
if(!$con){
    echo mysqli_connect_error();
}
if(!(mysqli_select_db($con,"message"))){
    echo mysqli_error();
}
if(!(mysqli_set_charset($con,"utf8"))){
    echo mysqli_error();
}

?>
