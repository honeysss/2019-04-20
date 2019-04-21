window.onload = function () {
	// 谷歌浏览器不支持跨域
	// 在火狐浏览器下可以得到结果
	var vm = new Vue({
		el: "#test",
		methods: {
			get: function () {
				this.$http.get('test.txt').then(function (res) {
					document.write(res.body);
				},function () {
					document.write('请求失败');
				})
			}
		}
	})
}