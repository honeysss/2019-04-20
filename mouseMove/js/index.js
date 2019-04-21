// 自执行的匿名函数
(function () {
	var Mousemove = function () {
		this.init();
	}

	Mousemove.prototype = {
		// 初始化方法
		init() {
			var _this = this;
			// 鼠标悬浮
			var len = this.getClass('gif').length;
			var container = _this.getClass('container');
			var conLen = _this.getClass('container').length;
			for (let i = 0; i < conLen; i ++) {
				// 每一个class都要有这种效果
				// var classname = this.getClass('gif', container[i])[0];
				// var jpg = _this.getClass('jpg', container[i])[0];
				this.getClass('gif', container[i])[0].onmouseover = function () {
					_this.mouseOver(_this.getClass('jpg', container[i])[0], 1);
					_this.getClass('gif', container[i])[0].style.display = 'none';
				}
				_this.getClass('jpg', container[i])[0].onmouseout = function () {
					_this.mouseOut(_this.getClass('jpg', container[i])[0], 0, _this.getClass('gif', container[i])[0]);
				}
			}
		},

		// 获得class元素
		getClass(className, parentEl) {
			// 如果支持这种方法 就使用这种方法从document或传过来的父元素中找到这个className
			if (document.getElementsByClassName) {
				return (parentEl || document).getElementsByClassName(className);
			} else {
				// 否则 先获得所有的标签
				var tags = (parentEl || document).getElementsByTagName('*');
				// 定义一个class数组
				var classes = [];
				// 循环标签
				for (var i = 0; i < tags.length; i ++) {
					if (tags[i].className === className) {
						classes.push(tags[i]);
					}
				}
				return classes;
			}
		},

		// 悬浮
		mouseOver(el, opacity) {
			clearInterval(el.timer);
			// 鼠标悬浮在上面的时候让图片的层级变为5
			el.style.display = 'block';
			var alpha = Number(el.style.opacity);
			el.time = setInterval(function () {
				if(el.style.opacity < opacity) {
					alpha += Number(0.05);
					el.style.opacity = alpha;
				} else {
					el.style.opacity = opacity;
					clearInterval(el.time);
				}
			},100)
		},
		mouseOut(el, opacity, el2) {
			clearInterval(el.time);
			var alpha = Number(el.style.opacity);
			el.timer = setInterval(function () {
				if(el.style.opacity > opacity) {
					alpha -= Number(0.05);
					el.style.opacity = alpha;
				} else {
					el.style.opacity = opacity;
					el.style.display = 'none';
					clearInterval(el.timer);
					el2.style.display = 'block';
				}
			},100)
		}
	}

	// 挂载到全局
	// window.Mousemove = Mousemove;
	// 实例化对象 !!要这样实例化对象 不能直接调用
	// 直接调用的话this的指向是window 实例化之后this的指向是Mousemove
	new Mousemove();

}());