var a1 = [1, 2, 3, 4, 5, 6];
var a2 = [2, 1, 6];
// var c = a1.concat(a2).sort();
// for ( var i = 0; i < c.length; i ++) {
// 	if (c[i] == c[i+1]) {
// 		c.splice(c.indexOf(c[i]), 2);
// 		i = i - 1;
// 	}
// }
// console.log(c)

for (var i = 0; i < a1.length; i ++) {
	if (a2.indexOf(a1[i]) != -1) {
		a1.splice(a1.indexOf(a1[i]), 1);
		i = i - 1;
	}
}
console.log(a1);