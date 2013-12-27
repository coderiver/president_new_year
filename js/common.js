$(document).ready(function() {
	$(".js-counter").countdown({
		until: new Date(2013, 12-1, 31, 23, 55),
		compact: true,
		format: 'HMS'
	});
});