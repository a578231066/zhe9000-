$(function(){
	//手机号码验证
	function phone(){
		var str = $(".mobile").val();
		var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
		if(ret.test(str)){
	      //$(".mobile").siblings("span").html("√");  //输入正确后的显示
          $(".mobile").siblings("span").children().remove();
          $(".mobile").siblings("span").html(null);
          $(".mobile").siblings("span").append(" <img src='images/chengGong.png'/>");
	      $(".btnRed").removeAttr("disabled");  
	    }else if(str==""){
	      $(".mobile").siblings("span").html("手机号不能为空");
	      $(".btnRed").attr("disabled",true);  
	    }else{
	      $(".mobile").siblings("span").html("手机号格式有误");
	      $(".btnRed").attr("disabled",true);
	    }
    }
    //密码验证
    function passwordQ(){
    	var str2 = $(".passW").val();
    	if(str2.length>=8 && /(.[^a-zA-Z0-9])/.test(str2)){
    		$(".safety").children("span:lt(3)").addClass("one");
    	}else if(str2.length>6 && /(.[^a-z0-9])/.test(str2)){
    		$(".safety").children("span").removeClass("one");
    		$(".safety").children("span:lt(2)").addClass("one");
    	}else if(str2.length>=6){
    		$(".safety").children("span").removeClass("one");
    		$(".safety").children("span:lt(1)").addClass("one");

    		//$(".passW").siblings("span").html("√");  //输入正确后的显示
            $(".safety").siblings("span").html(null);
            $(".safety").siblings("span").append(" <img src='images/chengGong.png'/>"); 
    	}else if(str2.length<=6 && str2.length>=1){
    		$(".safety").children("span").removeClass("one");
    		$(".passW").siblings("span").html("设置密码太短，长度需在6-24位之间");
    	}else{
    		$(".safety").children("span").removeClass("one");
    		$(".passW").siblings("span").html("密码不能为空");
    	}
    }
    //密码提示和强度显示
    function pwS(){
    	$(".passW").siblings("span").show();
    	$(".passW").siblings(".safety").show();
    }
    //密码强度消失
    function pwSH(){
        $(".passW").siblings(".safety").hide();
    }
    //验证确认密码与密码是否相同
    function validate(){
    	var str2 = $(".passW").val(); 
    	var str3 = $(".rPassW").val();
    	if(str2==str3){
            $(".rPassW").siblings("span").html(null);
            $(".rPassW").siblings("span").append(" <img src='images/chengGong.png'/>"); 
    		//$(".rPassW").siblings("span").html("√");  //输入正确后的显示
            $(".btnRed").removeAttr("disabled"); 
    	}else{
    		$(".rPassW").siblings("span").html("两次密码输入不一致");
            $(".btnRed").attr("disabled",true);
    	}
    }
    //点击获取验证码
    $(".get").click(function(){
    	var i=60;
    	$(".get").css({"pointer-events":"none","color":"#bbb"});
    	var a=setInterval(function() {
	        $(".get").html(i+"秒后重新发送");
    		i--;
    		if(i==0){
    			$(".get").css({"pointer-events":"auto","color":"#666"});
    			clearInterval(a);
    			$(".get").html("获取验证码");
    		}
    	}, 1000);	
    });
    $(".rPassW").keyup(function(){
    	validate();
    });
    $(".mobile").keyup(function(){
        phone();
    });

    $(".passW").focus(function(){
    	pwS();
    });
    $(".passW").blur(function(){
        pwSH();
    });
    $(".btnRed").click(function(){
   		phone();
    });
    $(".mobile").blur(function(){
   		phone();
    });
    $(".passW").keyup(function(){
   		passwordQ();
    });
});