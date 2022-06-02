$('.menuClose').click(function(){
	$('.menu').css('display','none');
	$('.ifram').css('paddingLeft','40px');
	$('.playobj').css('left','0px');
	$('.showmen').css('display','flex');
});

$('.showmen').click(function(){
	$(this).hide();
	$('.ifram').css('paddingLeft','270px');
	$('.playobj').css('left','0px');
	$('.menu').show();
});