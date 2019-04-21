
animateOver = true;

$(document).ready(function () {

    showImgFun1 = function showImg() {
        zIndex = 5;
        sizeX = 605;
        sizeY = 524;
        x = sizeX;
        y = sizeY;
        marginX = 0;
        marginY = 0;
        var img = $(".phptoLi");
        img.each(function (i) {
            $(".phptoLi").eq(i).css({
                "z-index": zIndex,
                "opacity": 1/(++i),
                "width": sizeX,
                "height": sizeY,
                "margin-top": marginX,
                "margin-left": marginY
            });
            zIndex = zIndex - 1;
            sizeX = sizeX / 0.9;
            sizeY = sizeY / 0.9;
            marginX = -(sizeX - x)/2;
            marginY = -(sizeY - y)/2;

        })

    }
    showImgFun1();

    showImgFun = function showImg() {
        zIndex = 5;
        sizeX = 605;
        sizeY = 524;
        x = sizeX;
        y = sizeY;
        marginX = 0;
        marginY = 0;
        var img = $(".phptoLi");
        img.each(function (i) {
            $(".phptoLi").eq(i).animate({
                "z-index": zIndex,
                "opacity": 1/(++i),
                "width": sizeX,
                "height": sizeY,
                "margin-top": marginX,
                "margin-left": marginY
            },function () {
                animateOver = true;
            });
            zIndex = zIndex - 1;
            sizeX = sizeX / 0.9;
            sizeY = sizeY / 0.9;
            marginX = -(sizeX - x)/2;
            marginY = -(sizeY - y)/2;

        })

    }
    setTimeout(showImgFun,1000);


})

function next() {
    //点击下一张的时候 获取到当前张
    if(animateOver){
        var li = $(".phptoLi");
        li.each(function () {
            var i = $(this).index();
            var text = '<li class="phptoLi">'+$(".phptoLi").eq(0).html()+'</li>';
            $(".photoUl").append(text);
            $(".phptoLi").eq(0).remove();
            showImgFun();
            return false;
        })
        animateOver = false;
    }

}

function prev() {
    //点击上一张的时候 获取到当前张
    if(animateOver){
        var li = $(".phptoLi");
        li.each(function () {
            var i = $(this).index();
            //    如果透明度为1就是当前张 把当前张变成第二张 把最后一张变成第一张
            //在当前张后面after当前张 在当前张前面添加最后一张 把当前张删除  把最后一张删除
            var text = '<li class="phptoLi">'+$(".phptoLi").eq(0).html()+'</li>';
            $(".photoUl").append(text);
            $(".phptoLi").eq(0).remove();
            showImgFun();
            return false;
        })
        animateOver = false;
    }

}



autoPlay = function () {
    timer = window.setInterval(function () {
        next();
    },2000)
}
autoPlay();
$(function () {
    $(".photoDiv").hover(function () {
        window.clearInterval(timer);
    },function () {
        autoPlay();
    })
})
