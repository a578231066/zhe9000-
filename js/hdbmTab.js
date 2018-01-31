/*活动报名界面的tab选项卡效果*/
$(function(){
	$(".Two").click(function(){
		$(this).removeClass("oHide").addClass("oShow").siblings(".One").removeClass("oShow").addClass("oHide");
		$(".One span").css("background-position","-190px 0px");
		$(".Two span").css("background-position","-190px -222px");
		$(".mainTwo").show().siblings().hide();
	});
	$(".Two").mouseenter(function(){
		$(".Two span").css("background-position","-190px -222px");
	});
	$(".Two").mouseleave(function(){
		$(".Two span").css("background-position","-190px -111px");
	});
	$(".One").mouseenter(function(){
		$(this).removeClass("oHide").addClass("oShow").siblings(".Two").removeClass("oShow").addClass("oHide");
		$(".One span").css("background-position","0px -274px");
		$(".Two span").css("background-position","-190px -111px");
		$(".mainOne").show().siblings().hide();

		
	});
});