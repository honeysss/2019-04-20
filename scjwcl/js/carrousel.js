$(function () {

    //主要是点击向下的按钮的时候需要获取到每一个li的上一个li 然后循环把每一个li的样式变成上一个li的样式 不需要改变li的位置 

    //执行函数和方法
    var Carrousel = function (carrousel) {
        var _this = this;
        //保存旋转木马对象
        this.carrousel = carrousel;
        //获取ul
        this.carrouselUl = carrousel.find("ul.carrouselUl");
        //获取li
        this.carrouselLi = this.carrouselUl.find("li.carrouselLi");
        //获取li的个数
        this.size = this.carrouselLi.size();
        //获取第一个li
        this.firstCarrousel = this.carrouselLi.first();
        //获取最后一个li
        this.lastCarrousel = this.carrouselLi.last();
        //获得向前点击按钮
        this.prev = carrousel.find("div.prev");
        //获取向后点击按钮
        this.next = carrousel.find("div.next");

        //默认配置参数
        this.settings = {
            "width": 900,
            "height": 300,
            "caWidth": 700,
            "caHeight": 300,
            "scale": 0.9,
            "opacity": 1,
            "zIndex": 1,
            "verticalAlign": "middle",
            "speed": 1000,
            "autoPlay": "true",
            "playDelay": "1000"
        };
        $.extend(this.settings, _this.getSettings());


        //    设置宽高
        this.setSettingsValue();

        //    设置剩余li的宽高等
        this.remainLiStyle();

        //    定义一个过渡
        this.animateOver = true;
        //    向后点击函数
        this.next.click(function () {
            if(_this.animateOver){
                _this.rotateCarrousel("left");
                _this.animateOver = false;
            }
        });

        //    向前点击
        this.prev.click(function () {
            if(_this.animateOver){
                _this.rotateCarrousel("right");
                _this.animateOver = false;
            }
        });

    //    是否自动执行
        if(this.settings.autoPlay){
            this.autoPlayCarrousel();
            this.carrousel.hover(function () {
                window.clearInterval(timer);
            },function () {
                _this.autoPlayCarrousel();
            })
        }

        
        

    }

    //函数和方法
    Carrousel.prototype = {

        //自动执行
        autoPlayCarrousel:function () {
            var _this = this;
            timer = window.setInterval(function () {
            _this.next.click();
          },_this.settings.playDelay)
        },

        //    向后点击
        rotateCarrousel: function (dir) {
            var _this = this;
            var zIndexArr = [];
            if(dir === "left"){
                this.carrouselLi.each(function (i) {
                    var self = $(this),
                        prev = self.prev().get(0) ? self.prev() : _this.lastCarrousel,
                        width = prev.width(),
                        height = prev.height(),
                        zIndex = prev.css("z-index"),
                        opacity = prev.css("opacity"),
                        left = prev.css("left"),
                        top = prev.css("top"),
                        speed = _this.settings.speed;


                    self.animate({
                        "z-index":zIndex
                    },1,function () {
                        self.animate({
                            width:width,
                            height:height,
                            opacity:opacity,
                            top:top,
                            left:left
                        },speed,function () {
                            _this.animateOver = true;
                        })
                    });

                })

            }else{
                this.carrouselLi.each(function (i) {
                    var self = $(this),
                        next = self.next().get(0) ? self.next() : _this.firstCarrousel,
                        width = next.width(),
                        height = next.height(),
                        zIndex = next.css("z-index"),
                        opacity = next.css("opacity"),
                        left = next.css("left"),
                        top = next.css("top"),
                        speed = _this.settings.speed;

                    zIndexArr.push(zIndex);
                    self.animate({
                        width:width,
                        height:height,
                        opacity:opacity,
                        top:top,
                        left:left
                    },speed,function () {
                        _this.animateOver = true;
                    });

                })
                this.carrouselLi.each(function (i) {
                    $(this).css("z-index",zIndexArr[i]);
                })
            }


        },


        //    设置对齐方式
        setVerticalAlign: function (rh) {
            if (this.settings.verticalAlign === "top") {
                return 0;
            } else if (this.settings.verticalAlign === "bottom") {
                return (this.settings.height - rh);
            } else {
                return (this.settings.height - rh) / 2;
            }
        },


        //    设置剩余li的宽高等
        remainLiStyle: function () {
            var self = this;
            var sliceSize = this.carrouselLi.slice(1),
                sliceLength = sliceSize.size() / 2,
                rightSlice = sliceSize.slice(0, sliceLength),
                leftSlice = sliceSize.slice(sliceLength);

            //  设置右边li的style
            //获得当前一些值
            var rw = this.settings.caWidth,
                rh = this.settings.caHeight,
                zIndex = Math.floor(this.size / 2),
                opacity = this.settings.opacity,
                w = (this.settings.width - this.settings.caWidth) / 2,
                gap = ((this.settings.width - this.settings.caWidth) / 2) / zIndex,
                scale = this.settings.scale;

            rightSlice.each(function (i) {
                rw = rw * scale;
                rh = rh * scale;
                zIndex--;
                var j = i;
                $(this).css({
                    "z-index": zIndex,
                    "width": rw,
                    "height": rh,
                    "opacity": opacity / (++i),
                    "left": (w + self.settings.caWidth + (gap * (++j))) - rw,
                    "top": self.setVerticalAlign(rh)

                });
            })

            //    设置左边li的style
            leftSlice.each(function (i) {
                var j = i;
                $(this).css({
                    "z-index": zIndex,
                    "width": rw,
                    "height": rh,
                    "opacity": opacity * (++i),
                    "left": gap * j,
                    "top": self.setVerticalAlign(rh)

                });
                rw = rw / scale;
                rh = rh / scale;
                zIndex++;
            })

        }
        ,

        //    获取人工配置参数
        getSettings: function () {
            var settings = this.carrousel.attr("data-settings");
            if (settings && settings != "") {
                return jQuery.parseJSON(settings);
            } else {
                return {};
            }
        }
        ,

        //    配置宽高等
        setSettingsValue: function () {
            var w = (this.settings.width - this.settings.caWidth) / 2,
                h = this.settings.height,
                w1 = this.settings.width;
            this.carrousel.css({
                "width": w1,
                "height": h
            })
            this.carrouselUl.css({
                "width": w1,
                "height": h
            })
            this.firstCarrousel.css({
                "width": this.settings.caWidth,
                "height": this.settings.caHeight,
                "left": w,
                "z-index": Math.floor(this.size / 2),
                "opacity": this.settings.opacity,
                "top":0
            })
            this.next.css({
                //top是最外层div的高度除以2
                "height": h,
                "width": w,
                "line-height": h + "px",
                "z-index": Math.ceil(this.size / 2)
            })
            this.prev.css({
                //top是最外层div的高度除以2
                "height": h,
                "width": w,
                "line-height": h + "px",
                "z-index": Math.ceil(this.size / 2)
            })
        }


    }


    //初始化
    Carrousel.init = function (carrousel) {
        var _this = this;
        carrousel.each(function () {
            new _this($(this));
        })
    }
    window["Carrousel"] = Carrousel;
})