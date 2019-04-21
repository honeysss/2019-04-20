$(document).ready(function () {

//    开始时刷新
    $(function () {
        $(".man,.man1").prop("checked",true);
        $(".woman,.woman1").prop("checked",false);
        $(".add-name,.tel,.address,.add-name1,.tel1,.address1").val("");
        $(".info-war").css("display","none");
    })


//    点击支付宝的ul
    $(function () {
        var items = $(".pay-method-div").find("li");
        items.each(function () {
            $(this).click(function () {
                $(this).siblings("li").removeClass("active-pay");
                $(this).addClass("active-pay");
            })
        })
    })


//    选择地址
    $(function () {

        // //出现添加地址的div
        // $(".add-address").click(function () {
        //     $(".cover").css("display","block");
        //     $(".addAddress").css("display","block");
        // })


        //选择框
        $(".choose-add,.chosen-add").click(function () {
            $(".choose-address").css("display","block");
            $(".cover").css("display","block");
        })
        //添加地址框
        $(".choose-address1").click(function () {
            $(".choose-address").css("display","none");
            $(".addAddress").css("display","block");
        })


        //男女
        $(".man,.man1").click(function () {
            $(".man,.man1").prop("checked",true);
            $(".woman,.woman1").prop("checked",false);
        })
        $(".woman,.woman1").click(function () {
            $(".woman,.woman1").prop("checked",true);
            $(".man,.man1").prop("checked",false);
        })

    //    叉号,取消
        $(".dismiss-add,.cancel").click(function () {
            $(".editAddress,.cover1").css("display","none");
            $(".edit-username").css("display","none");
            $(".addAddress").css("display","none");
            $(".addAddress1").css("display","none");
            $(".cover").css("display","none");
            $(".add-name,.tel,.address,.add-name1,.tel1,.address1").val("");
            $(".man,.man1").prop("checked",true);
            $(".woman,.woman1").prop("checked",false);
            $(".info-war").css("display","none");
            $(".edit-psw").css("display","none");
            $(".oldPsw,.newPsw,.newPsw1").val("");
            $(".edit-head").css("display","none");
            var imgSrc = $(".mine").attr("src");
            $(".change-head").find("img").attr("src",imgSrc);
            $(".sign-alert-4,.choose-address").css("display","none");
        })
        
        $(".addAddress-div").find(".dismiss-add").click(function () {
            $(".add-address1").css("display","none");
            $(".addAddress").css("display","none");
            $(".choose-address,.cover").css("display","block");
        })
        $(".addAddress").find(".cancel").click(function () {
            $(".addAddress").css("display","none");
            $(".choose-address,.cover").css("display","block");
        })


    })

//  点击确认购买之后
    $(function () {
        $(".orderSu").find("ul").find("a").click(function () {
            $(".cover").css("display","none");
            $(".orderSu").css("display","none");
        })
    })

//    送达时间
    $(function () {
        // function p(s) {
        //     return s < 10 ? '0' + s: s;
        // }
        // var myDate = new Date();
        // //获取当前年
        // var year=myDate.getFullYear();
        // //获取当前月
        // var month=myDate.getMonth()+1;
        // //获取当前日
        // var date=myDate.getDate();
        // //获取当前小时数(0-23)
        // var h=myDate.getHours();
        // //获取当前分钟数(0-59)
        // var m=myDate.getMinutes();
        // var s=myDate.getSeconds();
        // var now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);

        var i = 30;
        function add(h,m) {
            var mAdd = Number(m)+Number(i);
            var hAdd = h;
            if(hAdd >=7 && hAdd <= 23){
                if(mAdd>59){
                    mAdd = Number(i)-(Number(60)-Number(m));
                    mAdd = mAdd <10 ? '0' + mAdd : mAdd;
                    hAdd = Number(h)+Number(1);
                    hAdd = hAdd <10 ? '0' + hAdd : hAdd;
                    if(mAdd>59){
                        mAdd = Number(mAdd)-Number(60);
                        mAdd = mAdd <10 ? '0' + mAdd : mAdd;
                        hAdd = Number(hAdd)+Number(1);
                        hAdd = hAdd <10 ? '0' + hAdd : hAdd;
                        if(mAdd>59){
                            mAdd = Number(mAdd)-Number(60);
                            mAdd = mAdd <10 ? '0' + mAdd : mAdd;
                            hAdd = Number(hAdd)+Number(1);
                            hAdd = hAdd <10 ? '0' + hAdd : hAdd;
                        }
                    }
                    // if(hAdd>23){
                    //     hAdd = 00;
                    //     mAdd = Number(i)-(Number(60)-Number(m));
                    //     mAdd = mAdd <10 ? '0' + mAdd : mAdd;
                    // }
                }
                i = Number(i)+  Number(30);
                return hAdd+":"+mAdd;
            }else{
                return "----";
            }
        }

        function p(s) {
            return s < 10 ? '0' + s: s;
        }
        var myDate = new Date();
        var h = myDate.getHours();
        var m = myDate.getMinutes();

        var time0 = add(p(h),p(m));
        var time1 = add(p(h),p(m));
        var time2 = add(p(h),p(m));
        var time3 = add(p(h),p(m));
        var time4 = add(p(h),p(m));


        if(time0 == "----"){
            $(".se-time").find("select").find("option").eq(0).text("----");
        }else{
            $(".se-time").find("select").find("option").eq(0).text("立即送达");
        }
        $(".se-time").find("select").find("option").eq(1).text(time1);
        $(".se-time").find("select").find("option").eq(2).text(time2);
        $(".se-time").find("select").find("option").eq(3).text(time3);
        $(".se-time").find("select").find("option").eq(4).text(time4);

    })

//order页面中select中option的选中
    $(function () {
        var option = $("select").find("option");
        option.each(function () {
            $(this).click(function () {
                $(this).attr("selected","selected");
                $(this).siblings("option").removeAttr("selected");
            })
        })
    })


})