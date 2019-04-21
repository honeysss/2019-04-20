$(function() {
	var lis = $('li');
	var ps = $('p');
	var index = 1;
	ps.eq(index).css('color', 'red');
	ps.each(function() {
		$(this).mouseover(function() {
			clearInterval(timer);
			var peq = $(this).attr('class');
			index = peq;
			lis.each(function() {
				li();
			})
			ps.each(function() {
				p();
			})
		})
		
		$(this).mouseover(function() {
			changeIndex();
			timer = setInterval(function() {
				changeIndex();
			}, 2000)
		})
	})
	
	var timer = setInterval(function() {
		changeIndex();
	}, 2000)
	
	
	function changeIndex() {
		lis.each(function() {
			li();
		})
		ps.each(function() {
			p();
		})
		index++;
		if (index >= lis.length) {
			index = 0;
		}
	}
	
	function li() {
		lis.eq(index).css('display', 'block');
		lis.eq(index).siblings('li').css('display', 'none');
	}
	function p() {
		ps.eq(Number(index) + 1).css('color', 'red');
		ps.eq(Number(index) + 1).siblings('p').css('color', 'white');
	}
})