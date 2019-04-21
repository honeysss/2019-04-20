$(document).ready(function () {

//    每次刷新要统一的东西
    $(function () {
        var name = $(".wel-name").text();
        $(".editUser-name").val(name);
        $(".oldPsw,.newPsw1,.newPsw").val("");
        $(".comment-advise").find("textarea").val("");
        $(".comment-page").find(".dismiss").click(function () {
            $(".comment-advise").find("textarea").val("");
            $(".up-head").attr("src","img/点赞之前.png");
            $(".down-head").attr("src","img/差评之前.png");
        })
        $(".thanks").find(".dismiss").click(function () {
            $(".thanks").css("display","none");
            $(".up-head").attr("src","img/点赞之前.png");
            $(".down-head").attr("src","img/差评之前.png");
        })
        $(".up-head").attr("src","img/点赞之前.png");
        $(".down-head").attr("src","img/差评之前.png");

    })

//传到order页面的值 点击立即下单
    $(function () {
        $(".foot-nav-right").click(function () {
            if($(".remain").text() == "立即下单"){
                if($(".wel-name").text() != ""){

                    //总价 打折的价钱 用户名 是固定的
                    var totalPrice = $(".totalPrice").text();
                    var rePrice = $(".rePrice").text();
                    var userName = $(".wel-name").text();

                    //食物名字 食物单价 食物数量 食物图像 是不固定的 但是它们的个数都是相同的

                    //食物名字  循环把食物名字放到一个数组里
                    var arrayFoodName = [];
                    var arrayPerPrice = [];
                    var arrayNum = [];
                    var arrayFoodImg = [];
                    var length = $(".foodName").length;
                    for(var i = 0;i< length;i++){
                        arrayFoodName.push($(".foodName").eq(i).text());
                        arrayPerPrice.push($(".foodPrice").eq(i).text());
                        arrayNum.push($(".num").eq(i).text());
                        arrayFoodImg.push($(".order-img").eq(i).text());
                    }


                    $.get("php/show-detail-orderinfo.php",{
                        foodName:arrayFoodName,
                        perPrice:arrayPerPrice,
                        orderNum:arrayNum,
                        totalPrice:totalPrice,
                        rePrice:rePrice,
                        userName:userName,
                        img:arrayFoodImg
                    },function () {
                        window.location.href="order.php";
                    })
                }else {
                    //如果还未登录就点击立即下单
                    alert("请您先登录再下单");
                }
            }
        })


    })


})



//修改头像
function changeHead() {
    var imgSrc = $(".change-head").find("img").attr("src");
    var userName = $(".wel-name").text();
    var oldImg = $(".modify-head").attr("src");
    // console.log(userName,oldImg,imgSrc);
    // console.log(oldImg == imgSrc);
    if (imgSrc == oldImg) {
        alert("与之前头像相同，无需修改");
    } else {
        $.post("php/updateHead.php", {
            userName: userName,
            imgSrc: imgSrc
        }, function (data) {
            // console.log(data);
            if (data == "success") {
                $(".edit-head,.cover,.sign-alert-4").css("display", "none");
                $(".modify-head,.mine,.headIcon").attr("src", imgSrc);

                alert("修改成功");
            } else {
                alert("修改失败");
            }
        })
    }
}

//修改用户名
function changeName() {
    //如果信息还没有输入完整
    if ($(".editUser-name").val() == "") {
        $(".info-war").css("display", "block");
    } else {
        var newName = $(".editUser-name").val();
        var oldName = $(".wel-name").text();
        if (oldName == newName) {
            alert("与之前的用户名相同，无需修改");
        } else {
            $.post("php/updateName.php", {
                newName: newName,
                oldName: oldName
            }, function (data) {
                console.log(data);
                // var data = JSON.parse(data);
                // console.log(data.num);
                if (data == "success") {
                    $.get("php/show-detail-orderinfo.php",{
                        userName:newName
                    })
                    $(".edit-username,.cover").css("display", "none");
                    $(".wel-name").text(newName);
                    $(".mine-left-name").text(newName);
                    $(".info-war").css("display", "none");
                    alert("修改成功！");
                    var name = $(".wel-name").text();
                    $(".editUser-name").val(name);

                } else {
                    alert("该用户名已存在");
                }
            })
        }
    }
}


//修改密码
function changePsw() {
    var oldPsw = $(".oldPsw").val();
    var newPsw = $(".newPsw").val();
    var newPsw1 = $(".newPsw1").val();
    var name = $(".wel-name").text();
    console.log(oldPsw,newPsw,newPsw1,name);
    if (oldPsw == "" || newPsw == "" || newPsw1 == "") {
        $(".info-war").css("display", "block");
    } else if (newPsw != newPsw1) {
        alert("两次密码不同");
    }else {
            $.post("php/updatePsw.php", {
            oldPsw: oldPsw,
            newPsw: newPsw,
            newPsw1: newPsw1,
            name: name
        }, function (data) {
            console.log(data);
            if (data == "success") {
                console.log(data);
                $(".oldPsw,.newPsw1,.newPsw").val("");
                $(".edit-psw").css("display", "none");
                $(".cover").css("display", "none");
                alert("修改成功!请您重新登录");

                //修改成功之后要重新登录
                $(".register1,.cover1").css("display","block");

            } else if(data == "false") {
                alert("与之前密码相同，无需修改");
            }else if (data == "wrong") {
                alert("旧密码输入错误");
            }

        })
    }
}


//我的 添加地址
function saveMineAdd() {
    var userName = $(".wel-name").text();
    var loginName = $(".add-name1").val();
    var tel = $(".tel1").val();
    var address = $(".address1").val();
    var gender = $(".addAddress1").find('input[name="gender"]:checked').val();
    console.log(userName,loginName,tel,address,gender);
    if (loginName == "" || tel == "" || address == "") {
        $(".info-war").css("display", "block");
    } else if (tel.length != 11) {
        alert("您输入的手机号有误");
    } else {
        $.post("php/add-address.php", {
            userName: userName,
            loginName: loginName,
            tel: tel,
            address: address,
            gender: gender
        }, function (data) {
            if (data == "success") {
                $(".cover,.addAddress1").css("display", "none");
                // $(".mine-address").load(location.href+" .mine-address");
                $(".add-name1,.tel1,.address1").val("");
                $(".man1").prop("checked",true);
                $(".woman1").prop("checked",false);
                // 使显示地址的部分重新接受数据
                $.post("php/show-mine-address.php",{
                    userName:userName
                },function (data) {
                    $(".mine-address").find("ul").html(data);
                    alert("添加成功");

                })
            }else if(data == "exist"){
                alert("该地址已存在");
            }else if(data == "false"){
                alert("添加失败");
            }
        })
    }
}

//删除地址
function deleteAdd(id) {
    var id = id;
    var userName = $(".wel-name").text();
    var con = confirm("您确定要删除该地址吗?");
    if(con) {
        $.post("php/delete-address.php", {
            id: id
        }, function (data) {
            // 使显示地址的部分重新接受数据
            $.post("php/show-mine-address.php", {
                userName: userName
            },function (data) {
                $(".mine-address").find("ul").html(data);
            })
            alert("删除成功");
        })
    }
}


//点击修改地址  把id作为全局变量传到保存地址的时候
function modifyAdd(i) {
    $(".cover").css("display","block");
    $(".editAddress").css("display","block");
    var oldUserName = $(".wel-name").text();
    id = $(".ul-id").eq(i).text();
    var oldLoginName = $(".ul-name").eq(i).text();
    var oldAddress = $(".ul-add").eq(i).text();
    var oldSex = $(".ul-sex").eq(i).text();
    var oldTel = $(".ul-tel").eq(i).text();
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
function saveAddress() {
    //如果信息还没有输入完整
    var userName = $(".wel-name").text();
    var loginName = $(".edit-name").val();
    var address = $(".edit-address").val();
    var sex =  $(".editAddress-form").find('input[name="sex"]:checked').val();
    var tel = $(".edit-tel").val();
    console.log( loginName,address, sex,tel);
    if($(".edit-name").val() == "" || $(".edit-tel").val() == "" || $(".edit-address").val() == ""){
        $(".info-war").css("display","block");
    }else if(tel.length != 11){
        alert("您输入的手机号有误，请重新输入");
    }else{
        $.post("php/updateAddress.php",{
            id:id,
            userName:userName,
            loginName:loginName,
            address:address,
            sex:sex,
            tel:tel
        },function (data) {
            console.log(data);
            if(data == "success"){
                $(".info-war,.editAddress").css("display","none");

                // 使显示地址的部分重新接受数据
                $.post("php/show-mine-address.php",{
                    userName:userName
                },function (data) {
                    console.log(data);
                    $(".mine-address").find("ul").html(data);
                })
                alert("修改成功");
                $(".cover").css("display","none");

            }else if(data == "false"){
                alert("该地址已存在");
            }else{
                alert("修改失败");
                $(".info-war,.editAddress,.cover").css("display","none");
            }
        })
    }
}

//签收订单
function signOrder(orderId) {
    var con = confirm("您确定餐已送达到您手中了吗~");
    if(con){
        $(".cover").css("display","none");
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
        var time=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
        $.post("php/sign-order-show-order.php",{
            orderId:orderId,
            time:time
        },function (data) {
            if(data != "false"){
                $(".mine-order").find("ul").html(data);

                alert("订单签收成功");
            }else{
                alert("订单签收失败");
            }
        })
    }
}

//取消订单
function cancelOrder(orderId) {
    var con = confirm("您确定要取消该订单吗，取消订单动作不可撤销喔~");
    if(con){
        $(".cover").css("display","none");
        $.post("php/cancel-order-show-order.php",{
            orderId:orderId
        },function (data) {
            if(data != "false"){
                $(".mine-order").find("ul").html(data);
                alert("取消订单成功");
            }else{
                alert("取消订单失败");
            }
        })
    }
}

//删除订单 1
function deleteOrder1(orderId) {
    $(".cover").css("display","block");
    var con = confirm("您确定要删除该订单吗，删除动作不可撤销喔~");
    if(con){
        $(".cover").css("display","none");
        $.post("php/delete-order-show-order.php",{
            orderId:orderId
        },function (data) {
            if(data != "false"){
                $(".mine-order").find("ul").html(data);
                alert("删除成功");
            }else{
                alert("删除失败");
            }
        })
    }else{
        $(".cover").css("display","none");
    }
}

//删除订单 2
function deleteOrder2(orderId) {
    var con = confirm("您确定要删除该订单吗，删除动作不可撤销喔~");
    if(con){
        $(".cover").css("display","none");
        $.post("php/delete-order-show-order.php",{
            orderId:orderId
        },function (data) {
            if(data!= "false"){
                $(".mine-order").find("ul").html(data);
                alert("删除成功");
            }else{
                alert("删除失败");
            }
        })
    }
}

//删除评论
function deleteComment(orderId) {
    var con = confirm("您确定要删除该评论吗");
    if(con){
        $.post("php/delete-comment.php",{
            orderId:orderId
        },function (data) {
            $(".mine-comment").html(data);
            //在我的评价中及时显示出来
            $.post("php/show-comment.php", {
            },function (data) {
                if(data != "false"){
                    $(".mine-comment").html(data)
                }
            })
            alert("删除成功");

            //    在全部评价 好评 差评 中评中也要及时显示出来
            $.get("php/all-comment.php",function (data) {
                $("#pageOne").html(data);
            })

            $.get("php/all-num.php",function (data) {
                $(".all-num").html(data);
            })


            $.get("php/good-comment.php",function (data) {
                $("#pageTwo").html(data);
            })

            $.get("php/good-num.php",function (data) {
                $(".good-num").html(data);
            })


            $.get("php/middle-comment.php",function (data) {
                $("#pageThree").html(data);
            })

            $.get("php/middle-num.php",function (data) {
                $(".middle-num").html(data);
            })


            $.get("php/bad-comment.php",function (data) {
                $("#pageFour").html(data);
            })

            $.get("php/bad-num.php",function (data) {
                $(".bad-num").html(data);
            })
        })
    }
}

//评价订单
function commentOrder(i) {
    orderId = $(".order-id").eq(i).text();
    userName = $(".order-userName").eq(i).text();
    loginName = $(".order-loginName").eq(i).text();

    var arrayFoodName  = [];
    var length = $(".mine-order").find("ul").find("li").eq(i).find(".order-foodNameName").length;
    for(var j = 0;j<length;j++){
        arrayFoodName.push($(".mine-order").find("ul").find("li").eq(i).find(".order-foodNameName").eq(j).text());
    }
    $.get("php/comment-food-name.php",{
        foodName:arrayFoodName
    },function (data) {
        $(".up-food").find("ul").html(data);
        $(".comment-page,.cover").css("display","block");
    });

}

//提交评价
function commentSubmit() {
    var coState = $(".active15").text();
    var starImg;
    if(coState == "好评"){
        starImg = "img/好评.png";
    }else if(coState == "中评"){
        starImg = "img/中评.png";
    }else if(coState == "差评"){
        starImg = "img/差评.png";
    }
    var headImg = $(".mine").attr("src");
    var comments = $(".comment-advise").find("textarea").val();
    var upNum = [];
    var badNum = [];
    // var foodName;
    var li = $(".up-food").find("ul").find("li");
    li.each(function (i) {
        var co1 = $(".up-food").find("li").eq(i).find(".up-head").attr("src");
        var co2 = $(".up-food").find("li").eq(i).find(".down-head").attr("src");
        if(co1 == "img/点赞之后.png"){
            upNum.push(1);
        }else{
            upNum.push(0);
        }
        if(co2 == "img/差评之后.png"){
            badNum.push(1);
        }else{
            badNum.push(0);
        }
    })
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
    var time=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m)+":"+p(s);
    $.post("php/comment-order.php",{
        orderId:orderId,
        userName:userName,
        loginName:loginName,
        coState:coState,
        comments:comments,
        upNum:upNum,
        badNum:badNum,
        headImg:headImg,
        time:time,
        starImg:starImg
    },function (data) {
        if (data != "false") {
            $(".mine-order").find("ul").html(data);
            $(".thanks").css("display", "block");
            $(".comment-page").css("display", "none");
            $(".comment-advise").find("textarea").val("");

            //在upOrDown中记录顾客点赞或者差评的结果
            $.get("php/upOrDown.php",{
                orderId:orderId,
                upNum:upNum,
                badNum:badNum
            },function (data) {
                console.log(data);
            })

            //在我的评价中及时显示出来
            $.post("php/show-comment.php", {
                userName: userName
            },function (data) {
                if(data != "false"){
                    $(".mine-comment").html(data)
                }
            })

            //    在全部评价 好评 差评 中评中也要及时显示出来
            $.get("php/all-comment.php",function (data) {
                $("#pageOne").html(data);
            })

            $.get("php/all-num.php",function (data) {
                $(".all-num").html(data);
            })


            $.get("php/good-comment.php",function (data) {
                $("#pageTwo").html(data);
            })

            $.get("php/good-num.php",function (data) {
                $(".good-num").html(data);
            })


            $.get("php/middle-comment.php",function (data) {
                $("#pageThree").html(data);
            })

            $.get("php/middle-num.php",function (data) {
                $(".middle-num").html(data);
            })


            $.get("php/bad-comment.php",function (data) {
                $("#pageFour").html(data);
            })

            $.get("php/bad-num.php",function (data) {
                $(".bad-num").html(data);
            })


        } else {
            alert("评论失败");
        }
    })
}

//查看详细信息
function lookOrder(i) {
    var orderId = $(".order-id").eq(i).text();
    var userName = $(".order-userName").eq(i).text();
    var loginName = $(".order-loginName").eq(i).text();
    var arriveTime = $(".order-arriveTime").eq(i).text();
    var remark = $(".order-remark").eq(i).text();
    var totalPrice = $(".order-totalPrice").eq(i).text();
    var rePrice = $(".order-rePrice").eq(i).text();
    var payMethod = $(".order-payMethod").eq(i).text();
    var state = $(".order-state1").eq(i).text();
    var buyTime = $(".order-time").eq(i).text();
    var payPrice = $(".order-price").eq(i).text();
    var gender = $(".order-gender").eq(i).text();
    var tel = $(".order-tel").eq(i).text();
    var address = $(".order-address").eq(i).text();


    //不同id的订餐数量 食物名称 单价 图片 不固定
    var arrayFoodName = [];
    var arrayPerPrice = [];
    var arrayNum = [];
    var arrayFoodImg = [];
    var length = $(".mine-order").find("ul").find("li").eq(i).find(".order-num").length;
    for(var j = 0;j < length;j ++){
        arrayFoodName.push($(".mine-order").find("ul").find("li").eq(i).find(".order-foodNameName").eq(j).text());
        arrayPerPrice.push($(".mine-order").find("ul").find("li").eq(i).find(".order-perPrice").eq(j).text());
        arrayNum.push($(".mine-order").find("ul").find("li").eq(i).find(".order-num").eq(j).text());
        arrayFoodImg.push($(".mine-order").find("ul").find("li").eq(i).find(".order-foodImg").eq(j).text());
    }



    $.post("php/show-detail-order.php",{
        orderId:orderId,
        userName:userName,
        loginName:loginName,
        arriveTime:arriveTime,
        remark:remark,
        totalPrice:totalPrice,
        rePrice:rePrice,
        payMethod:payMethod,
        state:state,
        buyTime:buyTime,
        payPrice:payPrice,
        gender:gender,
        tel:tel,
        address:address,
        foodName:arrayFoodName,
        img:arrayFoodImg,
        perPrice:arrayPerPrice,
        orderNum:arrayNum
    },function (data) {
        $(".detail").html(data);
        $(".mine-order").css("display","none");
        $(".detail").css("display","block");
        $("html,body").animate({scrollTop:"150px"},10);
    })
}
