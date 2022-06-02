$('.times .tabnav ul li').click(function(){
	var index=$(this).index();
	$(this).addClass('on').siblings().removeClass('on');
	$('.times .tabbox .item').eq(index).addClass('on').siblings().removeClass('on');
})

var min=0;
var sec=0;
var ms=0;
var timer=null;

$('.time_01 .start').click(function(){
	if($(this).html()=='Start'){
		$(this).html('Stop');
		clearInterval(timer);
		timer=setInterval(showTimeOne,10);
	}else{
		$(this).html('Start');
		clearInterval(timer);
	}
});

$('.time_01 .reset').click(function(){
	reset();
});

function showTimeOne(){
	ms++;
	if(sec==60){
		min++;sec=0;
	}
	if(ms==100){
		sec++;ms=0;
	}
	var msStr=ms;
	if(ms<10){
		msStr="0"+ms;
	}
	var secStr=sec;
	if(sec < 10){
		secStr="0"+sec;
	}
	var minStr=min;
	if(min < 10){
		minStr="0"+min;
	}
	$('.time_01 .timer span:eq(0)').html(minStr);
	$('.time_01 .timer span:eq(2)').html(secStr);
	$('.time_01 .timer span:eq(4)').html(msStr);
}

function reset(){
	clearInterval(timer);
	$('.time_01 .start').html('Start');
	min=0; sec=0; ms=0;
	$('.time_01 .timer span:eq(0)').html('00');
	$('.time_01 .timer span:eq(2)').html('00');
	$('.time_01 .timer span:eq(4)').html('00');
}




var mintwo=24;
var sectwo=59;
var mstwo=100;
var timertwo=null;
var counttwo=0;
$('.time_02 .start').click(function(){
	if($(this).html()=='Start'){
		$(this).html('Stop');
		clearInterval(timertwo);
		timertwo=setInterval(showTimeTwo,10);
	}else{
		$(this).html('Start');
		clearInterval(timertwo);
	}
});

$('.time_02 .reset').click(function(){
	resettwo();
});

function showTimeTwo(){
	if(mstwo==0){
		sectwo-=1;
		mstwo=100;
	 }
	 mstwo-=1;
	 
	var sectwoStr=sectwo;
	if(sectwo==60){
		sectwoStr='00';
	}
	if(sectwo == 0){
		sectwo=60;
		mintwo-=1;	
	}
	
	var mintwoStr=mintwo;
	var mstwoStr=mstwo;
	if(mintwo < 10){
		mintwoStr='0'+mintwoStr
	}

	if(sectwo < 10){
		sectwoStr='0'+sectwoStr
	}
	
	if(mstwo < 10){
		mstwoStr='0'+mstwoStr
	}
	
	if(mintwo < 10){
		mintwoStr='0'+mintwo
	}
	
	if(mintwo < 0){
		mintwo=24;
		sectwo=59;
		mstwo=100;
		counttwo+=1;
		if(counttwo==4){
			$('.list .u1').hide();
		}
		$('.list .u1 li:lt('+counttwo+') i').css('color','#d6697a');
		$('.list .u2 li:lt('+counttwo+') i').css('color','#d6697a');
	}
	
	$('.time_02 .timer span:eq(0)').html(mintwoStr);
	$('.time_02 .timer span:eq(2)').html(sectwoStr);
	$('.time_02 .timer span:eq(4)').html(mstwoStr);
}

function resettwo(){
	clearInterval(timertwo);
	mintwo=24;
	sectwo=59;
	mstwo=100;
	timertwo=null;
	counttwo=0;

	$('.time_02 .start').html('Start');

	$('.time_02 .timer span:eq(0)').html('25');
	$('.time_02 .timer span:eq(2)').html('00');
	$('.time_02 .timer span:eq(4)').html('00');
}

