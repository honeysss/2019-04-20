

$(document).ready(function () {

//    刷新
    $(function () {
        // $(".comment-state").find("ul").find("a").eq(0).addClass("active15");
        // $(".comment-state").find("ul").find("a").eq(0).siblings("a").removeClass("active15");
    })

//    查看订单，我的地址
    $(function () {
        var items = $(".mine-left").find("li");
        items.each(function () {
            $(this).click(function () {
                $(this).siblings("li").removeClass("active10");
                $(this).addClass("active10");
            })
        })
    })

//    新增地址
    $(function () {
        $(".add-address1").click(function () {
            $(".cover").css("display","block");
            $(".addAddress1").css("display","block");
        })
    })

//    修改用户名
    $(function () {
        $(".mine-left").find("p").eq(0).click(function () {
            $(".edit-username").css("display","block");
            $(".cover").css("display","block");
        })
    })

//  修改密码
    $(function () {
        $(".mine-left").find("p").eq(1).click(function () {
            $(".edit-psw").css("display","block");
            $(".cover").css("display","block");
        })
    })

//    点击收获地址和查看订单
    $(function () {
        //点击收货地址
        $(".receive").click(function () {
            $(".mine-address").css("display", "block");
            $(".mine-order").css("display", "none");
            $(".detail").css("display", "none");
            $(".mine-comment").css("display", "none");
        })
        //点击查看订单
        $(".look-order").click(function () {
            $(".mine-address").css("display", "none");
            $(".mine-order").css("display", "block");
            $(".detail").css("display", "none");
            // $("#show-order").load("php/show-order.php");
            $(".mine-comment").css("display", "none");
        })
        //    点击我的评论
        $(".look-comment").click(function () {
            $(".mine-address").css("display", "none");
            $(".mine-order").css("display", "none");
            $(".mine-comment").css("display", "block");
            $(".detail").css("display", "none");
        })
    })

//    回到点菜界面
    $(".middle-top-left-img").click(function () {
        $(".middle-middle,.foot-nav").css("display","block");
        $(".middle-middle-content,.foot").css("display","block");
        $(".food-content").css("display","block");
        $(".mine-left").css("display","none");
        $(".mine-right").css("display","none");
        $(".mine-address").css("display","none");
        $(".mine-content").css("display","none");
        $(".buContent").css("display","none");
        $(".comment-content").css("display","none");
        $("#orderFood").addClass("active1");
        $("#comment,#business").removeClass("active1");
        $(".detail").css("display","none");
    })



//    修改头像
    $(function () {
        $(".modify-head").click(function () {
            $(".edit-head,.cover").css("display","block");
        })

        $(".change-head").find("input").change(function(){
            var v = $(this).val();
            var reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = function(e){
                var imgSrc = e.target.result;
                $(".change-head").find("img").attr("src",imgSrc);
            };
        });
        $(".change-head").find("input").blur(function () {
            var oldImage = $(".modify-head").attr("src");
            var newImg = $(".change-head").find("img").attr("src");
            if(oldImage==newImg){
                $(".sign-alert-4").css("display","inline-block");
            }else{
                $(".sign-alert-4").css("display","none");
            }
        })

    })
    
//    评价
    $(function () {
        var item = $(".comment-state").find("ul").find("li");
        item.each(function () {
            $(this).click(function () {
                $(this).siblings("li").find("a").removeClass("active15");
                $(this).find("a").addClass("active15");
            })
        })

        $(".comment-state").find("ul").find("li").eq(2).click(function () {
            $(".comment-advise").find("textarea").attr("placeholder","说说您对哪里不满意吧..我们会努力改正的")
        })
        $(".comment-state").find("ul").find("li").eq(1).click(function () {
            $(".comment-advise").find("textarea").attr("placeholder","说说您对哪里满意吧..")
        })
        $(".comment-state").find("ul").find("li").eq(0).click(function () {
            $(".comment-advise").find("textarea").attr("placeholder","说说您对哪里满意吧..")
        })

        var text = $(".comment-advise").find("textarea");
        text.focus(function () {
            $(this).css("box-shadow","0 0 2px #FFA627")
        })
        text.blur(function () {
            $(this).css("box-shadow","none")
        })
    })








})

//    查看订单图片图片悬浮时候的样式
function imgOver(i) {
    $(".imgStyle").eq(i).css("box-shadow","0 0 3px red");
}

function imgLeave(i) {
    $(".imgStyle").eq(i).css("box-shadow","none");
}

//评价里的好评差评手势
function up(i) {
    if($(".up-head").eq(i).attr("src") == "img/点赞之前.png"){
        $(".up-head").eq(i).attr("src","img/点赞之后.png");
    }else{
        $(".up-head").eq(i).attr("src","img/点赞之前.png");
    }
    $(".down-head").eq(i).attr("src","img/差评之前.png");
}

function down(i) {
    if($(".down-head").eq(i).attr("src") == "img/差评之前.png"){
        $(".down-head").eq(i).attr("src","img/差评之后.png");
    }else{
        $(".down-head").eq(i).attr("src","img/差评之前.png");
    }

    $(".up-head").eq(i).attr("src","img/点赞之前.png");
}
