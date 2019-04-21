<?php
require_once("php/connect.php");
session_start();
$sql1 = "SELECT * from food where attr != '汤类' and attr != '饮料' AND  attr !='另加类' ORDER BY upRate DESC LIMIT 0,5 ;";
$query1 = mysqli_query($con,$sql1);
if($query1 && mysqli_fetch_row($query1)){
    while($result1 = mysqli_fetch_assoc($query1)){
        $data1[] = $result1;
    }
}


$sql2 = "select * from food where attr = '精美小炒'";
$query2 = mysqli_query($con,$sql2);
if($query2 && mysqli_num_rows($query2)){
    while($result2 = mysqli_fetch_assoc($query2)){
        $data2[] = $result2;
    }
}

$sql3 = "select * from food where attr = '大盘炒菜'";
$query3 = mysqli_query($con,$sql3);
if($query3 && mysqli_num_rows($query3)){
    while($result3 = mysqli_fetch_assoc($query3)){
        $data3[] = $result3;
    }
}

$sql4 = "select * from food where attr = '汤类'";
$query4 = mysqli_query($con,$sql4);
if($query4 && mysqli_num_rows($query4)){
    while($result4 = mysqli_fetch_assoc($query4)){
        $data4[] = $result4;
    }
}

$sql5 = "select * from food where attr = '另加类'";
$query5 = mysqli_query($con,$sql5);
if($query5 && mysqli_num_rows($query5)){
    while($result5 = mysqli_fetch_assoc($query5)){
        $data5[] = $result5;
    }
}

$sql6 = "select * from food where attr = '饮料'";
$query6 = mysqli_query($con,$sql6);
if($query6 && mysqli_num_rows($query6)){
    while($result6 = mysqli_fetch_assoc($query6)){
        $data6[] = $result6;
    }
}


$sql7 = "select * from userinfo where userName = '".$_SESSION['userName']."' order by userinfoId asc;";
$query7 = mysqli_query($con,$sql7);
if($query7 && mysqli_num_rows($query7)){
    while($result7 = mysqli_fetch_assoc($query7)){
        $data7[] = $result7;
    }
}


//全部评论
$sql8 = "select * from comments order by coDate desc";
$query8 = mysqli_query($con,$sql8);
if($query8 && mysqli_num_rows($query8)){
    while($result8 = mysqli_fetch_assoc($query8)){
        $data8[] = $result8;
    }
}

$sql81 = "select COUNT(*) as num from comments";
$query81 = mysqli_query($con,$sql81);
if($query81 && mysqli_num_rows($query81)){
    while($result81 = mysqli_fetch_assoc($query81)){
        $data81[] = $result81;
    }
}

//好评
$sql9 = "select * from comments where coState = '好评' order by coDate desc";
$query9 = mysqli_query($con,$sql9);
if($query9 && mysqli_num_rows($query9)){
     while($result9 = mysqli_fetch_assoc($query9)){
          $data9[] = $result9;
     }
}

$sql91 = "select COUNT(*) as num from comments where coState = '好评'";
$query91 = mysqli_query($con,$sql91);
if($query91 && mysqli_num_rows($query91)){
    while($result91 = mysqli_fetch_assoc($query91)){
        $data91[] = $result91;
    }
}

//中评
$sql10 = "select * from comments where coState = '中评' order by coDate desc";
$query10 = mysqli_query($con,$sql10);
if($query10 && mysqli_num_rows($query10)){
    while($result10 = mysqli_fetch_assoc($query10)){
        $data10[] = $result10;
    }
}

$sql101 = "select COUNT(*) as num from comments where coState = '中评'";
$query101 = mysqli_query($con,$sql101);
if($query101 && mysqli_num_rows($query101)){
    while($result101 = mysqli_fetch_assoc($query101)){
        $data101[] = $result101;
    }
}

//差评
$sql11 = "select * from comments where coState = '差评' order by coDate desc";
$query11 = mysqli_query($con,$sql11);
if($query11 && mysqli_num_rows($query11)){
    while($result11 = mysqli_fetch_assoc($query11)){
        $data11[] = $result11;
    }
}

$sql111 = "select COUNT(*) as num from comments where coState = '差评'";
$query111 = mysqli_query($con,$sql111);
if($query111 && mysqli_num_rows($query111)){
    while($result111 = mysqli_fetch_assoc($query111)){
        $data111[] = $result111;
    }
}

$sql12 = "SELECT * from orderinfo where userName = '".$_SESSION['userName']."' order by buyTime desc;";
$query12 = mysqli_query($con,$sql12);
if($query12 && mysqli_num_rows($query12)){
    while ($result12 = mysqli_fetch_assoc($query12)){
        $data12[] = $result12;
    }
}


//某个人的评论
$sql13 = "select * from comments where userName = '".$_SESSION['userName']."' order by coDate desc";
$query13 = mysqli_query($con,$sql13);
if($query13 && mysqli_num_rows($query13)){
    while($result13 = mysqli_fetch_assoc($query13)){
        $data13[] = $result13;
    }
}

?>





<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>十五菜馆</title>
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
<body id="body" data-spy="scroll" data-target="#myScrollspy">

<span class="userId" style="display: none;"><?php echo $_SESSION['userId'];?></span>
<!--<canvas id="canvas" height="728px" width="1519px" style="border:1px solid red;position: fixed; top: 0;left: 0;z-index: 5;"></canvas>-->

<div class="clock">
    <canvas id="mycanvas" width="130" height="130"></canvas>
</div>

<!--加载页-->
<div class="onLoad">
    <div class="loading-content">
        <span></span>
        <p>0%</p>
    </div>
</div>


<!--注册登录-->
<div class="top">

    <?php
//        echo  $_SESSION['userName'];
        if($_SESSION['userName'] != ""){
    ?>

        <div class="welcome">
            <p>
                <span class="wel-content">欢迎您，亲爱的<span class="wel-name"><?php echo $_SESSION['userName'];?></span></span>
                <span class="space">|</span>
                <a href="javascript:;" title="退出" class="quit"><img src="img/退出.png"/> 退出</a>
                <span class="space">|</span>
                <img src="<?php echo $_SESSION['img'];?>" class="mine" title="我的"/>
            </p>
        </div>

    <?php
         }else{
    ?>

        <div class="signRegister">
            <a href="javascript:;" title="注册" class="enSign">注册</a>
            <span>|</span>
            <a href="javascript:;" title="登录" id="login" class="enRegister">登录</a>
        </div>


    <?php
        }
    ?>





</div>

<!--注册-->
<div class="sign">
    <span class="sign-word">注册</span>
    <span class="dismiss">&times;</span>
    <div class="onLoad-head">
        <img src="img/默认头像.jpg" />
        <input type="file" accept="image/png,image/gif,image/jpg" title="点击添加头像"/>
        <span class="sign-alert-4">!</span>
    </div>
    <form action="javascript:;">
        <label>用户名：</label><input type="text" placeholder="请输入您的用户名" class="input1" value=""><span class="sign-alert-1">!</span>
        <label>密码：</label><input type="password" placeholder="请输入您的密码" class="input2" value=""><span class="sign-alert-2">!</span>
        <label>确认密码：</label><input type="password" placeholder="请再次输入您的密码" class="input3" value=""><span class="sign-alert-3">!</span>
        <span class="reg-alert-3" >!</span>
        <input type="text" class="identifyInput1" placeholder="请输入验证码">
        <img src="php/session/code.php" style="box-shadow:0 0 1px slategray;vertical-align: -9px;margin-right: 2px" id="identifyImg1"/>
        <a class="identifySpan" style="color: darkblue;cursor:pointer;font-size: 12px;font-weight: 500;"
           onclick="document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();">
            看不清?
        </a>
        <input type="submit" class="submit1" value="注册">
    </form>
</div>

<!--注册警告-->
<div class="infoWarning">
    <span class="also">!</span>
    您的信息还未填写完整
    <span class="dismiss-info">&times;</span>
</div>

<div class="pswWarning">
    <span class="also">!</span>
    您两次输入的密码不同
    <span class="dismiss-info">&times;</span>
</div>


<div class="signSuccess">
    注册成功！
    <span class="dismiss-info">&times;</span>
</div>

<div class="userInfo">
    <span class="also">!</span>
    用户名已存在
    <span class="dismiss-info">&times;</span>
</div>

<!--登录警告-->
<div class="infoWarning1">
    <span class="also">!</span>
    您的信息还未填写完整
    <span class="dismiss-info">&times;</span>
</div>

<div class="pswWarning1">
    <span class="also">!</span>
    密码错误
    <span class="dismiss-info">&times;</span>
</div>

<div class="noUser">
    <span class="also">!</span>
    用户名不存在
    <span class="dismiss-info">&times;</span>
</div>


<!--遮盖层-->
<div class="cover"></div>

<div class="cover1"></div>

<div class="coverSign"></div>

<div class="coverSign1"></div>

<div class="rest">
    <p>本店在休息中~<span>&times;</span></p>
</div>


<!--登录-->
<div class="register">
    <span class="re-word">登录</span>
    <span class="dismiss">&times;</span>
    <form action="javascript:;">
        <label for="name">用户名：</label><input type="text" placeholder="请输入您的用户名" class="input4"><span class="reg-alert-1">!</span>
        <label for="password">密码：</label><input type="password" placeholder="请输入您的密码" class="input5"><span class="reg-alert-2">!</span>
        <span class="reg-alert-3" >!</span>
        <input type="text" class="identifyInput" placeholder="请输入验证码">
        <img src="php/session/code.php" style="box-shadow:0 0 1px slategray;vertical-align: -9px;margin-right: 2px" id="identifyImg"/>
        <a class="identifySpan" style="color: darkblue;cursor:pointer;font-size: 12px;font-weight: 500;"
           onclick="document.getElementById('identifyImg').src ='php/session/code.php?time='+Math.random();">
            看不清?
        </a>
        <input type="submit" class="submit2" value="登录">
    </form>
</div>

<!--登录1-->
<div class="register1">
    <span class="re-word">登录</span>
    <form action="javascript:;">
        <label for="name">用户名：</label><input type="text" placeholder="请输入您的用户名" class="input6"><span class="reg-alert-1">!</span>
        <label for="password">密码：</label><input type="password" placeholder="请输入您的密码" class="input7"><span class="reg-alert-2">!</span>
        <input type="submit" class="submit3" value="登录">
    </form>
</div>

<!--内容区-->
<div class="middle-content">
    <!--   商家名字 图片 优惠-->
    <div class="middle-top">

        <div class="middle-top-hidden">
            <ul>
                <li>
                    <img src="img/营业时间.png" alt="">
                    <p>&nbsp;&nbsp;&nbsp;营业时间&nbsp;&nbsp;07:00-23:00</p>
                </li>
                <li>
                    <img src="img/地址.png" alt="">
                    <p>&nbsp;&nbsp;&nbsp;商家地址&nbsp;&nbsp;长春光华学院</p>
                </li>
                <li>
                    <img src="img/电话.png" alt="">
                    <p>&nbsp;&nbsp;&nbsp;商家电话&nbsp;&nbsp;17613839697</p>
                </li>
            </ul>
        </div>


        <div class="middle-top-left">
            <img src="img/红烧茄子.jpg" class="middle-top-left-img" title="点菜"/>
            <b>十五菜馆</b>
            <span><img src="img/向下图标.png" class="middle-top-left-img1"/></span>
        </div>
        <div class="middle-top-right">
            <div class="middle-top-right-one">
                <p class="middle-top-right-p3">优惠</p>
                <h3 class="middle-top-right-h31">满十减二 满二十减五</h3>
            </div>
            <div class="middle-top-right-two">
                <p>起送</p>
                <h3>15</h3><p class="middle-top-right-p2">元</p>
            </div>
            <div class="middle-top-right-three">
                <p>配送费</p>
                <h3 class="middle-top-right-h3">0</h3><p class="middle-top-right-p1">元</p>
            </div>
        </div>
    </div>
    <!--    共有-->
    <div class="middle-middle">
        <div class="middle-middle-top" id="menu2">
            <ul>
                <li><a href="javascript:;" class="active1" id="orderFood">点菜</a></li>
                <li><a href="javascript:;" id="comment">评价</a></li>
                <li><a href="#" id="business">商家</a></li>
            </ul>
        </div>

<!--        orderFood-->
        <div class="middle-middle-content">
            <div id="menu1">
                <ul>
                    <li><a href="#section-1" class="active2">热销</a></li>
                    <li><a href="#section-2">精美小炒</a></li>
                    <li><a href="#section-3">大盘炒菜</a></li>
                    <li><a href="#section-4">汤类</a></li>
                    <li><a href="#section-5">另加类</a></li>
                    <li><a href="#section-6">饮料</a></li>
                </ul>
            </div>
        </div>
        <!--        orderFood-->
        <div class="food-content">
            <div class="item" id="section-1">
                <h3>热销</h3>
                <?php
                if(!empty($data1)){
                    $i=0;
                    foreach ($data1 as $value1){
                        //          循环
                ?>
                <div class="item1 item1-<?php echo $i+1;?>">
                    <img src="<?php echo $value1['img'];?>" class="foodImg"/>
                    <p class="p1"><?php echo $value1['foodName'];?></p>
                    <p class="p2-icon">赞 <p class="p2"><?php echo $value1['goodNum'];?></p> </p>
                    <span class="sell-num">月售<?php echo $value1['sellNum'];?></span>
                    <span class="up-rate">好评率:<?php echo $value1['upRate'];?>%</span>
                    <p class="p3-icon">￥<p class="p3"> <?php echo $value1['price'];?></p></p>
                    <span class="add-num">0</span>
                    <span class="add-img" id="<?php echo $i;?>" onclick="addImgClick(<?php echo $i;?>)">+</span>
                    <span class="ball"></span>
                </div>
                <?php
                        $i++;
                }
                }
                ?>
            </div>
            <div class="item" id="section-2">
                <h3>精美小炒</h3>
                <?php
                if(!empty($data2)){
                $i = 4;
                $j = 0;
                foreach ($data2 as $value2){

                ?>
                <div class="item1 item1-<?php echo $j+1;?>">
                    <img src="<?php echo $value2['img'];?>" class="foodImg"/>
                    <p class="p1"><?php echo $value2['foodName'];?></p>
                    <p class="p2-icon">赞 <p class="p2"><?php echo $value2['goodNum'];?></p> </p>
                    <span class="sell-num">月售<?php echo $value2['sellNum'];?></span>
                    <p class="p3-icon">￥<p class="p3"> <?php echo $value2['price'];?></p></p>
                    <span class="add-num">0</span>
                    <span class="add-img" id="<?php echo $i;?>" onclick="addImgClick(<?php echo $i;?>)">+</span>
                    <span class="ball"></span>
                </div>
                    <?php
                    $i++;
                    $j++;
                }
                }
                ?>
            </div>
            <div class="item" id="section-3">
                <h3>大盘炒菜</h3>
                <?php
                if(!empty($data3)){
                    $i=10;
                    $j=0;
                    foreach ($data3 as $value3){
                        //          循环
                        ?>
                        <div class="item1 item1-<?php echo $j+1;?>">
                            <img src="<?php echo $value3['img'];?>" class="foodImg"/>
                            <p class="p1"><?php echo $value3['foodName'];?></p>
                            <p class="p2-icon">赞 <p class="p2"><?php echo $value3['goodNum'];?></p> </p>
                            <span class="sell-num">月售<?php echo $value3['sellNum'];?></span>
                            <p class="p3-icon">￥<p class="p3"> <?php echo $value3['price'];?></p></p>
                            <span class="add-num">0</span>
                            <span class="add-img" id="<?php echo $i;?>" onclick="addImgClick(<?php echo $i;?>)">+</span>
                            <span class="ball"></span>
                        </div>

                        <?php
                        $i++;
                        $j++;
                    }
                }
                ?>
            </div>
            <div class="item" id="section-4">
                <h3>汤类</h3>
                <?php
                if(!empty($data4)){
                    $i=15;
                    $j=0;
                    foreach ($data4 as $value4){
                        //          循环
                        ?>
                        <div class="item1 item1-<?php echo $j+1;?>">
                            <img src="<?php echo $value4['img'];?>" class="foodImg"/>
                            <p class="p1"><?php echo $value4['foodName'];?></p>
                            <p class="p2-icon">赞 <p class="p2"><?php echo $value4['goodNum'];?></p> </p>
                            <span class="sell-num">月售<?php echo $value4['sellNum'];?></span>
                            <p class="p3-icon">￥<p class="p3"> <?php echo $value4['price'];?></p></p>
                            <span class="add-num">0</span>
                            <span class="add-img" id="<?php echo $i;?>" onclick="addImgClick(<?php echo $i;?>)">+</span>
                            <span class="ball"></span>
                        </div>

                        <?php
                        $i++;
                        $j++;
                    }
                }
                ?>
            </div>
            <div class="item" id="section-5">
                <h3>另加类</h3>
                <?php
                if(!empty($data5)){
                    $i=20;
                    $j=0;
                    foreach ($data5 as $value5){
                        //          循环
                        ?>
                        <div class="item1 item1-<?php echo $j+1;?>">
                            <img src="<?php echo $value5['img'];?>" class="foodImg"/>
                            <p class="p1"><?php echo $value5['foodName'];?></p>
                            <p class="p2-icon">赞 <p class="p2"><?php echo $value5['goodNum'];?></p> </p>
                            <span class="sell-num">月售<?php echo $value5['sellNum'];?></span>
                            <p class="p3-icon">￥<p class="p3"> <?php echo $value5['price'];?></p></p>
                            <span class="add-num">0</span>
                            <span class="add-img" id="<?php echo $i;?>" onclick="addImgClick(<?php echo $i;?>)">+</span>
                            <span class="ball"></span>
                        </div>

                        <?php
                        $i++;
                        $j++;
                    }
                }
                ?>
            </div>
            <div class="item" id="section-6">
                <h3>饮料</h3>
                <?php
                if(!empty($data6)){
                    $i=24;
                    $j=0;
                    foreach ($data6 as $value6){
                        //          循环
                        ?>
                        <div class="item1 item1-<?php echo $j+1;?>">
                            <img src="<?php echo $value6['img'];?>" class="foodImg"/>
                            <p class="p1"><?php echo $value6['foodName'];?></p>
                            <p class="p2-icon">赞 <p class="p2"><?php echo $value6['goodNum'];?></p> </p>
                            <span class="sell-num">月售<?php echo $value6['sellNum'];?></span>
                            <p class="p3-icon">￥<p class="p3"> <?php echo $value6['price'];?></p></p>
                            <span class="add-num">0</span>
                            <span class="add-img" id="<?php echo $i;?>" onclick="addImgClick(<?php echo $i;?>)">+</span>
                            <span class="ball"></span>
                        </div>

                        <?php
                        $i++;
                        $j++;
                    }
                }
                ?>
            </div>
        </div>

<!--allComment-->
        <!--    评论区-->
        <div class="comment-content">
            <span class="choose">
                <input type="radio" name="radio" value="0" checked="checked">
                <a href="javascript:;" id="0" class="active3">
                    全部评价(
                    <span class="all-num">
                        <?php
                            if(!empty($data81)){
                                foreach ($data81 as $value81){
                                    echo $value81['num'];
                                }
                            }
                        ?>
                    </span>
                    )</a>
                <input type="radio" name="radio" value="1">
                <a href="#" id="1">好评(
                    <span class="good-num">
                        <?php
                        if(!empty($data91)){
                            foreach ($data91 as $value91){
                                echo $value91['num'];
                            }
                        }
                        ?>
                    </span>
                    )</a>
                <input type="radio" name="radio" value="2">
                <a href="#" id="2">中评(
                    <span class="middle-num">
                        <?php
                        if(!empty($data101)){
                            foreach ($data101 as $value101){
                                echo $value101['num'];
                            }
                        }
                        ?>
                    </span>
                    )</a>
                <input type="radio" name="radio" value="3">
                <a href="#" id="3">差评(
                    <span class="bad-num">
                        <?php
                        if(!empty($data111)){
                            foreach ($data111 as $value111){
                                echo $value111['num'];
                            }
                        }
                        ?>
                    </span>
                    )</a>
            </span>


             <!--评价  按时间的降序排序-->
            <!--            全部评价 -->
            <div class="comment-area" id="pageOne">

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

            </div>

            <!--            好评-->
            <div class="comment-area" id="pageTwo">
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
                                <?php
                                if(!empty($data32)) {
                                    ?>
                                    <br/>
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
            </div>

            <!--            中评-->
            <div class="comment-area" id="pageThree">
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

                                <?php
                                if(!empty($data42)) {
                                    ?>
                                    <br/>
                                    <img src="img/差评之后.png" class="upFoodImg"/>
                                    <?php

                                    foreach ($data42 as $value42) {
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
            </div>

            <!--            差评-->
            <div class="comment-area" id="pageFour">
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

                                <?php
                                if(!empty($data52)) {
                                    ?>
                                    <br/>
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
                ?>
            </div>
        </div>

                <!--                翻页-->
<!--                <span class="change-page">-->
<!--                    <a href="javascript:return false;" class="before">< 上一页</a>-->
<!--                    <div class="page">-->
<!--                        <a href="javascript:scrollTo(0,0)" name="#pageOne" value="0" class="pageOne active4">1</a>-->
<!--                        <a href="javascript:scrollTo(0,0)" name="#pageTwo" value="1" class="pageTwo">2</a>-->
<!--                        <a href="javascript:scrollTo(0,0)" name="pageThree" value="2" class="pageThree">3</a>-->
<!--                    </div>-->
<!--                    <a href="javascript:scrollTo(0,0)" class="after">下一页 ></a>-->
<!--                </span>-->

<!--business-->
        <div class="buContent">
            <img src="img/比心.jpg"/>
            <p>欢迎常来选购哦！</p>
        </div>

    </div>
</div>


<!--    底部-->
<!--<div class="foot">-->
<!--    <img src="img/icon.png"/> <p>京公网安备11010502025545</p>-->
<!--</div>-->

<!--    底部导航 orderFood-->
<div class="foot-nav">
    <div class="order-img-div">

    </div>
    <div class="foot-nav-left">
        <img src="img/购物车.png" class="orderCar"/>
        <span class="message">0</span>
        <p>￥</p><h3>0</h3>
    </div>
    <div class="foot-nav-right">
        <p class="remain">差</p><p class="fifteen">15</p><p class="yuan">元起送</p>
    </div>
    <div class="topHover">
        <div class="hoverOne">
            <p class="buyCar">购物车</p>
            <p class="clearFood"><img src="img/删除.png"/> 清空菜品</p>
        </div>


        <div class="foodHover">


        </div>


        <div class="hoverThree">
            <p class="pack">包装费</p>
            <p class="packPrice">1<p class="packPrice-icon">￥</p></p>
            <p class="rePrice"></p>
        </div>
        <div class="hoverFour">
            <p>共&nbsp;</p>
            <p class="orderNum">0</p>
            <p>&nbsp;份，&nbsp;总计</p>
            <p class="moneyIcon">￥</p>
            <p class="totalPrice">0</p>
        </div>

    </div>
</div>

<!--我的-->
<div class="mine-content">
    <div class="mine-left">
        <img src="<?php echo $_SESSION['img'];?>" class="modify-head" title="点击我修改头像"/>
        <p>
            <img src="img/编辑.png" title="修改用户名" class="modify-username"/>
            <span class="mine-left-name" title="修改用户名"><?php echo $_SESSION['userName'];?></span>
        </p>
        <p>
            <img src="img/密码.png" title="修改密码" class="modify-psw"/>
            <span class="mine-left-psw" title="修改密码">修改密码</span>
        </p>
        <ul>
            <li class="receive active10">收货地址</li>
            <li class="look-order">查看订单</li>
            <li class="look-comment">我的评论</li>
        </ul>
    </div>
    <div class="mine-right">
<!--        收货地址-->
        <div class="mine-address">
            <div class="add-address1">
                <p>添加地址</p>
                <img src="img/加号.png" title="添加地址"/>
            </div>
            <ul>
                <?php
                    $i =0;
                    if(!empty($data7)){
                        foreach($data7 as $value7){
                ?>

                <li>
                    <span class="ul-id" style="display: none"><?php echo $value7['userinfoId']; ?></span>
                    <p class="ul-add"><?php echo $value7['addr']; ?></p>
                    <p class="ul-info">
                        <span class="ul-name"><?php echo $value7['loginName']; ?></span>
                        <span>
                            (
                        <span class="ul-sex"><?php echo $value7['gender']; ?></span>
                            )
                        </span>
                        <span class="ul-tel"><?php echo $value7['tel']; ?></span>
                    </p>
                    <img src="img/删除图标.png" title="删除地址" class="delete-icon" onclick="deleteAdd(<?php echo $value7['userinfoId']; ?>)" id="<?php echo $i;?>" name="delete-add"/>
                    <img  src="img/编辑.png" title="修改地址" name="modify-add" onclick="modifyAdd(<?php echo $i;?>)"/>
                </li>

                <?php
                            $i++;
                    }
                 }else{
                        ?>

                        <p class="no-address">您还没有收货地址，快去添加地址吧~</p>

                        <?php
                    }
                ?>
            </ul>
        </div>

<!--        查看订单-->
        <div class="mine-order">
            <ul>
<!--                查看订单的时候不仅要看数组不为空 还要看订餐状态是否是4 如果是4 代表已经删除 不显示 如果不为4 显示-->
<!--                如果此时该订餐人的订餐状态全为4 就要显示提示信息 您还没有订单可以查询-->
                <?php
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
            </ul>
        </div>

        <!--我的评论-->
        <div class="mine-comment">


            <?php
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
                            if($query22 && mysqli_num_rows($query22)) {
                                while ($result22 = mysqli_fetch_assoc($query22)) {
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

        </div>

<!--        详细订单-->
        <div class="detail">
<!--                食物的信息-->
            <ul class="food-info">
                <li>
                    <img src="<?php echo $_SESSION['img1'];?>"/>
                    <p class="food-info-left detail-name"><?php echo $_SESSION['foodName'];?></p>
                    <p class="food-info-right detail-price-icon">￥<span class="detail-price"><?php echo $_SESSION['perPrice'];?></span> </p>
                    <p class="food-info-right detail-num-icon">&times;<span class="detail-num"><?php echo $_SESSION['orderNum'];?></span> </p>
                </li>
                <li>
                    <p class="food-info-left de-price">配送费</p>
                    <p class="food-info-right de-price-icon">￥<span class="de-price-num">1</span> </p>
                </li>
                <li>
                    <p class="food-info-left reduced">在线支付立减优惠</p>
                    <p class="food-info-right reduced-icon">-￥<span class="reduced-price"><?php echo $_SESSION['rePrice'];?></span> </p>
                </li>
                <li>
                    <p class="food-info-right actual-pay">
                        实付
                        <span class="actual-pay-icon">￥</span>
                        <span class="actual-pay-price"><?php echo $_SESSION['payPrice'];?></span>
                    </p>
                </li>
            </ul>

<!--                配送的信息-->
            <ul class="de-info">
                <li>
                    <p class="de-info-left de-info-p">配送信息</p>
                </li>
                <li>
                    <p class="de-info-left">送达时间</p>
                    <p class="de-info-right"><?php echo $_SESSION['arriveTime'];?></p>
                </li>
                <li>
                    <p class="de-info-left">收货地址</p>
                    <p class="de-info-right de-info-info">
                        <span class="de-info-add"><?php echo $_SESSION['address'];?></span>
                        <span class="de-info-name"><?php echo $_SESSION['loginName'];?></span>
                        <span>(<span class="de-info-sex"><?php echo $_SESSION['gender'];?></span>)</span>
                        <span class="de-info-tel"><?php echo $_SESSION['tel'];?></span>
                    </p>
                </li>
                <li>
                    <p class="de-info-left">配送方式</p>
                    <p class="de-info-right">商家配送</p>
                </li>
            </ul>

<!--              订单信息  -->
            <ul class="order-info">
                <li>
                    <p class="order-info-left order-info-p">订单信息</p>
                </li>
                <li>
                    <p class="order-info-left">订单号</p>
                    <p class="order-info-right orderId"><?php echo $_SESSION['orderId'];?></p>
                </li>
                <li>
                    <p class="order-info-left">支付方式</p>
                    <p class="order-info-right pay-method"><?php echo $_SESSION['payMethod'];?></p>
                </li>
                <li>
                    <p class="order-info-left">下单时间</p>
                    <p class="order-info-right">
                        <span class="big-pay-time"><?php echo $_SESSION['buyTime'];?></span>
                    </p>
                </li>
                <li>
                    <p class="order-info-left">订单备注</p>
                    <p class="order-info-right recommend"><?php echo $_SESSION['remark'];?></p>
                </li>
            </ul>

        </div>
    </div>
</div>



<!--添加地址的框-->
<div class="addAddress1">
    <div class="addAddress1-div">
        <p class="addAddress1-p1">添加地址</p>
        <p class="dismiss-add">&times;</p>
    </div>
    <form class="addAddress1-form">
        <label><span class="info">*</span>用户名：</label>
        <input type="text" placeholder="请输入您的用户名" class="add-name1">
        <label><span class="info">*</span>性别：</label>
        <input type="radio" class="man1" checked="checked" name="gender" value="男"><span>男</span>
        <input type="radio" class="woman1"  name="gender" value="女"><span class="woman-span1">女</span>
        <label><span class="info">*</span>电话：</label>
        <input type="tel" placeholder="请输入您的联系方式" class="tel1">
        <label><span class="info">*</span>地址：</label>
        <input type="text" placeholder="请输入您的地址" class="address1">
        <p class="info-war">*号为必填，请完善好信息再保存吧</p>
    </form>
    <input type="submit" value="保存" class="save1" href="javascript:;" onclick="saveMineAdd()">
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>

<!--修改地址的框-->
<div class="editAddress">
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
    <input type="submit" value="保存" class="edit-save" href="javascript:;" onclick="saveAddress()">
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>

<!--修改用户名-->
<div class="edit-username">
    <div class="editUser-div">
        <p class="editUser-p1">修改用户名</p>
        <p class="dismiss-add">&times;</p>
    </div>
    <form class="editUser-form">
        <label><span class="info">*</span>姓名：</label>
        <input type="text" class="editUser-name" value="<?php echo $_SESSION['username'];?>">
        <p class="info-war">*号为必填，请完善好信息再保存吧</p>
    </form>
    <input type="submit" value="保存" class="editUser-save" href="javascript:;" onclick="changeName()">
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>

<!--修改密码-->
<div class="edit-psw">
    <div class="editPsw-div">
        <p class="editPsw-p1">修改密码</p>
        <p class="dismiss-add">&times;</p>
    </div>
    <form class="editPsw-form">
        <label><span class="info">*</span>请输入旧密码：</label>
        <input type="password" class="oldPsw" placeholder="请输入您的旧密码">
        <label><span class="info">*</span>请输入新密码：</label>
        <input type="password" class="newPsw" placeholder="请输入您的新密码">
        <label><span class="info">*</span>请再次输入新密码：</label>
        <input type="password" class="newPsw1" placeholder="请再次输入您的新密码">
        <p class="info-war">*号为必填，请完善好信息再保存吧</p>
    </form>
    <input type="submit" value="保存" class="psw-save" href="javascript:;" onclick="changePsw()">
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>


<!--修改头像-->
<div class="edit-head">
    <div class="editHead-div">
        <p class="editHead-p1">修改头像</p>
        <p class="dismiss-add">&times;</p>
    </div>
    <div class="change-head">
        <img src="<?php echo $_SESSION['img'];?>" />
        <input type="file" accept="image/png,image/gif,image/jpg" title="点击修改头像"/>
<!--        <span class="sign-alert-4">!</span>-->
    </div>
    <p class="pl-choose">请点击选择头像</p>
    <input type="submit" value="保存" class="head-save" href="javascript:;" onclick="changeHead()" />
    <input type="submit" value="取消" class="cancel"  href="javascript:;">
</div>

<!--评价订单-->
<div class="comment-page">
    <span class="dismiss">&times;</span>
    <div class="comment-state">
        <p>评&nbsp;&nbsp;价&nbsp;&nbsp;:</p>
        <ul>
            <li>
                <img src="img/好.png" class="good-img"/>
                <a href="javascript:;" title="好评" class="active15">好评</a>
            </li>
            <li>
                <img src="img/中.png" class="middle-img"/>
                <a href="javascript:;" title="中评" >中评</a>
            </li>
            <li>
                <img src="img/差.png" class="bad-img"/>
                <a href="javascript:;" title="差评" >差评</a>
            </li>
        </ul>
    </div>


<!--评价内容部分-->
    <div class="comment-advise">
        <p>评价内容&nbsp;&nbsp;：</p>
        <textarea type="text" placeholder="说说你对哪里满意吧.." ></textarea>
    </div>

<!--    给食物点赞的部分-->
    <div class="up-food">
        <p class="up-p1">有没有不错或者较差的食物？</p>
        <ul>


        </ul>
    </div>

    <input type="button" value="提交评价" title="提交评价" class="comment-submit" onclick="commentSubmit()"/>

</div>

<!--评价完订单-->
<div class="thanks">
    <span class="dismiss">&times;</span>
    <img src="img/心.jpg"/>
    <h2>感谢您的评价</h2>
    <h3>我们会努力做得更好</h3>
</div>

</body>
<script src="js/clock.js"></script>
<script src="js/drag.js"></script>
</html>