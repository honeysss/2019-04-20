<?php
require_once ("connect.php");
session_start();
$orderId = $_POST['orderId'];
$userName = $_SESSION['userName'];


//删除订单把订餐状态改为4
//因为如果只是删除了订单 再订餐的时候orderId会与upOrDown里的orderId重复
//
$sql = "update orderinfo set state = 4 where orderId = $orderId;";
if(mysqli_query($con,$sql) ){

    $sql12 = "SELECT * from orderinfo where userName = '".$_SESSION['userName']."' order by buyTime desc;";
    $query12 = mysqli_query($con,$sql12);
    if($query12 && mysqli_num_rows($query12)){
        while ($result12 = mysqli_fetch_assoc($query12)){
            $data12[] = $result12;
        }
    }
}else{
    echo "false";
}
if(!empty($data12)){
    $i = 0;
    foreach ($data12 as $value12){
        if($value12['state'] != 4){

            ?>

            <li>
            <span class="order-id"><?php echo $value12['orderId'];?></span>
            <span class="order-userName"><?php echo $value12['userName'];?></span>
            <span class="order-loginName"><?php echo $value12['loginName'];?></span>
            <span class="order-arriveTime"><?php echo $value12['arriveTime'];?></span>
            <span class="order-remark"><?php echo $value12['remark'];?></span>
            <span class="order-totalPrice"><?php echo $value12['totalPrice'];?></span>
            <span class="order-rePrice"><?php echo $value12['rePrice'];?></span>
            <span class="order-payMethod"><?php echo $value12['payMethod'];?></span>
            <span class="order-state1"><?php echo $value12['state'];?></span>
            <span class="order-gender"><?php echo $value12['gender'];?></span>
            <span class="order-address"><?php echo $value12['addr'];?></span>
            <span class="order-tel"><?php echo $value12['tel'];?></span>

            <!--                        订餐数量 食物名称  食物图片 单价 不固定 循环输出-->
            <!--                        查询出orderr的结果 如果查询出的长度大于一 则食物部分显示 等多少件商品-->
            <?php
            $orderId31 = $value12['orderId'];
            $sql31 = "select * from orderr where orderId = $orderId31;";
            $query31 = mysqli_query($con,$sql31);
            if($query31 && mysqli_num_rows($query31)){
                while($result31 = mysqli_fetch_assoc($query31)){
                    $data31[] = $result31;
                }
            }
        if(!empty($data31)){
            foreach ($data31 as $value31){

                ?>

                <span class="order-num"><?php echo $value31['orderNum'];?></span>
                <span class="order-perPrice"><?php echo $value31['perPrice'];?></span>
                <span class="order-foodImg" style="display: none;"><?php echo $value31['img'];?></span>
                <span class="order-foodNameName" style="display: none;"><?php echo $value31['foodName'];?></span>



                <?php


            }
            ?>


            <a href="javascript:;" title="点击查看详细信息">
                <img src="<?php echo $data31[0]['img'];?>" class="imgStyle"
                     onclick="lookOrder(<?php echo $i;?>)" onmouseover="imgOver(<?php echo $i;?>)" onmouseleave="imgLeave(<?php echo $i;?>)"/>
            </a>
            <p class="order-foodname">
            <?php echo $data31[0]['foodName'];?>

            <?php
            $sql32 = "select count(*) as count from orderr where orderId = $orderId31;";
            $query32 = mysqli_query($con,$sql32);
            if($query32 && mysqli_num_rows($query32)){
                $result32 = mysqli_fetch_assoc($query32);
            }
            if($result32['count'] > 1){


                ?>
                等<?php echo $result32['count'];?>件商品
                <?php
            }

            ?>

            <?php

            $data31 = null;
        }
            ?>

            </p>
            <p class="order-state">
            <?php
            if($value12['state'] == 0){
                echo "订单已取消";
                ?>

                </p>
                <p class="order-time"><?php echo $value12['buyTime'];?></p>
                <p class="order-money">
                    <span class="order-price-icon">￥</span>
                    <span class="order-price"><?php echo $value12['payPrice'];?></span>
                </p>
                <a href="javascript:;" title="查看订单" class="look-order-order" onclick="lookOrder(<?php echo $i;?>)" name="<?php echo $i;?>">查看订单</a>
                <a href="javascript:;" title="删除订单" class="delete-order1" onclick="deleteOrder1(<?php echo $value12['orderId'];?>)" name="<?php echo $i;?>">删除订单</a>

                <?php
            }else if($value12['state'] == 1){
                echo "订单正在派送中";

                ?>

                </p>
                <p class="order-time"><?php echo $value12['buyTime'];?></p>
                <p class="order-money">
                    <span class="order-price-icon">￥</span>
                    <span class="order-price"><?php echo $value12['payPrice'];?></span>
                </p>
                <a href="javascript:;" title="签收订单" class="sign-order" onclick="signOrder(<?php echo $value12['orderId'];?>)" name="<?php echo $i;?>">签收订单</a>
                <a href="javascript:;" title="取消订单" class="cancel-order" onclick="cancelOrder(<?php echo $value12['orderId'];?>)" name="<?php echo $i;?>">取消订单</a>
                <a href="javascript:;" title="查看订单" class="look-order-order" onclick="lookOrder(<?php echo $i;?>)" name="<?php echo $i;?>">查看订单</a>

                <?php
            }else if($value12['state'] == 2){
                echo "订单已送达";
                ?>

                </p>
                <p class="order-time"><?php echo $value12['buyTime'];?></p>
                <p class="order-money">
                    <span class="order-price-icon">￥</span>
                    <span class="order-price"><?php echo $value12['payPrice'];?></span>
                </p>
                <!--                            如果是已经取消（0） 显示查看订单-->
                <!--                            如果送餐状态是正在派送中（1） 则显示查看订单和签收订单和取消订单-->
                <!--                            如果送餐状态是已送达（2） 则显示查看订单和评价-->

                <a href="javascript:;" title="删除订单" class="delete-order2" onclick="deleteOrder2(<?php echo $value12['orderId'];?>)" name="<?php echo $i;?>">删除订单</a>
                <a href="javascript:;" title="评价" class="order-comment" onclick="commentOrder(<?php echo $i;?>)" name="<?php echo $i;?>">评价</a>
                <a href="javascript:;" title="查看订单" class="look-order-order" onclick="lookOrder(<?php echo $i;?>)" name="<?php echo $i;?>">查看订单</a>

                <?php
            }else if($value12['state'] == 3){
                echo "订单已送达";
                ?>

                </p>
                <p class="order-time"><?php echo $value12['buyTime'];?></p>
                <p class="order-money">
                    <span class="order-price-icon">￥</span>
                    <span class="order-price"><?php echo $value12['payPrice'];?></span>
                </p>
                <!--                            如果是已经取消（0） 显示查看订单-->
                <!--                            如果送餐状态是正在派送中（1） 则显示查看订单和签收订单和取消订单-->
                <!--                            如果送餐状态是已送达（2） 则显示查看订单和评价-->

                <a href="javascript:;" title="删除订单" class="delete-order2"  onclick="deleteOrder2(<?php echo $value12['orderId'];?>)" name="<?php echo $i;?>">删除订单</a>
                <a href="javascript:;" title="评价" class="ordered-comment" name="<?php echo $i;?>">已评价</a>
                <a href="#" title="查看订单" class="look-order-order" onclick="lookOrder(<?php echo $i;?>)" name="<?php echo $i;?>">查看订单</a>

                </li>
                <?php
            }
            ?>


            <?php
            $i++;
        }                    }

//                    此时循环已经结束 如果data12不为空并且data12中的state全为4
    $delete = true;
    for($k = 0;$k<sizeof($data12);$k++){
        if($data12[$k]['state'] != 4){
            $delete = false;
            break;
        }
    }
    if($delete == true){

        ?>
        <p class="no-order">您还没有订单可以查询，快去下单吧~</p>
        <?php
    }

}else{
    ?>

    <p class="no-order">您还没有订单可以查询，快去下单吧~</p>

    <?php
}
?>