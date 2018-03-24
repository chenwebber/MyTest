	var snowMinSize = 5;
	var snomMaxSize = 50;
	var snowColor = "#fff";
	var snowSpeed = 150;
	var $snow = $("<div></div>").css({"position":"absolute", "top":"-50px"}).html('❄');
	
$(function(){
	var dHeight = $(document).height();
	var dWidth = $(document).width();
	setInterval(function(){
		var startPositionLeft = Math.random()*dWidth-100;
		var startCapicity = 0.7+Math.random();
		var startSize = Math.random()*(snomMaxSize-snowMinSize)+snowMinSize;
		var endPostionTop = dHeight-80;

		var endPostionLeft = startPositionLeft+Math.random()*150;
		if (endPostionLeft > dWidth-startSize){
			endPostionLeft = dWidth-startSize;
		}
		var duration = dHeight*10+Math.random()*3000;
		$snow.clone().appendTo('body').css({
			"left":startPositionLeft,
			"opacity":startCapicity,
			"font-size":startSize,
			"color":snowColor
		}).animate({
			"top":endPostionTop,
			"left":endPostionLeft,
			"opacity":0.5
		},duration,function(){
			$(this).remove();
		});
	},snowSpeed);
		
	
	$(".ig").eq(0).show().siblings().hide();
	
	var index = 0;
	setInterval(function(){
		index++;
		if (index==6){
			index = 0;
		}
		$(".ig").eq(index).show().siblings().hide();
	},2000);
})