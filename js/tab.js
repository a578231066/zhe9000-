$(function(){
	$("#main .hotBrand .brandName li").mouseenter(function(){
		var $t = $(this).index();
		$(this).children("a").addClass("red").parent("li").siblings().children("a").removeClass();
		$("#main .hotBrand .brandImages li").eq($t).addClass("show").siblings().removeClass();
	});
});