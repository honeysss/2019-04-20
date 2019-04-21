<?php
require_once ("connect.php");
session_start();
$userName = $_SESSION['userName'];

//某个人的评论
    $sql13 = "select * from comments where userName = '$userName' order by coDate desc";
    $query13 = mysqli_query($con,$sql13);
    if($query13 && mysqli_num_rows($query13)) {
        while ($result13 = mysqli_fetch_assoc($query13)) {
            $data13[] = $result13;
        }
    }
$i=0;
if(!empty($data13)){
    foreach ($data13 as $value13){

        ?>
        <ul class="comment-area-ul">

            <img src="<?php echo $value13['headImg'];?>" class="headIcon"/>
            <li class="comment-area-li">
                <p class="userName de-userName"><?php echo $value13['userName'];?></p>
                <p class="star-img-p">
                    <img src="<?php echo $value13['starImg'];?>" class="star-img"/>
                </p>
                <p class="goodCo"><?php echo $value13['coState'];?></p>
                <p class="coDate de-coDate"><?php echo $value13['coDate'];?></p>
                <p class="coContent de-coContent"><?php echo $value13['comments'];?></p>
                <img  title="删除评论" src="img/删除图标.png" class="delete-comment" onclick="deleteComment(<?php echo $value13['orderId'];?>)" id="<?php echo $i;?>"/>


                <!--                        选取upordown表中某订单编号中所有点赞的食物-->
                <?php
                $orderId1 = $value13['orderId'];
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
                    <img src="img/差评之后.png" class="upFoodImg downFoodImg"/>
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
        $i++;
    }
}else{
    ?>
    <p class="no-comment">您还没有发布过任评论喔，快去点餐进行评价吧~</p>

    <?php
}
?>
