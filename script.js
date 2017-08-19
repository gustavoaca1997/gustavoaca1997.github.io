$(document).ready(function() {
	$("#skills img").addClass("img-responsive");
	$("#skills li").attr({
		"data-toggle" : "tooltip",
		"data-placement" : "top"
	});
	$('[data-toggle="tooltip"]').tooltip();
	$("#portfolio a").attr("target", "_blank");
	// Pestañas del portfolio
	$("#portfolio .myBtn").click(function(){
		$(this).find("span").toggleClass("glyphicon-eye-open");
		$(this).find("span").toggleClass("glyphicon-eye-close");
		$(this).find("img").toggle();
	});
});