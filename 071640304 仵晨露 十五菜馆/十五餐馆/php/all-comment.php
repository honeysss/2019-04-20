<?php
require_once ("connect.php");
//全部评论
$sql8 = "select * from comments order by coDate desc";
$query8 = mysqli_query($con,$sql8);
if($query8 && mysqli_num_rows($query8)){
    while($result8 = mysqli_fetch_assoc($query8)){
        $data8[] = $result8;
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
                    if(!empty($data8)){
                        foreach ($data8 as $value8){

                            ?>

                            <ul class="comment-area-ul">
                                <img src="<?php echo $value8['headImg'];?>" class="headIcon"/>
                                <li class="comment-area-li">
                                    <p class="userName"><?php

                                        $orderId = $value8['orderId'];
                                        $result = substr_replace($orderId,'******',2,6);
                                        echo $result;

                                        ?></p>
                                    <p class="star-img-p">
                                        <img src="<?php echo $value8['starImg'];?>" class="star-img"/>
                                    </p>
                                    <p class="goodCo"><?php echo $value8['coState'];?></p>
                                    <p class="coDate"><?php echo $value8['coDate'];?></p>
                                    <p class="coContent"><?php echo $value8['comments'];?></p>

                                    <!--                        选取upordown表中某订单编号中所有点赞的食物-->
                                    <?php
                                    $orderId1 = $value8['orderId'];
                                    $sql21 = "select * from upordown where orderId = $orderId1 and upordown.upFood != '';";
                                    $query21 = mysqli_query($con,$sql21);
                                    //只有有记录的执行了下面的if 其他的都没有执行 所以保留了执行过的data21结果 应该让没有 执行的直接把data21设为空
                                    if($query21 && mysqli_num_rows($query21)){
                                        while($result21 = mysqli_fetch_assoc($query21)){
                                            $data21[] = $result21;
                                        }
                                    }
                                    //                        <!--                      输出所有点赞的食物 -->
                                    if(!empty($data21)) {
                                        ?>
                                        <img src="img/点赞之后.png" class="upFoodImg"/>
                                        <?php

                                        foreach ($data21 as $value21) {
                                            ?>

                                            <span class="upFoodName">
                                                <?php
                                                echo $value21['upFood'];
                                                ?>
                                </span>
                                            <?php
                                        }
                                        $data21 = null;
                                    }
                                    ?>
                                    <!--                        选取upordown表中某订单编号中所有差评的食物-->
                                    <?php
                                    $sql22 = "select * from upordown where orderId = $orderId1 and upordown.downFood != '';";
                                    $query22 = mysqli_query($con,$sql22);
                                    if($query22 && mysqli_num_rows($query22)){
                                        while($result22 = mysqli_fetch_assoc($query22)){
                                            $data22[] = $result22;
                                        }
                                    }
                                    ?>
                                    <!--                      输出所有差评的食物 -->
                                    <?php
                                    if(!empty($data22)) {
                                        ?>
                                        <br/>
                                        <img src="img/差评之后.png" class="upFoodImg"/>
                                        <?php

                                        foreach ($data22 as $value22) {
                                            ?>

                                            <span class="downFoodName">
                                                <?php
                                                echo $value22['downFood'];
                                                ?>
                                </span>
                                            <?php
                                        }
                                        $data22 = null;
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

