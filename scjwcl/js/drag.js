window.onload = function () {

    //点击时 先用鼠标所在的位置减去div元素的left和top值 得到鼠标距离该div左边和上边的距离
    //移动时候 得到鼠标所在的位置  减去左边的距离 即是此刻该div的left的值  减去上边的距离 是该div此刻的top值
    //当left的值小于0 让此值等于0 大于当前可视窗口的宽度减该div的宽度时候 让此值等于最大宽度
    //当top的值小于0 让此值等于0 大于当前窗口的高度-该div的高度的时候 此值等于最大宽度（当前窗口的高度-该div的高度）


    var mouseOffsetX = 0,
        mouseOffsetY = 0,
        isDragging = false;

    $(".expressionImg").eq(0).mousedown(function (e) {
        var e = e || window.event;
        mouseOffsetX = e.pageX - $(".expressionImg").eq(0).css("left").replace(/px/,'');
        mouseOffsetY = e.pageY - $(".expressionImg").eq(0).css("top").replace(/px/,'');
        isDragging = true;
    })

    $(document).mousemove(function (e) {
        // 得到每一次移动时鼠标的位置 减去固定的mouseOffsetX mouseOffsetY结果就是元素的left 和 top
        var e = e || window.event;
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        var moveX = 0;
        var moveY = 0;
        if(isDragging === true){
            moveX = mouseX - mouseOffsetX;
            moveY = mouseY - mouseOffsetY;

            //moveX的范围在0 - 页面可视宽度-自身宽度
            //如果小于零，则让它等于零
            //如果大于零 让它等于最大值
            var maxX = Number(document.documentElement.clientWidth) - Number($(".expressionImg").eq(0).css("width").replace(/px/,''));
            moveX =Math.min(Math.max(0,moveX), maxX);

            var maxY = Number(document.documentElement.clientHeight) - Number($(".expressionImg").eq(0).css("height").replace(/px/,''));
            moveY = Math.min(Math.max(0, moveY), maxY);

            $(".expressionImg").eq(0).css("left",moveX);
            $(".expressionImg").eq(0).css("top",moveY);

        }

    })

    $(document).mouseup(function () {
        isDragging = false;
    })


}
