var url = '../img/rabbit-big.png';
var ele = document.getElementById("rabbit");
var index = 0;
var positions = ['0 -854', '-174 -852', '-349 -852', '-698 -852', '-873 -848'];
var l = positions.length;
var flag = 1;
animation(url, ele, positions, l);

function animation(url, ele, positions, l) {
	ele.style.backgroundImage = 'url(' + url + ')';
	function run() {
		var position = positions[index].split(' ');
		ele.style.backgroundRepeat = 'no-repeat';
		ele.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
		var left = Number((ele.style.left).replace('px', ''));
		// 如果标志是向前并且距离小于500  向前
		if (left < 500 && flag === 1) {
			ele.style.left = (left + 10) + 'px';
		// 如果距离大于500 将标志设为向后
		} else {
			flag = 0;
		}

		// 如果标志是向后并且距离大于10 向后
		if (flag === 0 && left >= 10) {
			ele.style.left = (left - 10) + 'px';
		// 如果距离小于10  将标志设置为向前
		} else {
			flag = 1;
		}
		index++;
		if (index >= l) {
			index = 0;
		}
		setTimeout(run, 80);
	}
	run();
}