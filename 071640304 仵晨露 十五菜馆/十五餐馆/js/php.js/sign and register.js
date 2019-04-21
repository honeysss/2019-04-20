$(document).ready(function () {
    //点击警示框里的×
    $(function () {
        $(".dismiss-info").click(function () {
            $(".infoWarning").animate({opacity:"0",top:"94%"});
            $(".signSuccess").animate({opacity:"0",top:"94%"});
            $(".pswWarning").animate({opacity:"0",top:"94%"});
            $(".userInfo").animate({opacity:"0",top:"94%"});
            $(".infoWarning1").animate({opacity:"0",top:"78.1%"});
            $(".pswWarning1").animate({opacity:"0",top:"78.1%"});
            $(".noUser").animate({opacity:"0",top:"78.1%"});
            $(".coverSign").css("display","none");
            $(".coverSign1").css("display","none");
            $(".infoWarning").css("display","none");
            $(".userInfo").css("display","none");
            $(".pswWarning").css("display","none");
            $(".signSuccess").css("display","none");
            $(".infoWarning1").css("display","none");
            $(".pswWarning1").css("display","none");
            $(".noUser").css("display","none");
        })
        $(".signSuccess").find(".dismiss-info").click(function () {
            $(".sign").css("display","none");
            $(".cover").css("display","none");
            $("body").css({"overflow-x":"auto","overflow-y":"auto"});
            $("body").attr("scroll","auto");
        })
    })




    // 如果在信息没有输入完全的情况下点击注册
    $(function () {
        //点击默认头像（点击上传文件）
        var imgSrc;
        $(function () {
            $(".onLoad-head").find("input").change(function(){
                var v = $(this).val();
                var reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                reader.onload = function(e){
                    imgSrc = e.target.result;
                    $(".onLoad-head").find("img").attr("src",imgSrc);
                };
            });
        })
        $(".submit1").click(function () {
            var img = $(".onLoad-head").find("img").attr("src");
            if($(".input1").val() == "" || $(".input2").val() == "" || $(".input3").val() == "" || $(".identifyImg1").val() == ""){
                $(".identifyInput1").val("");
                document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                $(".infoWarning").css("display","block");
                $(".infoWarning").animate({opacity:"1",top:"43%"});
                $(".coverSign").css("display","block");
            }else if($(".input2").val() != $(".input3").val() ){
                $(".identifyInput1").val("");
                document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                $(".pswWarning").css("display","block");
                $(".pswWarning").animate({opacity:"1",top:"43%"});
                $(".coverSign").css("display","block");
            }else if(img == "img/默认头像.jpg"){
                $(".identifyInput1").val("");
                document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                alert("您还没有选择头像");
            }else if($(".identifyInput1").val() == ""){
                $(".identifyInput1").val("");
                document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                alert("您还没有填写验证码");
            }
            if($(".input1").val() != "" && $(".input2").val() != "" && $(".input3").val() != "" && img != "img/默认头像.jpg" && $(".input2").val() == $(".input3").val() && $(".identifyInput1").val() != ""){

                var username = $(".input1").val();
                var psw = $(".input2").val();
                var psw1 = $(".input3").val();
                var imgSrc1 = imgSrc;
                var identifyCode = $(".identifyInput1").val();
                $.post("php/sign.php", {
                    username: username,
                    psw: psw,
                    psw1: psw1,
                    imgSrc:imgSrc1,
                    identifyCode:identifyCode
                }, function (data) {
                    if(data == "success"){
                        $(".sign").css("display","none");
                        $(".identifyInput1").val("");
                        document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                        window.location.reload();
                    }else if(data == "wrongCode"){
                        $(".identifyInput1").val("");
                        document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                        alert("验证码有误");
                    } else {
                        $(".identifyInput1").val("");
                        document.getElementById('identifyImg1').src ='php/session/code.php?time='+Math.random();
                        $(".userInfo").animate({opacity:"1",top:"43%"});
                        $(".coverSign").css("display","block");
                        $(".userInfo").css("display","block");
                    }
                })
            }

        })

    })



    //头像悬浮样式
    $(function () {
        $(".onLoad-head").find("input").mouseover(function () {
            $(".onLoad-head").find("img").css("box-shadow","0 0 3px red");
        })
        $(".onLoad-head").find("input").mouseleave(function () {
            $(".onLoad-head").find("img").css("box-shadow","none");
        })
    })

    //如果在信息没有输入完全的情况下点击登录
    $(function () {
        $(".submit2").click(function () {
            if($(".input4").val() == "" || $(".input5").val() == "" || $(".identifyInput").val() == "") {
                $(".infoWarning1").animate({opacity:"1",top:"41%"});
                $(".infoWarning1").css("display","block");
                $(".coverSign1").css("display","block");
            }else{
                var username = $(".input4").val();
                var psw = $(".input5").val();
                var identifyCode = $(".identifyInput").val();

                $.post("php/register.php",{
                    username:username,
                    psw:psw,
                    identifyCode:identifyCode
                },function (data) {
                    if(data == "wrong psw"){
                        $(".pswWarning1").animate({opacity:"1",top:"41%"});
                        $(".pswWarning1").css("display","block");
                        $(".coverSign1").css("display","block");
                        $(".identifyInput").val("");
                        document.getElementById('identifyImg').src ='php/session/code.php?time='+Math.random();
                    }else if(data == "wrong username"){
                        $(".noUser").animate({opacity:"1",top:"41%"});
                        $(".noUser").css("display","block");
                        $(".coverSign1").css("display","block");
                        $(".identifyInput").val("");
                        document.getElementById('identifyImg').src ='php/session/code.php?time='+Math.random();
                    }else if(data == "wrongCode"){
                        $(".identifyInput").val("");
                        document.getElementById('identifyImg').src ='php/session/code.php?time='+Math.random();
                        alert("验证码有误");
                    } else{
                        $(".register").css("display","none");
                        $(".coverSign1").css("display","none");
                        $(".cover").css("display","none");
                        $(".input4").val("");
                        $(".input5,.identifyInput").val("");
                        $("body").css({"overflow-x":"auto","overflow-y":"auto"});
                        $("body").attr("scroll","auto");
                        $(".identifyInput").val("");
                        document.getElementById('identifyImg').src ='php/session/code.php?time='+Math.random();
                        window.location.reload();
                    }
                })
            }
        })
    })

    $(".register,.sign").find(".dismiss").click(function () {
        document.getElementById('identifyImg').src ='php/session/code.php?time='+Math.random();
    })

    $(function () {
        $(".submit3").click(function () {
            var userName = $(".wel-name").text();
            if($(".input6").val() == "" || $(".input7").val() == "") {
                $(".infoWarning1").animate({opacity:"1",top:"41%"});
                $(".infoWarning1").css("display","block");
                $(".coverSign1").css("display","block");
            }else if($(".input6").val() != userName) {
                alert("用户名有误");
            }else{
                    var username = $(".input6").val();
                    var psw = $(".input7").val();

                    $.post("php/register.php",{
                        username:username,
                        psw:psw
                    },function (data) {
                        if(data == "wrong psw"){
                            $(".pswWarning1").animate({opacity:"1",top:"41%"});
                            $(".pswWarning1").css("display","block");
                            $(".coverSign1").css("display","block");
                        }else if(data == "wrong username"){
                            $(".noUser").animate({opacity:"1",top:"41%"});
                            $(".noUser").css("display","block");
                            $(".coverSign1").css("display","block");
                        }else{
                            // $.get("php/show-detail-orderinfo.php",{
                            //     userName:username
                            // })
                            // setTimeout(function () {
                            $(".register1").css("display","none");
                            $(".coverSign1").css("display","none");
                            $(".cover").css("display","none");
                            // $(".signRegister").css("display","none");
                            // $(".welcome").css("display","block");
                            // $(".wel-name").text($(".input4").val());
                            $(".input6").val("");
                            $(".input7").val("");
                            $("body").css({"overflow-x":"auto","overflow-y":"auto"});
                            $("body").attr("scroll","auto");
                            // $(".mine").attr("src",data);
                            // },100)
                            window.location.reload();
                            // $(".top").load(location.href+" .top");
                        }
                    })
                }
            })
        })


//    点击退出
    $(function () {
        $(".quit").click(function () {
            var con = confirm("您确定要退出吗?");
            if(con){
                $.get("php/logout.php", function (data) {
                    window.location.href='mainPage.php';
                })
            }

        })
    })


})