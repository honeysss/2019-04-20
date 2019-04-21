<?php
require_once ("connect.php");
//全部评论
$sql11 = "select * from comments where coState = '差评' order by coDate desc";
$query11 = mysqli_query($con,$sql11);
if($query11 && mysqli_num_rows($query11)){
    while($result11 = mysqli_fetch_assoc($query11)){
        $data11[] = $result11;
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
if(!empty($data11)){
    foreach ($data11 as $value11){

        ?>

        <ul class="comment-area-ul">
            <img src="<?php echo $value11['headImg'];?>" class="headIcon"/>
            <li class="comment-area-li">
                <p class="userName"><?php

                    $orderId = $value11['orderId'];
                    $result = substr_replace($orderId,'******',2,6);
                    echo $result;

                    ?></p>
                <p class="star-img-p">
                    <img src="<?php echo $value11['starImg'];?>" class="star-img"/>
                </p>
                <p class="goodCo"><?php echo $value11['coState'];?></p>
                <p class="coDate"><?php echo $value11['coDate'];?></p>
                <p class="coContent"><?php echo $value11['comments'];?></p>
                <!--                        选取upordown表中某订单编号中所有点赞的食物-->
                <?php
                $orderId4 = $value11['orderId'];
                $sql51 = "select * from upordown where orderId = $orderId4 and upordown.upFood != '';";
                $query51 = mysqli_query($con,$sql51);
                if($query51 && mysqli_num_rows($query51)){
                    while($result51 = mysqli_fetch_assoc($query51)){
                        $data51[] = $result51;
                    }
                }
                ?>


                <!--                        选取upordown表中某订单编号中所有差评的食物-->
                <?php
                $sql52 = "select * from upordown where orderId = $orderId4 and upordown.downFood != '';";
                $query52 = mysqli_query($con,$sql52);
                if($query52 && mysqli_num_rows($query52)){
                    while($result52 = mysqli_fetch_assoc($query52)){
                        $data52[] = $result52;
                    }
                }
                ?>

                <!--                      输出所有点赞的食物 -->
                <?php
                if(!empty($data51)) {
                    ?>
                    <img src="img/点赞之后.png" class="upFoodImg"/>
                    <?php

                    foreach ($data51 as $value51) {
                        ?>

                        <span class="upFoodName">
                                                <?php
                                                echo $value51['upFood'];
                                                ?>
                                </span>
                        <?php
                    }
                    $data51 = null;
                }
                ?>


                <!--                      输出所有差评的食物 -->
                <br/>
                <?php
                if(!empty($data52)) {
                    ?>
                    <img src="img/差评之后.png" class="upFoodImg"/>
                    <?php

                    foreach ($data52 as $value52) {
                        ?>

                        <span class="downFoodName">
                                                <?php
                                                echo $value52['downFood'];
                                                ?>
                                </span>
                        <?php
                    }
                    $data52 = null;
                }
                ?>
            </li>
        </ul>

        <?php
    }
}
?></body>
</html>

