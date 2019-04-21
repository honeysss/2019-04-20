$(document).ready(function () {

    var defaults = {
        total: 5,
        num: 3,
        readOnly: false
    }

    var Rating = function (el) {
        var self = this;
        this.el = $(el);
        this.opts = $.extend(defaults, $.parseJSON((this.el).attr("data-settings")));
        this.width = 50;

        //星星总个数
        this.totalStar();

        //    css
        this.defaultLight(this.opts.num);

        //    绑定事件
        this.bindEvents();


    }

    Rating.prototype = {
        //    默认点亮颗数
        defaultLight: function (num) {
            $(".mask").css("width", this.width * num);
        },

        //    星星总个数
        totalStar: function () {
            this.el.width(this.opts.total * this.width);
        },

        //    绑定事件
        bindEvents: function () {
            var self = this,
                num = 0;
            self.el.on("mousemove", function (e) {
                num = (e.pageX - self.el.offset().left) / self.width;
                self.defaultLight(num);
            }).on("click", function (e) {
                num = (e.pageX - self.el.offset().left) / self.width;
                self.opts.num = num;
                self.offEvent();
            }).on("mouseleave", function (e) {
                self.defaultLight(self.opts.num);
            })
        },

    //    解除事件
        offEvent : function () {
            this.el.off();
        }

    }

    Rating.init = function (el) {
        var self = this;
        el.each(function () {
            new self($(this));
        })
    }

    window['Rating'] = Rating;

})


