<?php
session_start();

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
<input type="text" placeholder="请输入验证码" class="identifyCode"/>
<input type="submit" value="提交" class="identifySubmit">
<img src="code.php" style="box-shadow:0 0 1px slategray;" id="identifyImg"/>
<a class="identifySpan" style="color: darkblue;cursor:pointer;font-size: 12px;font-weight: 500;"
   onclick="document.getElementById('identifyImg').src ='code.php?time='+Math.random();">
    看不清?
</a>
</body>

<script>
    $(".identifySubmit").click(function () {
        var identifyCode = $(".identifyCode").val();
        $.post("check.php",{
            identifyCode:identifyCode
        },function (data) {
            if(data == "success"){
                $(".identifyCode").val("");
                alert("验证码正确");
            }else{
                $(".identifyCode").val("");
                alert("验证码错误");
                document.getElementById('identifyImg').src ='code.php?time='+Math.random();
            }
        })
    })
</script>

</html>