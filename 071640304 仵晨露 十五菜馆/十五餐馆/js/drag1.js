window.onload = function () {

    //点击时 先用鼠标所在的位置减去div元素的left和top值 得到鼠标距离该div左边和上边的距离
    //移动时候 得到鼠标所在的位置  减去左边的距离 即是此刻该div的left的值  减去上边的距离 是该div此刻的top值
    //当left的值小于0 让此值等于0 大于当前可视窗口的宽度减该div的宽度时候 让此值等于最大宽度
    //当top的值小于0 让此值等于0 大于当前窗口的高度-该div的高度的时候 此值等于最大宽度（当前窗口的高度-该div的高度）

    function autoCenter(el) {
        var bodyW = document.documentElement.clientWidth ;
        var bodyH = document.documentElement.clientHeight;
        var elW = el.css("width").replace(/px/,'');
        var elH = el.css("height").replace(/px/,'');

        el.css("left",(Number(bodyW)-Number(elW))/2 + "px");
        el.css("top",(Number(bodyH)-Number(elH))/2 + "px");

    }

    autoCenter($(".addAddress"));

    var mouseOffsetX = 0,
        mouseOffsetY = 0,
        isDragging = false;

    $(".addAddress-div").mousedown(function (e) {
        var e = e || window.event;
        mouseOffsetX = e.pageX - $(".addAddress").css("left").replace(/px/,'');
        mouseOffsetY = e.pageY - $(".addAddress").css("top").replace(/px/,'');
        isDragging = true;
    })

    $(document).mousemove(function (e) {
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
            var maxX = Number(document.documentElement.clientWidth) - Number($(".addAddress").css("width").replace(/px/,''));
            moveX =Math.min(Math.max(0,moveX), maxX);

            var maxY = Number(document.documentElement.clientHeight) - Number($(".addAddress").css("height").replace(/px/,'')) - Number(75);
            moveY = Math.min(Math.max(-50, moveY), maxY);

            $(".addAddress").css("left",moveX);
            $(".addAddress").css("top",moveY);

        }

    })

    $(document).mouseup(function () {
        isDragging = false;
    })

    $(".addAddress").find(".dismiss-add").click(function () {
        autoCenter($(".addAddress"));
    })

}
