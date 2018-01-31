$(function(){
	/*为空形参验证*/
	function user(q){
		var User=$(q).val();
		if(User==""){
			$(q).siblings("span").show();
			$(".btnRed").attr("disabled",true); 
		}else{
			$(q).siblings("span").hide();
			$(".btnRed").removeAttr("disabled"); 

		}
	}
	$('.user').on('blur keyup', function() {
        user(".user");
        saoM();
    });

    $('.passW').on('blur keyup', function() {
        user(".passW");
        var User=$(".passW").val();
        if(User.length<6 && User.length>=1){
        	$(this).siblings("span").html("长度不足6位").show();
        	$(".btnRed").attr("disabled",true); 
        	saoM();
        }else if(User.length<1){
        	$(this).siblings("span").html("密码不能为空").show();
        	$(".btnRed").attr("disabled",true); 
        	saoM();
        }else{ 
        	$(this).siblings("span").html("6-24位，字母、数字、符号，区分大小写").hide();
        	$(".btnRed").removeAttr("disabled");
        	saoM(); 
        }
    });
    $('.txt').on('blur keyup', function() {
        user(".txt");
        saoM();
    });
	$(".btnRed").click(function(){
		user(".user");
		user(".passW");
		user(".txt");
		saoM();
	});
	function saoM(){
		var User=$(".passW").val();
		if(User.length>0 && User.length<6){
			$(".btnRed").attr("disabled",true);
		}
	}
});