$(document).ready(function(){

	console.log("jquery has got it going on");

	var height = $(window).height();
		var width = $(window).width();

		$(".demensions").html( width + " X " + height );

	$(window).resize(function(){
		var height = $(window).height();
		var width = $(window).width();

		$(".demensions").html( width + " X " + height );

	});
	

});