requirejs.config({
	paths: {
		jquery: 'jquery.min'
	}
});

requirejs(['jquery', 'stars', 'canvas'], function ($, stars, canvas) {
	new stars.Star();
	new canvas.Canvas();
})