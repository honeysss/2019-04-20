$(document).ready(function () {

    //    点击我的
    $(function () {
        $(".mine").click(function () {
            $(".middle-middle,.foot-nav,.detail,.mine-comment,.mine-order").css("display","none");
            $(".mine-left").css("display","block");
            $(".mine-content").css("display","block");
            $(".mine-right").css("display","block");
            $(".mine-address").css("display","block");
            $(".receive").addClass("active10");
            $(".receive").siblings("li").removeClass("active10");
            $(".foot").css("display","none");

        })
        $(".mine").mouseover(function () {
            $(".mine").css("box-shadow","0 0 4px red");
        })
        $(".mine").mouseleave(function () {
            $(".mine").css("box-shadow","none");
        })


        $(".modify-head").mouseover(function () {
            $(".modify-head").css("box-shadow","0 0 4px red");
        })
        $(".modify-head").mouseleave(function () {
            $(".modify-head").css("box-shadow","none");
        })
    })

    //页面刷新时需清空或者重置的值
    $(function () {
        //先把注册和登录里的内容清空
        $(".input1,.input2,.input3,.input4,.input5,.input6,.input7").val("");
        $(".sign-alert-1,.sign-alert-2,.sign-alert-3,.sign-alert-4,.reg-alert-1,.reg-alert-2,.reg-alert-3").css("display","none");
        $(".choose").find("input").eq(0).prop("checked","checked").siblings("input").removeAttr("checked");
        $(".choose").find("input").eq(0).attr("checked","checked");
    })



    //导航栏和悬浮层
    $(function () {
        //左侧导航栏
        $(window).scroll(function () {
            var top = $(document).scrollTop();
            var menu = $("#menu1");
            var items = $(".food-content").find(".item");
            var activeId = "";
            items.each(function () {
                var m = $(this);
                var itemTop = m.offset().top;
                if(top > itemTop - 100){
                    activeId = "#"+m.attr("id");
                }else{
                    return false;
                }
            })
            var activeLink = $("#menu1").find(".active2");
            if(activeId && activeLink.attr("href") != activeId){
                activeLink.removeClass("active2");
                menu.find("[href="+activeId+"]").addClass("active2")
            }
        })

        //左侧导航栏
        $(window).scroll(function (){
            var top = $(document).scrollTop();
            if(top>=0 & top<=200){
                $("#menu1").css("top","280px");
            }else if(top>=200 && top<=3358){
                $("#menu1").css("top","80px");
            }else if(top>3358){
                $("#menu1").css("top","-40px");
            }
        })

        //顶部悬浮层
        $(".middle-top-left").mouseover(function () {
            if ($(".middle-top-hidden").css("display") === 'none') {
                $(".middle-top-hidden").css("display", "block");
                $(".middle-top-left").css("box-shadow","1px 0 1px 1px #E5E5E5");
                $(".middle-top-left-img1").attr("src","img/向上图标.png");

            }
        })

        $(".middle-top-left").mouseleave(function () {
            if ($(".middle-top-hidden").css("display") === 'block') {
                $(".middle-top-hidden").css("display","none");
                $(".middle-top-left").css("box-shadow","0 0 0 0");
                $(".middle-top-left-img1").attr("src","img/向下图标.png");
            }
        })
    })




    //点击清除菜单时购物车的js
    $(function () {
        $(".clearFood").click(function () {
            //把foodHover里的元素都删除
            $(".foodHover").empty();

            $(".topHover").fadeOut();
            $(".message").css("display",'none');
            $(".foot-nav-left").find("p").css("display",'none');
            $(".foot-nav-left").find("h3").css("display",'none');
            $(".foot-nav-left").find("h3").text(0);
            $(".remain").text("差");
            $(".fifteen").text(15);
            $(".yuan").text("元起送");
            $(".remain").css("margin-left","27px");
            $(".foot-nav-right").css("cursor","auto");
            $(".foot-nav-right").css("background-color","#A0A0A0");
            $(".foot-nav-right").find("p").css({"font-weight":"normal","color":"white"});
            $(".add-num").text(0);
            $(".add-num").css("display","none");
            $(".message").text(0);
            $(".orderNum").text(0);
        })
    })




    //点击购物车icon
    $(function () {
        $(".orderCar").click(function () {
            var pDisplay = $(".foot-nav-left").find("p").css("display");
            if(pDisplay === 'block'){
                $(".topHover").slideToggle("slow");
                $(".message").toggle();
            }
        })
    })


//    刚点开时加载图片的动画
    $(function(){
        var img=$("img");
        var num=0;
        img.each(function(i){
            // console.log(i);
            var oimg=new Image();
            oimg.onload=function(){
                num++;
                oimg.onload=null;
                $(".loading-content p").html(parseInt(num/$("img").size()*100)+"%");
                if(num>=i){
                    $(".onLoad").fadeOut();
                }
            }
            oimg.src=img[i].src;
        })
    })



//    注册 登录字体点击事件
    $(function () {
//    注册字体点击事件
        $(".enSign").click(function () {
            $(".sign").css("display","block");
            $("body").css({"overflow-x":"hidden","overflow-y":"hidden"});
            $("body").attr("scroll","no");
            $(".cover").css("display","block");
        })

//    登录字体点击事件
        $(".enRegister").click(function () {
            $(".register").css("display","block");
            $("body").css({"overflow-x":"hidden","overflow-y":"hidden"});
            $("body").attr("scroll","no");
            $(".cover").css("display","block");
        })

    })

    //注册 登录框点击事件
    $(function () {
        //    注册框点击事件
        $(".input1").focus(function () {
            $(".input1").attr("placeholder","");
            $(".input1").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".input1").blur(function () {
            $(".input1").attr("placeholder","请输入您的用户名");
            $(".input1").css("box-shadow","0 0 0 lightblue");
            if($(".input1").val() == ""){
                $(".sign-alert-1").css("display","inline-block");
            }else{
                $(".sign-alert-1").css("display","none");
            }
        })
        $(".input2").focus(function () {
            $(".input2").attr("placeholder","");
            $(".input2").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".input2").blur(function () {
            $(".input2").attr("placeholder","请输入您的密码");
            $(".input2").css("box-shadow","0 0 0 lightblue");
            if($(".input2").val() == ""){
                $(".sign-alert-2").css("display","inline-block");
            }else{
                $(".sign-alert-2").css("display","none");
            }
        })
        $(".input3").focus(function () {
            $(".input3").attr("placeholder","");
            $(".input3").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".input3").blur(function () {
            $(".input3").attr("placeholder","请再次输入您的密码");
            $(".input3").css("box-shadow","0 0 0 lightblue")
            if($(".input3").val() == ""){
                $(".sign-alert-3").css("display","inline-block");
            }else{
                $(".sign-alert-3").css("display","none");
            }
        })

        $(".input4").focus(function () {
            $(".input4").attr("placeholder","");
            $(".input4").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".input4").blur(function () {
            $(".input4").attr("placeholder","请输入您的用户名");
            $(".input4").css("box-shadow","0 0 0 lightblue");
            if($(".input4").val() == ""){
                $(".reg-alert-1").css("display","inline-block");
            }else{
                $(".reg-alert-1").css("display","none");
            }
        })
        $(".input5").focus(function () {
            $(".input5").attr("placeholder","");
            $(".input5").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".input5").blur(function () {
            $(".input5").attr("placeholder","请输入您的密码");
            $(".input5").css("box-shadow","0 0 0 lightblue");
            if($(".input5").val() == ""){
                $(".reg-alert-2").css("display","inline-block");
            }else{
                $(".reg-alert-2").css("display","none");
            }
        })
        $(".input6").blur(function () {
            $(".input6").attr("placeholder","请输入您的用户名");
            $(".input6").css("box-shadow","0 0 0 lightblue");
            if($(".input6").val() == ""){
                $(".reg-alert-1").css("display","inline-block");
            }else{
                $(".reg-alert-1").css("display","none");
            }
        })
        $(".input7").focus(function () {
            $(".input7").attr("placeholder","");
            $(".input7").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".input7").blur(function () {
            $(".input7").attr("placeholder","请输入您的密码");
            $(".input7").css("box-shadow","0 0 0 lightblue");
            if($(".input7").val() == ""){
                $(".reg-alert-2").css("display","inline-block");
            }else{
                $(".reg-alert-2").css("display","none");
            }
        })
        $(".identifyInput").focus(function () {
            $(".identifyInput").attr("placeholder","");
            $(".identifyInput").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".identifyInput").blur(function () {
            $(".identifyInput").attr("placeholder","请输入验证码");
            $(".identifyInput").css("box-shadow","0 0 0 lightblue");
            if($(".identifyInput").val() == ""){
                $(".reg-alert-3").css("display","inline-block");
            }else{
                $(".reg-alert-3").css("display","none");
            }
        })
        $(".identifyInput1").focus(function () {
            $(".identifyInput1").attr("placeholder","");
            $(".identifyInput1").css("box-shadow","1px 1px 1px lightblue")
        })
        $(".identifyInput1").blur(function () {
            $(".identifyInput1").attr("placeholder","请输入验证码");
            $(".identifyInput1").css("box-shadow","0 0 0 lightblue");
            if($(".identifyInput1").val() == ""){
                $(".reg-alert-3").css("display","inline-block");
            }else{
                $(".reg-alert-3").css("display","none");
            }
        })
        $(".onLoad-head").find("input").blur(function () {
            var img = $(".onLoad-head").find("img").attr("src");
            if(img == "img/默认头像.jpg"){
                $(".sign-alert-4").css("display","inline-block");
            }else{
                $(".sign-alert-4").css("display","none");
            }
        })




        $(".dismiss").click(function () {
            $(".register").fadeOut();
            $(".sign").fadeOut();
            $(".cover").fadeOut();
            $(".input1,.input2,.input3,.input4,.input5").val("");
            $(".sign-alert-1,.sign-alert-2,.sign-alert-3,.reg-alert-1,.reg-alert-2,.reg-alert-3").css("display","none");
            $("body").css({"overflow-x":"auto","overflow-y":"auto"});
            $("body").attr("scroll","auto");
            $(".thanks,.comment-page").css("display","none");
        })

    })


//    点菜 评价 商家点击事件
    $(function () {
        var foodHei = $(document).height();

        $("#orderFood").click(function () {
            $(".middle-middle-content,.foot").css("display","block");
            $(".food-content").css("display","block");
            $(".comment-content").css("display","none");
            $(".buContent").css("display","none");
            $("#orderFood").addClass("active1");
            $("#comment,#business").removeClass("active1");
            $(".foot-nav").css("display","block");
            $(".foot").css("top",Number(foodHei)-Number(40)+"px");
        })
        $("#comment").click(function () {
            $(".middle-middle-content,.foot").css("display","none");
            $(".food-content").css("display","none");
            $(".comment-content").css("display","block");
            $(".buContent").css("display","none");
            $("#comment").addClass("active1");
            $("#orderFood,#business").removeClass("active1");
            $(".foot-nav").css("display","none");
            $(".choose").find("input").eq(0).prop("checked","checked").siblings("input").removeAttr("checked");
            $(".choose").find("input").eq(0).attr("checked","checked");
            $(".choose").find("a").eq(0).siblings("a").removeClass("active3");
            $(".choose").find("a").eq(0).addClass("active3");
            $(".comment-content").find("div").eq(0).siblings("div").css("display","none");
            $(".comment-content").find("div").eq(0).css("display","block");
        })
        $("#business").click(function () {
            $(".middle-middle-content").css("display","none");
            $(".food-content,.foot").css("display","none");
            $(".comment-content").css("display","none");
            $(".buContent").css("display","block");
            $("#business").addClass("active1");
            $("#comment,#orderFood").removeClass("active1");
            $(".foot-nav").css("display","none");
        })
    })

//  休息 叉
    $(function () {
        $(".rest").find("span").click(function () {
            $(".rest,.cover").css("display","none");
        })
    })

})

//点击购物的加号图片icon
function addImgClick(i) {
//先定义一个总价为零
    var j,k;
    //最终优惠的价钱
    //如果不在配送时间内
    var myDate = new Date();
    var h = myDate.getHours();
    if(h<=7 || h>=23){
        $(".rest,.cover").css("display","block");
    }else{
        //先获取该add-img下的食物名称
        //得到该加号的食物的名称 与此事hover里面所存在的食物对比，看hover中是否已经存在该食物， 如果不存在，则加一个div，存放该食物，如果存在，则继续累加
        var foodName = $(".p1").eq(i).text();
        //再获取与该食物名称相同的 使该食物的add-num同时显示出来
        //定义一个数组 接收与该食物名字相同的所有的add-num
        var array = [];
        var length = $(".p1").length;
        for(var m = 0;m < length;m++){
            var dom = $(".p1").eq(m).text();
            if(dom == foodName){
                array.push(m);
            }
        }
        if(array.length == 2){
            $(".add-num").eq(array[0]).css("display","block");
            $(".add-num").eq(array[1]).css("display","block");
        }else{
            $(".add-num").eq(array[0]).css("display","block");
        }

        //获取菜品单价
        var perPrice = parseFloat($(".p3").eq(i).text());

        //获取菜品图
        var orderImg = $(".foodImg").eq(i).attr("src");



        var topHover = $(".topHover").css("display");
        if(topHover === 'none'){
            $(".message").css("display", 'block');
        }


        //获取底部导航左半部分p的display属性，如果该属性为none，说明现在处于未选菜品时刻，所有值先清零
        //如果此时已经选过菜品 比较一下当前菜品是否已存在在菜单中 如果存在 则在该条记录上加一 如果不存在 创建一个新的hoverTwo
        var pDisplay = $(".foot-nav-left").find("p").css("display");
        if(pDisplay === 'block'){
            //存在该菜品
            var foodName1 = $(".foodName");
            var J = -1;
            foodName1.each(function (j) {
                if($(".foodName").eq(j).text() == foodName ){

                    //    该add-num加一 totalNum加一 相同食物名字的num加一
                    var num = Number($(".add-num").eq(i).text())+Number(1);
                    if(array.length == 2){
                        $(".add-num").eq(array[0]).text(num);
                        $(".add-num").eq(array[1]).text(num);
                    }else{
                        $(".add-num").eq(array[0]).text(num);
                    }

                    $(".num").eq(j).text(num);
                    //存在该菜品 总量也是加一 反正每次点击add-img不管是点击那个都让totalNum加一
                    totalNum = Number(totalNum) + Number(1);

                    //总价
                    if(rePrice == 2){
                        totalPrice = parseFloat(totalPrice) + parseFloat(perPrice)+Number(2);
                    }else if(rePrice == 5){
                        totalPrice = parseFloat(totalPrice) + parseFloat(perPrice)+Number(5);
                    }else{
                        //如果没有打折 总价就等于当前总价加上单价
                        totalPrice = parseFloat(totalPrice) + parseFloat(perPrice);
                    }



                    J = j;

                }
            })
            if(J == -1){
                //不存在该菜品 先加一个hoverTwo
                var content = (" <div class='hoverTwo'> <p class='foodName'></p> <div class='numSpan'> <a class='add' onclick='add(event)'>+</a>" +
                " <span class='num'>0</span> <a class='reduce' onclick='reduce(event)'>-</a> </div> <p class='foodPrice'><p class='foodPrice-icon'>￥ </p></p> </div> ");
                $("div[class=hoverTwo]:last").after(content);


                //    该add-num加一 totalNum加一 食物名字的num加一
                if(array.length == 2){
                    $(".add-num").eq(array[0]).text(1);
                    $(".add-num").eq(array[1]).text(1);
                }else{
                    $(".add-num").eq(array[0]).text(1);
                }
                    $("span[class=num]:last").text(1);

                //不存在该菜品 总量也是加一 反正每次点击add-img不管是点击那个都让totalNum加一
                totalNum = Number(totalNum) + Number(1);

                //食物名字的值也赋上去
                $("p[class=foodName]:last").text(foodName);


                //    添加一个放图片的span
                var spanContent = "<span class='order-img'></span>";
                $(".order-img-div").append(spanContent);

                //    并将该图片存放在心添加的span中
                $("span[class=order-img]:last").text(orderImg);

            //    菜品单价放上去
                $("p[class=foodPrice]:last").text(perPrice);

                //总价
                if(rePrice == 2){
                    totalPrice = parseFloat(totalPrice) + parseFloat(perPrice) + Number(2);
                }else if(rePrice == 5){
                    totalPrice = parseFloat(totalPrice) + parseFloat(perPrice) + Number(5);
                }else{
                    //如果没有打折 总价就等于当前总价加上单价
                    totalPrice = parseFloat(totalPrice) + parseFloat(perPrice);
                }

            }

        }else{
            //先清零
            if(array.length == 2){
                $(".add-num").eq(array[0]).text(0);
                $(".add-num").eq(array[1]).text(0);
            }else{
                $(".add-num").eq(array[0]).text(0);
            }
            $(".num").text(0);
            $(".message").text(0);
            $(".orderNum").text(0);

            //没选过菜品的情况下先在foodHover下添加一个hoverTwo结点
            var content = (" <div class='hoverTwo'> <p class='foodName'></p> <div class='numSpan'> <a class='add' onclick='add(event)'>+</a>" +
            " <span class='num'>0</span> <a class='reduce' onclick='reduce(event)'>-</a> </div> <p class='foodPrice'><p class='foodPrice-icon'>￥ </p></p> </div> ");
            $(".foodHover").append(content);

            //add-num num message orderNum的值都为1
            if(array.length == 2){
                $(".add-num").eq(array[0]).text(1);
                $(".add-num").eq(array[1]).text(1);
            }else{
                $(".add-num").eq(array[0]).text(1);
            }
            $(".num").eq(0).text(1);
            //未点菜的情况下点击 总量为1
            totalNum =  1;


        //    食物名字
            $(".foodName").eq(0).text(foodName);
        //菜品单价
            $(".foodPrice").eq(0).text(perPrice);


            //    添加一个放图片的span
            var spanContent = "<span class='order-img'></span>";
            $(".order-img-div").append(spanContent);

            //    并将该图片存放在心添加的span中
            $("span[class=order-img]:last").text(orderImg);

            //此时的总价为单价乘以数量加上包装费
            totalPrice = parseFloat(perPrice)+Number(1);



            $(".foot-nav-left").find("p").css("display", 'block');
            $(".foot-nav-left").find("h3").css("display", 'block');


        }



        if(totalPrice>=10 && totalPrice<20){
            totalPrice = totalPrice - 2;
            rePrice = 2;
        }else if(totalPrice>=20){
            totalPrice = totalPrice - 5;
            rePrice = 5;
        }else{
            rePrice = 0;
        }
        $(".rePrice").text(rePrice);

        $(".totalPrice").text(totalPrice);
        $(".foot-nav-left").find("h3").text(totalPrice);

        $(".orderNum,.message").text(totalNum);

        //当总价大于15时 才显示立即下单
        if(parseFloat($(".totalPrice").text())>=15){
            $(".foot-nav-right").css("background-color", "#FFA627");
            $(".foot-nav-right").find(".remain").text("立即下单");
            $(".foot-nav-right").find(".fifteen").text("");
            $(".foot-nav-right").find(".yuan").text("");
            $(".foot-nav-right").css("cursor","pointer");
            $(".remain").css("margin-left","35px");
        }else{
            var remain = parseFloat(15)-parseFloat($(".totalPrice").text());
            $(".fifteen").text(remain);
        }
    }
}

//点击加号
function add(e) {
    //获取索引
    e = e || window.event;
    var add = $(".add");
    for(var i = 0;i<add.length;i++){
        if(add[i] == e.target){
            index = i;
        }
    }

    //当前食物单价
    var perPrice = $(".foodPrice").eq(index).text();

    //获得食物名字
    var foodName = $(".foodName").eq(index).text();
    //获得当前该食物的数量
    var num = Number($(".num").eq(index).text());

    //循环所有的食物名字 把相同的食物名字的add-num +1
    var length = $(".p1").length;
    //定义一个数组接收索引 因为可能有两种食物与该食物名称相符
    var array = [];
    for(var i = 0;i < length;i++){
        var dom = $(".p1").eq(i).text();
        if(dom == foodName){
            array.push(i);
        }
    }
    //该num+1 add-num+1 message+1 orderNum+1
    var num1 = Number(num)+Number(1);
    if(array.length == 2){
        $(".add-num").eq(array[0]).text(num1);
        $(".add-num").eq(array[1]).text(num1);
    }else{
        $(".add-num").eq(array[0]).text(num1);
    }

    $(".num").eq(index).text(num1);
    totalNum = totalNum + 1;
    $(".message,.orderNum").text(totalNum);

    //总价
    if(rePrice == 2){
        totalPrice = parseFloat(totalPrice) + parseFloat(perPrice) + Number(2);
    }else if(rePrice == 5){
        totalPrice = parseFloat(totalPrice) + parseFloat(perPrice) + Number(5);
    }else{
        //如果没有打折 总价就等于当前总价加上单价
        totalPrice = parseFloat(totalPrice) + parseFloat(perPrice);
    }


    if(totalPrice>=10 && totalPrice<20){
        totalPrice = totalPrice - 2;
        rePrice = 2;
    }else if(totalPrice>=20){
        totalPrice = totalPrice-5;
        rePrice = 5;
    }else{
        rePrice = 0;
    }
    $(".rePrice").text(rePrice);
    $(".totalPrice").text(totalPrice);
    $(".foot-nav-left").find("h3").text(totalPrice);
    //当总价大于15时 才显示立即下单
    if(parseFloat($(".totalPrice").text())>=15){
        $(".foot-nav-right").css("background-color", "#FFA627");
        $(".foot-nav-right").find(".remain").text("立即下单");
        $(".foot-nav-right").find(".fifteen").text("");
        $(".foot-nav-right").find(".yuan").text("");
        $(".foot-nav-right").css("cursor","pointer");
        $(".remain").css("margin-left","35px");
    }else{
        var remain = parseFloat(15)-parseFloat($(".totalPrice").text());
        $(".fifteen").text(remain);
    }
}

//点击减号
function reduce(e) {
    var index;
    e = e || window.event;
    var reduce = $(".reduce");
    for(var i = 0;i<reduce.length;i++){
        if(reduce[i] == e.target){
           index = i;
        }
    }

    //获取当前num的值
    var num = $(".num").eq(index).text();
    //获取单价
    var perPrice = $(".foodPrice").eq(index).text();

    var array = [];
    var foodName = $(".foodName").eq(index).text();
    //循环所有的食物名字 把相同的食物名字的add-num +1
    var length = $(".p1").length;
    //定义一个数组接收索引 因为可能有两种食物与该食物名称相符
    for(var i = 0;i < length;i++){
        var dom = $(".p1").eq(i).text();
        if(dom == foodName){
            array.push(i);
        }
    }
    //当购物数量大于零的时候才会减，当购物数量小于零时，则把这个菜品删掉
    if(num > 1){

        //该num-1 add-num-1 message-1 orderNum-1
        var num1 = Number(num)-Number(1);
        if(array.length == 2){
            $(".add-num").eq(array[0]).text(num1);
            $(".add-num").eq(array[1]).text(num1);
        }else{
            $(".add-num").eq(array[0]).text(num1);
        }

        $(".num").eq(index).text(num1);

//总价
        if(rePrice == 2){
            totalPrice = parseFloat(totalPrice) - parseFloat(perPrice) + Number(2);
        }else if(rePrice == 5){
            totalPrice = parseFloat(totalPrice) - parseFloat(perPrice) + Number(5);
        }else{
            //如果没有打折 总价就等于当前总价-单价
            totalPrice = parseFloat(totalPrice) - parseFloat(perPrice);
            console.log(totalPrice);
        }


    }else{
        //如果此时该数量已经小于等于一 并且此时的topHover数量大于等于一（说明清除该条记录还有记录存在）再点击的时候该食物的一条记录将清除 并且将与该条食物对应的add-num隐藏
        //如果是最后一条记录（清除该条记录没有记录存在） 则让message topHover等隐藏
        //获取一下与该食物名称相同的order-img的span标签 删除该标签
        var length = $(".order-img").length;
        for(var i = 0;i<length;i++){
            if($(".order-img").eq(i).text() == $(".foodImg").eq(array[0]).attr("src")){
                $(".order-img").eq(i).remove();
            }
        }

        var length = $(".hoverTwo").length;
        if(length < 2){
            $(".topHover").fadeOut();
            $(".message").css("display",'none');
            $(".foot-nav-left").find("p").css("display",'none');
            $(".foot-nav-left").find("h3").css("display",'none');
            $(".remain").text("差");
            $(".fifteen").text(15);
            $(".yuan").text("元起送");
            $(".remain").css("margin-left","27px");
            $(".foot-nav-right").css("cursor","auto");
            $(".foot-nav-right").css("background-color","#A0A0A0");
            $(".foot-nav-right").find("p").css({"font-weight":"normal","color":"white"});
            $(".message").text(0);
            $(".orderNum").text(0);
            totalPrice = 0;

        }else{
            //总价
            if(rePrice == 2){
                totalPrice = parseFloat(totalPrice) - parseFloat(perPrice) + Number(2);
            }else if(rePrice == 5){
                totalPrice = parseFloat(totalPrice) - parseFloat(perPrice) + Number(5);
            }else{
                //如果没有打折 总价就等于当前总价加上单价
                totalPrice = parseFloat(totalPrice) - parseFloat(perPrice);
            }
        }

        $(".hoverTwo").eq(index).remove();
        if(array.length == 2){
            $(".add-num").eq(array[0]).text(0);
            $(".add-num").eq(array[1]).text(0);
            $(".add-num").eq(array[0]).css("display","none");
            $(".add-num").eq(array[1]).css("display","none");
        }else{
            $(".add-num").eq(array[0]).text(0);
            $(".add-num").eq(array[0]).css("display","none");
        }
    }


    if(totalPrice>=10 && totalPrice<20){
        totalPrice = totalPrice - 2;
        rePrice = 2;
    }else if(totalPrice>=20){
        totalPrice = totalPrice-5;
        rePrice = 5;
    }else{
        rePrice = 0;
    }
    $(".rePrice").text(rePrice);
    $(".totalPrice").text(totalPrice);
    $(".foot-nav-left").find("h3").text(totalPrice);
    totalNum = totalNum - 1;
    $(".message,.orderNum").text(totalNum);
    //当总价小于15时
    if(parseFloat(totalPrice)<15){
        $(".foot-nav-right").css("cursor","auto");
        $(".foot-nav-right").css("background-color", "#A0A0A0");
        $(".foot-nav-right").find("p").css({"font-weight":"normal","color":"white"});
        $(".foot-nav-right").find(".remain").text("差");
        $(".remain").css("margin-left","27px");

        var remain = parseFloat(15)-parseFloat(totalPrice);
        $(".foot-nav-right").find(".fifteen").text(remain);

        $(".foot-nav-right").find(".yuan").text("元起送");
    }
}

