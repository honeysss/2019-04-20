<?php
require_once ("php/connect.php");
$sql = "select * from messageboard order by id DESC ;";
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
    <link rel="stylesheet" href="css/index.css"/>
    <link rel="stylesheet" href="css/heart.css"/>
    <link rel="stylesheet" href="css/display.css"/>
    <link rel="stylesheet" href="css/reset.css"/>
    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
    <link rel="stylesheet/scss" href="scss/test.scss"/>
    <title>heart</title>
</head>
<body style="width: 100%; height: 100%;position: relative;">
<audio autoplay="autoplay" loop="loop" preload="auto" src="whys.mp3" style="display: none">
</audio>

<div class="load">
    <p class="loadNum">0%</p>
</div>

<div class="fallHeart">
    <img src="img/heart.png" alt="" class="img_2"/>
    <img src="img/heart.png" alt="" class="img_3"/>
    <img src="img/heart.png" alt="" class="img_4"/>
    <img src="img/heart.png" alt="" class="img_5"/>
    <img src="img/heart.png" alt="" class="img_6"/>
    <img src="img/heart.png" alt="" class="img_7"/>
    <img src="img/heart.png" alt="" class="img_8"/>
    <img src="img/heart.png" alt="" class="img_9"/>
    <img src="img/heart.png" alt="" class="img_10"/>
    <img src="img/heart.png" alt="" class="img_11"/>
    <img src="img/heart.png" alt="" class="img_12"/>
    <img src="img/heart.png" alt="" class="img_13"/>
    <img src="img/heart.png" alt="" class="img_14"/>
    <img src="img/heart.png" alt="" class="img_15"/>
    <img src="img/heart.png" alt="" class="img_16"/>
    <img src="img/heart.png" alt="" class="img_17"/>
    <img src="img/heart.png" alt="" class="img_18"/>
    <img src="img/heart.png" alt="" class="img_19"/>
    <img src="img/heart.png" alt="" class="img_20"/>
    <img src="img/heart.png" alt="" class="img_21"/>

    <img src="img/heart.png" alt="" class="img_22"/>
    <img src="img/heart.png" alt="" class="img_23"/>
    <img src="img/heart.png" alt="" class="img_24"/>
    <img src="img/heart.png" alt="" class="img_25"/>
    <img src="img/heart.png" alt="" class="img_26"/>
    <img src="img/heart.png" alt="" class="img_27"/>
    <img src="img/heart.png" alt="" class="img_28"/>
    <img src="img/heart.png" alt="" class="img_29"/>
    <img src="img/heart.png" alt="" class="img_30"/>
    <img src="img/heart.png" alt="" class="img_31"/>
    <img src="img/heart.png" alt="" class="img_32"/>
    <img src="img/heart.png" alt="" class="img_33"/>
</div>

<div class="player">
    <span class="redline"></span>
    <div class="left_line"></div>
    <span class="middle_1"></span>
    <span class="small_1"></span>
    <span class="small_2"></span>
    <span class="small_3"></span>
    <span class="middle_2"></span>
    <span class="small_4"></span>
    <span class="small_5"></span>
    <span class="small_6"></span>
    <span class="middle_3"></span>
    <span class="small_7"></span>
    <span class="small_8"></span>
    <span class="small_9"></span>
    <span class="middle_4"></span>
    <span class="small_10"></span>
    <span class="small_11"></span>
    <span class="small_12"></span>
    <span class="middle_5"></span>
    <span class="small_13"></span>
    <span class="small_14"></span>
    <span class="small_15"></span>
    <span class="middle_6"></span>
    <span class="small_16"></span>
    <span class="small_17"></span>
    <span class="small_18"></span>
    <span class="middle_7"></span>
    <span class="small_19"></span>
    <span class="small_20"></span>
    <span class="small_21"></span>
    <span class="middle_8"></span>
    <div class="right_line"></div>
</div>

<p class="p1">距离2017年1月17日</p>
<p class="p2">我们已经在一起</p>

<div class="together">
    <span class="yearNum"></span>
    <span class="year">年</span>
    <span class="monthNum"></span>
    <span class="month">个月</span>
    <span class="dayNum"></span>
    <span class="day">天</span>
</div>

<div class="togetherDay">
    <span class="hour">时</span>
    <span class="minute">分</span>
    <span class="second">秒</span>
</div>

<div class="img1"></div>
<div class="img2"></div>
<div class="img3"></div>

<p class="first1">第一次见你</p>
<p class="first2">是在2011年的11月13日</p>
<p class="first3">距离现在已经</p>

<div class="together1">
    <span class="yearNum1"></span>
    <span class="year1">年</span>
    <span class="monthNum1"></span>
    <span class="month1">个月</span>
    <span class="dayNum1"></span>
    <span class="day1">天</span>
</div>


<p class="last1">上次见面</p>
<p class="last2">2018年9月9日</p>
<p class="last3">已经</p>
<div class="together2">
    <span class="yearNum2"></span>
    <span class="year2">年</span>
    <span class="monthNum2"></span>
    <span class="month2">个月</span>
    <span class="dayNum2"></span>
    <span class="day2">天</span>
</div>
<p class="last4">没有见到你了</p>
<p class="last5">真的是</p>
<p class="last6">每时每刻无时无刻</p>
<p class="last7">都在想你呢</p>



<canvas id="canvas" style="height: 400px;width: 800px;left: 50%;top: 395px;position:absolute;margin-left: -400px;"></canvas>

<span class="scj">scj</span>
<img src="img/心.png" class="heart"/>
<span class="wcl">wcl</span>


<!--留言板-->
<div class="messageBoard">
    <p class="expression">
        <img src="img/蛋糕.png" onclick="showFace()"/>
    </p>
    <div class="expressionImg">
        <ul>
            <li><img src="img/2.gif" onclick="publishImg(0)"/> </li>
            <li><img src="img/1.gif" onclick="publishImg(1)"/> </li>
            <li><img src="img/3.gif" onclick="publishImg(2)"/> </li>
            <li><img src="img/6.gif" onclick="publishImg(3)"/> </li>
            <li><img src="img/4.gif" onclick="publishImg(4)"/> </li>
            <li><img src="img/5.gif" onclick="publishImg(5)"/> </li>
        </ul>
    </div>
    <textarea type="text" placeholder="请可爱善良美丽大方的你写下你想对(狗)成杰说的话吧~">
        <img src="img/1.gif"/>
    </textarea>
    <p class="submit" onclick="publishMessage()">发表留言</p>
    <div class="messageContent">

        <?php
        if(!empty($data)){
            foreach ($data as $value){

        ?>

        <ul class="messageUl">
            <img src="<?php echo $value['img'];?>" class="messageImg"/>
            <li class="messageLi">
                <p class="name"><?php echo $value['name'];?></p>
                <p class="rank">第<?php echo $value['id'];?>楼</p>
                <p class="content"><?php echo $value['content'];?></p>
                <?php
                if($value['imgContent'] != null){

                ?>
                <img src = "<?php echo $value['imgContent'];?>"  class="imgContent"/>
                <?php

                }
                ?>
                <p class="date"><?php echo $value['DATE'];?></p>
            </li>
            <div class="img4"></div>
        </ul>

        <?php

            }
        }
        ?>
    </div>
</div>


<div style="height: 5000px;"></div>

</body>
<script src="js/other.js"></script>
<script src="js/we.js"></script>
<script src="js/imgLoadExtends.js"></script>
<!--<script src="js/drag.js"></script>-->
</html>