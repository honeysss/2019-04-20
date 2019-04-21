<?php
require_once ("php/connect.php");
session_start();

$sql = "select * from userinfo where userName ='".$_SESSION['userName']."'order by userinfoId asc;";
//$sql = "select * from userinfo where userName ='1';";
$query = mysqli_query($con,$sql);
if($query && mysqli_num_rows($query)){
    while($result = mysqli_fetch_assoc($query)){
        $data[] = $result;
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
    <title>十五菜馆</title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/order.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/mine.css" />
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/order.js"></script>
    <script src="js/php.js/order-content.js"></script>
    <script src="js/php.js/my.js"></script>
    <script src="js/php.js/sign%20and%20register.js"></script>
    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
</head>
<body id="body">
<?php
//echo $_SESSION['userName'];
?>

<div class="cover"></div>
<div class="content">
    <div class="confirm-buy">
        <hr/>
        <a href="mainPage.php" title="十五菜馆">十五菜馆</a>
        <span>>&nbsp;&nbsp;&nbsp;确认购买</span>
    </div>
    <div class="left-content">
        <span class="ordered-img"><?php echo $_SESSION['img1']; ?></span>
        <div class="left-one">
            <p class="foodName1 left-content-p1">菜品</p>
            <p class="price-num left-content-p2">价格/份数</p>
        </div>

            <?php
                if(!empty($_SESSION['orderNum'])){
                    for($i = 0;$i< sizeof($_SESSION['orderNum']);$i++){

            ?>

            <div class="left-two">
                <p class="name left-content-p1"><?php echo $_SESSION['foodName'][$i]; ?></p>
                <p class="price-num-content-icon1 left-content-p2">
                    ￥
                    <span class="price-num-content"><?php echo $_SESSION['perPrice'][$i]; ?></span>
                    <span class="price-num-content-icon2">*</span>
                    <span class="food-num"><?php echo $_SESSION['orderNum'][$i]; ?></span>
                    <span class="food-img" style="display: none;"><?php echo $_SESSION['img1'][$i]; ?></span>
                </p>
            </div>

            <?php

                    }
                }
            ?>

        <div class="left-three">
            <p class="de-price left-content-p1">配送费</p>
            <p class="de-price left-content-p2">￥1</p>
        </div>
        <div class="left-five">
            <p class="left-content-p1">在线支付立减优惠</p>
            <p class="left-content-p2 reduce-price-icon">
                -￥
                <span class="reduce-price"><?php echo $_SESSION['rePrice']; ?></span>
            </p>
        </div>
        <div class="left-four">
            <p class="total left-content-p1">合计</p>
            <p class="left-content-p2 last-price-icon">
                ￥
                <span class="last-price"><?php echo $_SESSION['totalPrice']; ?></span>
            </p>
        </div>
    </div>


    <div class="right-content">
        <h3>送餐详情</h3>

        <!--选择地址    -->
        <div class="choose-add">
            <img src="img/选择.png"/>
            <span>请选择地址</span>
        </div>
<!--        添加地址-->
<!--        <div class="add-address">-->
<!--            <img src="img/加号.png">-->
<!--            <span>添加新地址</span>-->
<!--        </div>-->
        <!--选择完地址-->
        <div class="chosen-add">
            <p class="de-address">订单配送至：</p>
            <p class="order-page-addr"><?php echo $_SESSION['address'];?></p>
            <p class="order-page-info">
                <span class="order-page-loginName"><?php echo $_SESSION['loginName'];?></span>
                <span>(
                <span class="order-page-gender"><?php echo $_SESSION['gender'];?></span>
                    )
                </span>
                <span class="order-page-tel"><?php echo $_SESSION['tel'];?></span>
            </p>
        </div>


        <form>
            <label>备注：</label>
            <input type="text" placeholder="不麻微辣等口味要求"/>
        </form>
        <div class="se-time">
            <p class="se-time-p">送达时间:</p>
            <select>
                <option selected="selected"></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
            </select>
<!--            <img src="img/下拉.png"/>-->
        </div>

        <div class="pay-method-div">
            <p>支付方式:</p>
            <ul>
                <li class="active-pay">支付宝</li>
                <li>微信</li>
                <li>花呗</li>
            </ul>
        </div>
        <div class="last-line">
            <p>
                您需支付
                <span class="last-line-icon">￥</span>
                <span class="last-line-num"><?php echo $_SESSION['totalPrice']; ?></span>
            </p>
            <a>确定购买</a>
        </div>
    </div>
</div>


<!--    选择地址-->
<div class="choose-address">
    <p class="dismiss-add">&times;</p>
    <div class="choose-address1">
        <p>添加地址</p>
        <img src="img/加号.png"/>
    </div>
    <div class="orderAddress">
        <?php
        $i =0;
            if(!empty($data)){
                foreach ($data as $value){

        ?>

    <ul>
        <li class="<?php echo $i;?>" onclick="showAddress(<?php echo $i;?>)" onmouseover="over(<?php echo $i;?>)" onmouseout="out(<?php echo $i;?>)">
            <span class="order-page-id" style="display: none"><?php echo $value['userinfoId']; ?></span>
            <span class="order-page-userName" style="display: none"><?php echo $value['userName']; ?></span>
            <p class="order-page-addr"><?php echo $value['addr']; ?></p>
            <p class="order-page-info">
                <span class="order-page-loginName"><?php echo $value['loginName']; ?></span>
                <span>
                (
            <span class="order-page-gender"><?php echo $value['gender']; ?></span>
                )
            </span>
                <span class="order-page-tel"><?php echo $value['tel']; ?></span>
            </p>
        </li>
        <img src="img/删除图标.png" title="删除地址" class="delete-icon" onclick="orderDeleteAdd(<?php echo $value['userinfoId']; ?>)" id="<?php echo $i;?>" name="delete-add"/>
        <img  src="img/编辑.png" title="修改地址" name="modify-add" onclick="orderModifyAdd(<?php echo $i;?>)" class="modify-icon"/>

    </ul>
        <?php
            $i++;
                }
            }else{
                ?>

                <p class="no-address1">您还没有地址喔，快去添加地址吧~</p>

                <?php
            }
        ?>
    </div>

</div>



<!--    添加地址-->
<div class="addAddress">
    <div class="addAddress-div">
        <p class="addAddress-p1">添加地址</p>
        <p class="dismiss-add">&times;</p>
    </div>
    <form class="addAddress-form">
        <label><span class="info">*</span>姓名：</label>
        <input type="text" placeholder="请输入您的姓名" class="add-name">
        <label><span class="info">*</span>性别：</label>
        <input type="radio" class="man" checked="checked" name="sex" value="男"><span>男</span>
        <input type="radio" class="woman" name="sex" value="女"><span class="woman-span">女</span>
        <label><span class="info">*</span>电话：</label>
        <input type="tel" placeholder="请输入您的联系方式" class="tel">
        <label><span class="info">*</span>地址：</label>
        <input type="text" placeholder="请输入您的地址" class="address">
        <p class="info-war">*号为必填，请完善好信息再保存吧</p>
    </form>
    <input type="submit" value="保存" class="save" href="javascript:;">
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>

<!--点击确认购买-->
<div class="orderSu">
    <p><img src="img/对号.png"/> 购买成功！预计三十分钟后送达</p>
    <ul>
        <li><a href="mainPage.php" title="返回首页">返回首页</a></li>
        <li><a href="javascript:;" title="查看订单" class="ordered-detail">查看订单</a></li>
    </ul>
</div>
<span class="ordered-orderId"></span>
<span class="session-userName"><?php echo $_SESSION['userName'];?></span>

<!--<!--头像test-->
<!--<div class="head">-->
<!--    <img src="" id="showImg" >-->
<!--    <input type="file" class="file" name="imgfile" id="imgfile" placeholder="请选择文件" accept="image/png,image/gif" />-->
<!--</div>-->

<!--修改地址的框-->
<div class="edit1">
    <div class="editAddress-div">
        <p class="editAddress-p1">修改地址</p>
        <p class="dismiss-add">&times;</p>
    </div>
    <form class="editAddress-form">
        <label><span class="info">*</span>姓名：</label>
        <input type="text" placeholder="请输入您的姓名" class="edit-name">
        <label><span class="info">*</span>性别：</label>
        <input type="radio" class="edit-man" value="男" name="sex"><span>男</span>
        <input type="radio" class="edit-woman" value="女" name="sex"><span class="edit-woman-span">女</span>
        <label><span class="info">*</span>电话：</label>
        <input type="tel" placeholder="请输入您的联系方式" class="edit-tel">
        <label><span class="info">*</span>地址：</label>
        <input type="text" placeholder="请输入您的地址" class="edit-address">
        <p class="info-war">*号为必填，请完善好信息再保存吧</p>
    </form>
    <input type="submit" value="保存" class="edit-save" href="javascript:;" onclick="orderSaveAddress()">
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>

<script src="js/drag1.js"></script>
</body>
</html>