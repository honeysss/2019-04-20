<?php
require_once ("connect.php");
//全部评论
$sql81 = "select COUNT(*) as num from comments where coState = '中评'";
$query81 = mysqli_query($con,$sql81);
if($query81 && mysqli_num_rows($query81)){
    while($result81 = mysqli_fetch_assoc($query81)){
        $data81[] = $result81;
    }
    if(!empty($data81)){
        foreach ($data81 as $value81){
            echo $value81['num'];
        }
    }
}
?>