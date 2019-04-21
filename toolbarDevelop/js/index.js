// 用config方法为要引入的js设置别名
requirejs.config({
	paths: {
		jquery: 'jquery.min'
	}
});

// 第一个参数是一个数组，里面放需要引入的文件，多少都可以
// 回调函数里的参数代表所引入的js
requirejs(['jquery', 'backTop'], function($, backTop) {

	// new backTop.BackTop($('.toolbar-four'),{
	// 	mode: 'go',
	// 	speed: 200
	// })

	$('.toolbar-four').backTop({
		mode: 'move'
	})

})