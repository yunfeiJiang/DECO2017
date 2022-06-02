$(function(){
	var oul = $('.lunbo ul');
	var oulHtml = oul.html();
	oul.html(oulHtml+oulHtml)
	var timeId = null;

	var ali = $('.lunbo ul li');
	var aliWidth = ali.eq(0).width();
	var aliSize = ali.length;
	var ulWidth = aliWidth*aliSize;
	oul.width(ulWidth);
	
	var speed = -2;
	function slider(){
		if(speed < 0){
			if(oul.css('left')==-ulWidth/2+'px'){
				oul.css('left',0);
		 	}
		 	oul.css('left','+=-2px');
		}

		if(speed > 0){
			if(oul.css('left')=='0px'){
				oul.css('left',-ulWidth/2+'px');
		 	}
		 	oul.css('left','+='+speed+'px');
		}
	 }

	timeId = setInterval(slider,30);
	$('.lunbo').mouseover(function(){
		clearInterval(timeId);
	});

	$('.lunbo').mouseout(function(){
		timeId = setInterval(slider,30);
	});
});

$('.music .list ul li i').click(function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
	}else{
		$(this).addClass('on');
	}
});

var audio=null;
var index=null;
var mp=null;
var len=$('.music .list ul li').length - 1;

$('.music').on('click','.lunbo ul li',function(){
	let url=$(this).attr('data-src');
	mp=$(this).find('h2').html();
	Hmlt5Audio(url);
	showMp();
});

$('.music .list ul li').click(function(){
	let url=$(this).attr('data-src');
	mp=$(this).find('p').html();
	index=$(this).index();
	Hmlt5Audio(url);
	showMp();
});

$('.play i').click(function(){
	if(audio==null){
		let url=$('.music .list ul li:eq(0)').attr('data-src');
		mp=$('.music .list ul li .tit p').html();
		Hmlt5Audio(url);
	}else if(audio.paused){
		audio.play();	
	}else{
		audio.pause();
	}
	showMp();
});

$('.playprev').click(function(){
	index--;
	if(index < 0){
		index=len;
	}
	mp=$('.music .list ul li:eq('+index+') p').html();
	let url=$('.music .list ul li:eq('+index+')').attr('data-src');
	Hmlt5Audio(url);
	showMp();
});

$('.playnext').click(function(){
	index++;
	if(index > len){
		index=0;
	}
	mp=$('.music .list ul li:eq('+index+') p').html();
	let url=$('.music .list ul li:eq('+index+')').attr('data-src');
	Hmlt5Audio(url);
	showMp();
});

function Hmlt5Audio(url) {
	if(!audio){
		audio = new Audio();
	}
	audio.src=url;
	audio.id="audio";
	audio.autoplay = true;
	audio.loop = true;
	audio.play();
}

function showMp(){
	if(audio.paused){
		$('.playobj .playmp').hide();
		$('.playobj .play i').removeClass('icon-zanting').addClass('icon-bofang');
	}else{
		$('.playobj .playmp').show();
		$('.playobj .play i').removeClass('icon-bofang').addClass('icon-zanting');
		$('.playobj .playmp span').html(mp);
	}
}
