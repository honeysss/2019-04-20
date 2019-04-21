<?php
require_once ("connect.php");
//全部评论
$sql9 = "select * from comments where coState = '好评' order by coDate desc";
$query9 = mysqli_query($con,$sql9);
if($query9 && mysqli_num_rows($query9)){
    while($result9 = mysqli_fetch_assoc($query9)){
        $data9[] = $result9;
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>delete-comment</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/comment.css"/>
    <link rel="stylesheet" href="css/business.css"/>
    <link rel="stylesheet" href="css/mine.css"/>
    <link rel="stylesheet" href="css/order.css"/>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/php.js/sign and register.js"></script>
    <script src="js/comment.js"></script>
    <script src="js/order.js"></script>
    <script src="js/mine.js"></script>
    <script src="js/php.js/my.js"></script>
    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
<?php
if(!empty($data9)){
    foreach ($data9 as $value9){

        ?>

        <ul class="comment-area-ul">
            <img src="<?php echo $value9['headImg'];?>" class="headIcon"/>
            <li class="comment-area-li">
                <p class="userName"><?php

                    $orderId = $value9['orderId'];
                    $result = substr_replace($orderId,'******',2,6);
                    echo $result;

                    ?></p>
                <p class="star-img-p">
                    <img src="<?php echo $value9['starImg'];?>" class="star-img"/>
                </p>
                <p class="goodCo"><?php echo $value9['coState'];?></p>
                <p class="coDate"><?php echo $value9['coDate'];?></p>
                <p class="coContent"><?php echo $value9['comments'];?></p>
                <!--                        选取upordown表中某订单编号中所有点赞的食物-->
                <?php
                $orderId2 = $value9['orderId'];
                $sql31 = "select * from upordown where orderId = $orderId2 and upordown.upFood != '';";
                $query31 = mysqli_query($con,$sql31);
                if($query31 && mysqli_num_rows($query31)){
                    while($result31 = mysqli_fetch_assoc($query31)){
                        $data31[] = $result31;
                    }
                }
                ?>


                <!--                        选取upordown表中某订单编号中所有差评的食物-->
                <?php
                $sql32 = "select * from upordown where orderId = $orderId2 and upordown.downFood != '';";
                $query32 = mysqli_query($con,$sql32);
                if($query32 && mysqli_num_rows($query32)){
                    while($result32 = mysqli_fetch_assoc($query32)){
                        $data32[] = $result32;
                    }
                }
                ?>

                <!--                      输出所有点赞的食物 -->
                <?php
                if(!empty($data31)) {
                    ?>
                    <img src="img/点赞之后.png" class="upFoodImg"/>
                    <?php

                    foreach ($data31 as $value31) {
                        ?>

                        <span class="upFoodName">
                                                <?php
                                                echo $value31['upFood'];
                                                ?>
                                </span>
                        <?php
                    }
                    $data31 = null;
                }
                ?>


                <!--                      输出所有差评的食物 -->
                <br/>
                <?php
                if(!empty($data32)) {
                    ?>
                    <img src="img/差评之后.png" class="upFoodImg"/>
                    <?php

                    foreach ($data32 as $value32) {
                        ?>

                        <span class="downFoodName">
                                                <?php
                                                echo $value32['downFood'];
                                                ?>
                                </span>
                        <?php
                    }
                    $data32 = null;
                }
                ?>
            </li>
        </ul>

        <?php
    }
}
?>
</body>
</html>

