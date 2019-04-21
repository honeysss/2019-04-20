$(function () {
	$('svg[data-src]').each(function (index, svg) {
		var src = $(svg).attr('data-src');
		
		// chrome不支持跨域访问 所以在这里搭建了一个本地服务器
		$.ajax({
			url: src,
			dataType: 'xml',
			success(svgDocument) {
				var $newSvg = $(svgDocument.documentElement);
				$newSvg.attr({
					width: $(svg).attr('width'),
					height: $(svg).attr('height'),
					fill: "#EFDDDD",
					stroke: "orange",
					"stroke-width": "6px"
				})
				$(svg).after(svgDocument.documentElement).remove();
			}
		})
	})
})