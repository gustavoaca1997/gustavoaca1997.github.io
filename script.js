$(document).ready(function() {
	$("#skills img").addClass("img-responsive");
	$("#skills li").attr({
		"data-toggle" : "tooltip",
		"data-placement" : "top"
	});
	$('[data-toggle="tooltip"]').tooltip();
});