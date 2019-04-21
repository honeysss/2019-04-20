$(document).ready(function () {

    //刷新
    $(function () {
        $(".add-num,.tel,.address").val("");
        $(".man").prop("checked",true);
        $(".woman").prop("checked",false);
        $(".info-war").css("display","none");
    })


    $(".edit1").find(".dismiss-add").click(function () {
        $(".cover,.choose-address").css("display","block");
        $(".edit1").css("display","none");
        $(".cover").css("z-index","4");
    })
    $(".edit1").find(".cancel").click(function () {
        $(".cover,.choose-address").css("display","block");
        $(".edit1").css("display","none");
        $(".cover").css("z-index","4");
    })




    //order 添加地址
   $(".save").click(function () {
       var userName = $(".session-userName").text();
       var loginName = $(".add-name").val();
       var tel = $(".tel").val();
       var address = $(".address").val();
       var gender =$('input[name="sex"]:checked').val();

       // console.log(userName,loginName,tel,address,gender);
       if(loginName == "" || tel == "" || address == ""){
           $(".info-war").css("display","block");
       }else if(tel.length != 11){
           alert("您输入的手机号有误");
       }else {
           $.post("php/add-address.php",{
               userName:userName,
               loginName:loginName,
               tel:tel,
               address:address,
               gender:gender
           },function (data) {
               if(data == "success"){
                   $(".addAddress").css("display","none");
                   $(".man,.man1").prop("checked",true);
                   $(".woman,.woman1").prop("checked",false);
                   $(".add-name,.tel,.address,.add-name1,.tel1,.address1").val("");
                   $(".info-war").css("display","none");
                   $(".addAddress").css("display","none");
                   $(".choose-address,.cover").css("display","block");

                   // 使显示地址的部分重新接受数据
                   $.post("php/show-order-address.php",{
                       userName:userName
                   },function (data) {
                       // console.log(data);
                       $(".choose-address").find(".orderAddress").html(data);
                   })
                   alert("添加成功");
               }else if(data == "exist"){
                   alert("该地址已存在");
               }
           })
       }
   })


    //   order页面 选择地址(如果该用户一开始就有地址，则把排在第一个的地址设为默认地址)
    $(function (){
        if($(".choose-address").find("ul").find(".order-page-addr").eq(0).text() != ""){
            var userName = $(".order-page-userName").eq(0).text();
            var address = $(".choose-address").find(".order-page-addr").eq(0).text();
            var loginName = $(".choose-address").find(".order-page-loginName").eq(0).text();
            var gender = $(".choose-address").find(".order-page-gender").eq(0).text();
            var tel = $(".choose-address").find(".order-page-tel").eq(0).text();
            $(".chosen-add").find(".order-page-addr").text(address);
            $(".chosen-add").find(".order-page-loginName").text(loginName);
            $(".chosen-add").find(".order-page-gender").text(gender);
            $(".chosen-add").find(".order-page-tel").text(tel);
            $(".choose-address,.choose-add,.cover").css("display","none");
            $(".chosen-add").css("display","block");
        }
    })



//    确认购买
    $(function () {
        $(".last-line").find("a").click(function () {
            var loginName = $(".chosen-add").find(".order-page-loginName").text();
            var address = $(".chosen-add").find(".order-page-addr").text();
            var tel = $(".chosen-add").find(".order-page-tel").text();
            var gender = $(".chosen-add").find(".order-page-gender").text();
            // console.log(loginName,address,tel,gender);
            if(loginName == "" || address == "" || tel == "" || gender == ""){
                alert("您还没有选择地址");
            }else{
                // $(".cover").css("display","block");
                // $(".orderSu").css("display","block");
                var userName = $(".session-userName").text();
                function p(s) {
                    return s < 10 ? '0' + s: s;
                }
                var myDate = new Date();
                //获取当前年
                var year=myDate.getFullYear();
                //获取当前月
                var month=myDate.getMonth()+1;
                //获取当前日
                var date=myDate.getDate();
                //获取当前小时数(0-23)
                var h=myDate.getHours();
                //获取当前分钟数(0-59)
                var m=myDate.getMinutes();
                var s=myDate.getSeconds();
                var buyTime = year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);     //点击确认购买那一刻的时间
                var arriveT1 = $("option:selected").val();
                if(arriveT1 == "立即送达"){
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

                    function q(s) {
                        return s < 10 ? '0' + s: s;
                    }
                    var time = new Date();
                    var hour = myDate.getHours();
                    var min = myDate.getMinutes();

                    arriveT1 = add(q(hour),q(min));
                }
                var arriveT2 = year+'-'+p(month)+"-"+p(date)+" ";
                var arriveTime = arriveT2+arriveT1;     //顾客选择的时间





                //评论 总价 优惠价 实付 付款方式 是固定的
                var remark = $(".right-content").find("form").find("input").val();
                var rePrice = $(".reduce-price").text();
                var payPrice = $(".last-price").text();
                var payMethod = $(".active-pay").text();

                var totalPrice = 0;
                if(rePrice == 5){
                    totalPrice  = Number(payPrice) + Number(5);
                }else if(rePrice == 2){
                    totalPrice  = Number(payPrice) + Number(2);
                }else{
                    totalPrice  = Number(payPrice);
                }

                //单价 食物名字 购买数量 食物图片 是不固定的

                $.post("php/create-order.php",{
                    loginName:loginName,
                    address:address,
                    tel:tel,
                    gender:gender,
                    userName:userName,
                    buyTime:buyTime,
                    arriveTime:arriveTime,
                    remark:remark,
                    totalPrice:totalPrice,
                    rePrice:rePrice,
                    payPrice:payPrice,
                    payMethod:payMethod,
                },function (data) {
                  if(data != "false"){
                      $(".cover,.orderSu").css("display","block");
                        $(".ordered-orderId").text(data);

                      // 使该食物的销量加一
                      $.get("php/addNum.php")

                  }else{
                      alert("订餐失败,请重新下单");
                  }
                })

            }

        })
    })

//    点击查看订单
    $(function () {
        $(".ordered-detail").click(function () {
            var loginName = $(".chosen-add").find(".order-page-loginName").text();
            var address = $(".chosen-add").find(".order-page-addr").text();
            var tel = $(".chosen-add").find(".order-page-tel").text();
            var gender = $(".chosen-add").find(".order-page-gender").text();
            var userName = $(".session-userName").text();
            function p(s) {
                return s < 10 ? '0' + s: s;
            }
            var myDate = new Date();
            //获取当前年
            var year=myDate.getFullYear();
            //获取当前月
            var month=myDate.getMonth()+1;
            //获取当前日
            var date=myDate.getDate();
            //获取当前小时数(0-23)
            var h=myDate.getHours();
            //获取当前分钟数(0-59)
            var m=myDate.getMinutes();
            var s=myDate.getSeconds();
            var buyTime = year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
            var arriveT1 = $("option:selected").val();
            if(arriveT1 == "立即送达"){
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

                function q(s) {
                    return s < 10 ? '0' + s: s;
                }
                var time = new Date();
                var hour = myDate.getHours();
                var min = myDate.getMinutes();

                arriveT1 = add(q(hour),q(min));

            }
            var arriveT2 = year+'-'+p(month)+"-"+p(date)+" ";
            var arriveTime = arriveT2+arriveT1;
            var remark = $(".right-content").find("form").find("input").val();

            var rePrice = $(".reduce-price").text();
            var payPrice = $(".last-price").text();
            var state = 1;
            var payMethod = $(".active-pay").text();
            var orderId = $(".ordered-orderId").text();

            var totalPrice = 0;
            if(rePrice == 5){
                totalPrice  = Number(payPrice) + Number(5);
            }else if(rePrice == 2){
                totalPrice  = Number(payPrice) + Number(2);
            }else{
                totalPrice  = Number(payPrice);
            }

            //食物名字 食物单价 食物数量 食物图像 是不固定的 但是它们的个数都是相同的

            //食物名字  循环把食物名字放到一个数组里
            var arrayFoodName = [];
            var arrayPerPrice = [];
            var arrayNum = [];
            var arrayFoodImg = [];
            var length = $(".food-num").length;
            for(var i = 0;i< length;i++){
                arrayFoodName.push($(".name").eq(i).text());
                arrayPerPrice.push($(".price-num-content").eq(i).text());
                arrayNum.push($(".food-num").eq(i).text());
                arrayFoodImg.push($(".food-img").eq(i).text());
            }


            $.get("php/show-detail-orderinfo.php",{
                loginName:loginName,
                address:address,
                tel:tel,
                gender:gender,
                userName:userName,
                buyTime:buyTime,
                arriveTime:arriveTime,
                remark:remark,
                totalPrice:totalPrice,
                rePrice:rePrice,
                payPrice:payPrice,
                payMethod:payMethod,
                orderId:orderId,
                state:state,
                foodName:arrayFoodName,
                perPrice:arrayPerPrice,
                orderNum:arrayNum,
                img:arrayFoodImg
            },function () {
                window.location.href="ordered-detail.php";
            })


        })
    })


    
})


//用户选择地址
function showAddress(i) {
    var loginName = $(".choose-address").find(".order-page-loginName").eq(i).text();
    var addr = $(".choose-address").find(".order-page-addr").eq(i).text();
    var tel = $(".choose-address").find(".order-page-tel").eq(i).text();
    var gender = $(".choose-address").find(".order-page-gender").eq(i).text();

    $(".choose-address,.choose-add,.cover").css("display","none");
    $(".chosen-add").css("display","block");

    $(".chosen-add").find(".order-page-addr").text(addr);
    $(".chosen-add").find(".order-page-gender").text(gender);
    $(".chosen-add").find(".order-page-tel").text(tel);
    $(".chosen-add").find(".order-page-loginName").text(loginName);
}

//删除地址
function orderDeleteAdd(id) {
    var id = id;
    var userName = $(".session-userName").text();
    var con = confirm("您确定要删除该地址吗?");
    if(con) {
        $.post("php/delete-address.php", {
            id: id
        }, function (data) {
            // 使显示地址的部分重新接受数据
            $.post("php/show-order-address.php", {
                userName: userName
            },function (data) {
                $(".choose-address").find(".orderAddress").html(data);
            })
            alert("删除成功");
        })
    }

}

//点击修改地址  把id作为全局变量传到保存地址的时候
function orderModifyAdd(i) {
    $(".cover").css("display","block");
    $(".edit1").css("display","block");
    var oldUserName = $(".session-userName").text();
    orderId = $(".order-page-id").eq(i).text();
    var oldLoginName = $(".choose-address").find(".order-page-loginName").eq(i).text();
    var oldAddress =  $(".choose-address").find(".order-page-addr").eq(i).text();
    var oldSex =  $(".choose-address").find(".order-page-gender").eq(i).text();
    var oldTel =  $(".choose-address").find(".order-page-tel").eq(i).text();
    $(".edit-name").val(oldLoginName);
    $(".edit-tel").val(oldTel);
    $(".edit-address").val(oldAddress);
    if(oldSex == "男"){
        $(".edit-man").prop("checked",true);
        $(".edit-woman").prop("checked",false);
    }else if(oldSex == "女"){
        $(".edit-woman").prop("checked",true);
        $(".edit-man").prop("checked",false);
    }

}

//点击保存地址
function orderSaveAddress() {
    //如果信息还没有输入完整
    var userName = $(".session-userName").text();
    var loginName = $(".edit-name").val();
    var address = $(".edit-address").val();
    var sex =  $(".editAddress-form").find('input[name="sex"]:checked').val();
    var tel = $(".edit-tel").val();
    if($(".edit-name").val() == "" || $(".edit-tel").val() == "" || $(".edit-address").val() == ""){
        $(".info-war").css("display","block");
    }else if(tel.length != 11){
        alert("您输入的手机号有误，请重新输入");
    }else{
        $.post("php/updateAddress.php",{
            id:orderId,
            userName:userName,
            loginName:loginName,
            address:address,
            sex:sex,
            tel:tel
        },function (data) {
            console.log(data);
            if(data == "success"){
                $(".cover").css("z-index","4");
                $(".info-war,.edit1").css("display","none");

                // 使显示地址的部分重新接受数据
                $.post("php/show-order-address.php",{
                    userName:userName
                },function (data) {
                    console.log(data);
                    $(".choose-address").find(".orderAddress").html(data);
                    alert("修改成功");
                })


            }else if(data == "false"){
                alert("该地址已存在");
            }else{
                alert("修改失败");
                $(".info-war,.edit1").css("display","none");
                $(".cover").css("z-index","4");
            }
        })
    }
}

//鼠标li
function over(i) {
    $(".choose-address").find("ul").find("li").eq(i).css("background-color","#f7e3e3");
}
function out(i) {
    $(".choose-address").find("ul").find("li").eq(i).css("background-color","white");
}
