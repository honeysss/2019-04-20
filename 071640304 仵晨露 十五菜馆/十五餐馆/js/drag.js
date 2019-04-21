window.onload = function () {

    function autoCenter(el) {
        var bodyW = document.documentElement.clientWidth ;
        var bodyH = document.documentElement.clientHeight;
        var elW = el.css("width").replace(/px/,'');
        var elH = el.css("height").replace(/px/,'');



        el.css("left",(Number(bodyW)-Number(elW))/2 + "px");
        el.css("top",(Number(bodyH)-Number(elH))/2 + "px");

    }


    autoCenter($(".register"));
    autoCenter($(".coverSign1"));

}
