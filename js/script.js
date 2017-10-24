$(document).ready(function(){
	$(".contactLink li").eq(0).css("background-color","#00ABE3")
	$(".contactLink li").eq(1).css("background-color","#004088")
	$(".contactLink li").eq(2).css("background-color","#01669C")
	$(".contactLink li").eq(3).css("background-color","#CA2128")
	$(".contactLink li").eq(4).css("background-color","#FF5B22")

	$(".contactLink li").hover(function(){
		$(this).css({
			borderRadius: "20px",
			transition: "all 1s ease"
		})
	}, function(){
		$(".contactLink li").css({
			borderRadius:"0",
			transition: "all 1s ease"
		})
	})

	$(".dropDownMenuFeatures").hide();
	$(".menuDropFeatures").hover(function(){
		$(".dropDownMenuFeatures").fadeIn();
	}, function(){
		$(".dropDownMenuFeatures").fadeOut();
	});

	$(".dropDownMenuEnter").hide();
	$(".menuDropEnter").hover(function(){
		$(".dropDownMenuEnter").fadeIn();
	}, function(){
		$(".dropDownMenuEnter").fadeOut();
	});
})


