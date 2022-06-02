showTaskList();

$('.task_list').on('click','ul li',function(){
	$(this).addClass('on').siblings().removeClass('on');
	var leve=$(this).find('.delTask').attr('data-priority');
	$('.task_r ul li').removeClass('on');
	leveFn(leve);
});

var index=0;
function opentask(obj){
	if(obj=='addform'){
		clearTask('add');
		$('.addform button').attr('data-type','addform');
	}else{
		$('.addform button').attr('data-type','editform');
		$('.task_list ul li').click(function(){
			index=$(this).index();
			clearTask(index);
		});
	}
	$('.addform').css('display','flex');
}

function clearTask(index){
	let addtask=document.add_task;
	if(index=='add'){
		addtask.task.value='';
		addtask.dqr.value='';
		addtask.wcsj.value='';
		addtask.yjwc.value='';
		addtask.leve.value='';
	}else{
		let el=$('.task_list ul li').eq(index);
		addtask.task.value=el.find('.tit').html();
		addtask.dqr.value=el.find('.dqr').html();
		addtask.wcsj.value=el.find('.wcsj').html();
		addtask.yjwc.value=el.find('.yjwc').html();
		addtask.leve.value=el.find('.delTask').attr('data-priority');
	}
	
}

//add edit
function addtask(){
	var type=$('.addform button').attr('data-type');
	//add
	if(type=='addform'){
		let addtask=document.add_task;
		var task=addtask.task.value; //任务标题
		var dqr=addtask.dqr.value; //到期日
		var wcsj=addtask.wcsj.value; //完成时间
		var yjwc=addtask.yjwc.value; //预计完成
		var leve=addtask.leve.value; //任务等级
		
		var taskhtml=`
			<li>
				<div class="icon"></div>
				<div class="tit">${task}</div>
				<div class="yjwc pdd">${yjwc}</div>
				<div class="wcsj pdd">${wcsj}</div>
				<div class="dqr pdd">${dqr}</div>
				<div class="btn">
					<a class="editTask" href="javascript:;" onclick="opentask('editform')"><i class="iconfont icon-bianji"></i></a>
					<a class="delTask" href="javascript:;" data-priority="${leve}"><i class="iconfont icon-shanchu"></i></a>
				</div>
			</li>
		`;
		
		$('.task_list ul').append(taskhtml);
		showTaskList();
	//edit
	}else{
		let addtask=document.add_task;
		let el=$('.task_list ul li').eq(index);
		el.find('.tit').html(addtask.task.value);
		el.find('.dqr').html(addtask.dqr.value);
		el.find('.wcsj').html(addtask.wcsj.value);
		el.find('.yjwc').html(addtask.yjwc.value);
		el.find('.delTask').attr('data-priority',addtask.leve.value);
		leveFn(addtask.leve.value);
	}
	$('.addform').hide();
	return false;
}

$('.task_list').on('click','.delTask',function(event){
	$(this).parent().parent().remove();
	showTaskList();
	event.stopPropagation();
});

$('.closeTask').click(function(){
	$(this).parent().hide();
});

function leveFn(val){
	$('.task_r ul li').removeClass('on');
	if(val=='Low'){
		$('.task_r ul li').eq(3).addClass('on');
	}else if(val=='Medium'){
		$('.task_r ul li').eq(0).addClass('on');
	}else if(val=='High'){
		$('.task_r ul li').eq(1).addClass('on');
	}else{
		$('.task_r ul li').eq(2).addClass('on');
	}
}

function showTaskList(){
	if($('.task_list ul li').length > 0){
		$('.task_list').show();
		$('.task_empty').hide();
	}else{
		$('.task_list').hide();
		$('.task_empty').css('display','flex');
	}
}