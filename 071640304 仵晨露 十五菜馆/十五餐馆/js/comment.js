$(document).ready(function () {

    //点击a标签下的内容
    var chooseA = $(".choose").find("a");
    chooseA.each(function () {
        $(this).click(function () {
            $(this).siblings("a").removeClass("active3");
            $(this).addClass("active3");
            var aIndex = $(this).attr("id");
            $(".choose").find("input").eq(aIndex).prop("checked","checked").siblings("input").removeAttr("checked");
            $(".choose").find("input").eq(aIndex).attr("checked","checked");
            $(".comment-content").find("div").eq(aIndex).siblings("div").css("display","none");
            $(".comment-content").find("div").eq(aIndex).css("display","block");
            var height = $(".comment-content").find('div').eq(aIndex).height();
            var lastHeight = Number(height)+Number(450);
            var winHei = $(window).height();
            console.log(lastHeight,winHei);
            if(lastHeight<winHei){
                lastHeight = winHei;
            }
            console.log(lastHeight);
            $(".foot").css("top",lastHeight+"px");
        })
    })

//  点击radio时
    var radios = $(".choose").find("input");
    radios.each(function () {
        $(this).click(function () {
            var rIndex = $(this).attr("value");
            $(this).prop("checked","checked").siblings("input").removeAttr("checked");
            $(this).attr("checked","checked");
            $(".choose").find("a").eq(rIndex).siblings("a").removeClass("active3");
            $(".choose").find("a").eq(rIndex).addClass("active3");
            $(".comment-content").find("div").eq(rIndex).siblings("div").css("display","none");
            $(".comment-content").find("div").eq(rIndex).css("display","block");
            var height = $(".comment-content").find('div').eq(rIndex).height();
            var lastHeight = Number(height)+Number(450);
            var winHei = $(window).height();
            if(lastHeight<winHei){
                lastHeight = winHei;
            }
            $(".foot").css("top",lastHeight+"px");
        })
    })

//点击底部翻页的数字
    $(".page").find("a").click(function () {
        $(this).siblings("a").removeClass("active4");
        $(this).addClass("active4");
        var name = $(this).attr("name");
        var comment = $(".comment-content").find(".comment-area");
        comment.each(function () {
            $(name).siblings("div").css("display","none");
            $(name).css("display","block");
        })
        var actVal = $(this).attr("value");
        if(actVal == 0){
            $(".before").attr("href","javascript:return false;");
            $(".before").css({"color":"#CCCCCC","cursor":"auto"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".after").css({"color":"#666666","cursor":"pointer"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"#333333","color":"white"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#666666"});
            })
            $(".after").attr("href","javascript:scrollTo(0,0)");
        }
        if(actVal == 1){
            $(".before").attr("href","javascript:scrollTo(0,0)");
            $(".before").css({"color":"#666666","cursor":"pointer"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"#333333","color":"white"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#666666"});
            })
            $(".after").css({"color":"#666666","cursor":"pointer"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"#333333","color":"white"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#666666"});
            })
            $(".after").attr("href","javascript:scrollTo(0,0)");
        }
        if(actVal == 2){
            $(".before").attr("href","javascript:scrollTo(0,0)");
            $(".before").css({"color":"#666666","cursor":"pointer"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"#333333","color":"white"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#666666"});
            })
            $(".after").css({"color":"#CCCCCC","cursor":"auto"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".after").attr("href","javascript:return false;");
        }
    })

//    点击下一页 如果当前在第一页，跳到第二页，同时回到顶部
//    如果在第二页，跳到第三页，同时回到顶部
//    如果在第三页 不可点击
    $(".after").click(function () {
        var act = $(".page").find(".active4");
        var actVal = act.attr("value");
        $(".page").find("a").eq(Number(actVal)+1).siblings("a").removeClass("active4");
        $(".page").find("a").eq(Number(actVal)+1).addClass("active4");


        $(".comment-content").find(".comment-area").eq(Number(actVal)+1).siblings("div").css("display","none");
        $(".comment-content").find(".comment-area").eq(Number(actVal)+1).css("display","block");


        if(actVal == 0){
            $(".before").attr("href","javascript:scrollTo(0,0)");
            $(".before").css({"color":"#666666","cursor":"pointer"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"#333333","color":"white"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#666666"});
            })
            $(".after").css({"color":"#666666","cursor":"pointer"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"#333333","color":"white"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#666666"});
            })
            $(".after").attr("href","javascript:scrollTo(0,0)");
        }
        if(actVal == 1){
            $(".before").attr("href","javascript:scrollTo(0,0)");
            $(".before").css({"color":"#666666","cursor":"pointer"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"#333333","color":"white"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#666666"});
            })
            $(".after").css({"color":"#CCCCCC","cursor":"auto"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".after").attr("href","javascript:scrollTo(0,0)");
        }
        if(actVal == 2){
            $(".after").attr("href","javascript:return false;");
        }
    })

//    点击上一页
    $(".before").click(function () {
        var act = $(".page").find(".active4");
        var actVal = act.attr("value");
        if(actVal>=1){
            $(".page").find("a").eq(Number(actVal)-1).siblings("a").removeClass("active4");
            $(".page").find("a").eq(Number(actVal)-1).addClass("active4");
        }

        $(".comment-content").find(".comment-area").eq(Number(actVal)-1).siblings("div").css("display","none");
        $(".comment-content").find(".comment-area").eq(Number(actVal)-1).css("display","block");

        if(actVal == 2){
            $(".before").attr("href","javascript:scrollTo(0,0)");
            $(".before").css({"color":"#666666","cursor":"pointer"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"#333333","color":"white"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#666666"});
            })
            $(".after").css({"color":"#666666","cursor":"pointer"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"#333333","color":"white"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#666666"});
            })
            $(".after").attr("href","javascript:scrollTo(0,0)");
        }
        if(actVal == 1) {
            $(".before").attr("href", "javascript:scrollTo(0,0)");
            $(".before").css({"color":"#CCCCCC","cursor":"auto"});
            $(".before").mouseover(function () {
                $(".before").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".before").mouseleave(function () {
                $(".before").css({"background-color":"white","color":"#CCCCCC"});
            })
            $(".after").css({"color":"#666666","cursor":"pointer"});
            $(".after").mouseover(function () {
                $(".after").css({"background-color":"#333333","color":"white"});
            })
            $(".after").mouseleave(function () {
                $(".after").css({"background-color":"white","color":"#666666"});
            })
            $(".after").attr("href","javascript:scrollTo(0,0)");
        }
        if(actVal == 0){
            $(".before").attr("href","javascript:return false;");
        }
    })



})