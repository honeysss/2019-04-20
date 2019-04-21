<?php
require_once ("connect.php");
//全部评论
$sql10 = "select * from comments where coState = '中评' order by coDate desc";
$query10 = mysqli_query($con,$sql10);
if($query10 && mysqli_num_rows($query10)){
    while($result10 = mysqli_fetch_assoc($query10)){
        $data10[] = $result10;
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
if(!empty($data10)){
    foreach ($data10 as $value10){

        ?>

        <ul class="comment-area-ul">
            <img src="<?php echo $value10['headImg'];?>" class="headIcon"/>
            <li class="comment-area-li">
                <p class="userName"><?php

                    $orderId = $value10['orderId'];
                    $result = substr_replace($orderId,'******',2,6);
                    echo $result;

                    ?></p>
                <p class="star-img-p">
                    <img src="<?php echo $value10['starImg'];?>" class="star-img"/>
                </p>
                <p class="goodCo"><?php echo $value10['coState'];?></p>
                <p class="coDate"><?php echo $value10['coDate'];?></p>
                <p class="coContent"><?php echo $value10['comments'];?></p>
                <!--                        选取upordown表中某订单编号中所有点赞的食物-->
                <?php
                $orderId3 = $value10['orderId'];
                $sql41 = "select * from upordown where orderId = $orderId3 and upordown.upFood != '';";
                $query41 = mysqli_query($con,$sql41);
                if($query41 && mysqli_num_rows($query41)){
                    while($result41 = mysqli_fetch_assoc($query41)){
                        $data41[] = $result41;
                    }
                }
                ?>


                <!--                        选取upordown表中某订单编号中所有差评的食物-->
                <?php
                $sql42 = "select * from upordown where orderId = $orderId3 and upordown.downFood != '';";
                $query42 = mysqli_query($con,$sql42);
                if($query42 && mysqli_num_rows($query42)){
                    while($result42 = mysqli_fetch_assoc($query42)){
                        $data42[] = $result42;
                    }
                }
                ?>

                <!--                      输出所有点赞的食物 -->
                <?php
                if(!empty($data41)) {
                    ?>
                    <img src="img/点赞之后.png" class="upFoodImg"/>
                    <?php

                    foreach ($data41 as $value41) {
                        ?>

                        <span class="upFoodName">
                                                <?php
                                                echo $value41['upFood'];
                                                ?>
                                </span>
                        <?php
                    }
                    $data41 = null;
                }
                ?>


                <!--                      输出所有差评的食物 -->
                <br/>
                <?php
                if(!empty($data42)) {
                    ?>
                    <img src="img/差评之后.png" class="upFoodImg"/>
                    <?php

                    foreach ($data42 as $valu42) {
                        ?>

                        <span class="downFoodName">
                                                <?php
                                                echo $value42['downFood'];
                                                ?>
                                </span>
                        <?php
                    }
                    $data42 = null;
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

