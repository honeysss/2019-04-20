

/*$(function(){
	var t=parseFloat($(".ke").css("animation-duration"));
	setTimeout(function(){
		document.getElementsByClassName("div1")[0].innerHTML="傻";
		$(".div1").removeClass("ke").addClass("sha");
	},(t+1.5)*1000);
	var t=parseFloat($(".ai").css("animation-duration"));
	setTimeout(function(){
		document.getElementsByClassName("div2")[0].innerHTML="比";
		$(".div2").removeClass("ai").addClass("bi");
	},(t+1.5)*1000);
	var t=parseFloat($(".xiao").css("animation-duration"));
	setTimeout(function(){
		document.getElementsByClassName("div3")[0].innerHTML="小";
		$(".div3").removeClass("xiao").addClass("xiao1");
	},(t+1.5)*1000);
});

$(function(){
	setTimeout(function(){
		$(".container_1").animate({left:'-100%'},3000);
		$(".container_2").animate({left:'0px'},3000);
	},1000);
	setTimeout(function(){
		$(".container_2").animate({left:'-100%'},3000);
		$(".container_3").animate({left:'0%'},3000);
	},3000);
});
	var intvalue=0;
	var inttime;
	var objpro=document.getElementsByClassName("pro");
	var objtip=document.getElementsByClassName("top_content");
	function time_count(){
		intvalue++;
		objpro.value=intvalue;
		if(intvalue>=objpro.max){
			clearInterval(inttime);
			objtip.innerHTML="下载完毕！";
		}else{
			objtip.innerHTML="正在下载"+intvalue+"%";
		}
	}
	function btn(){
		inttime=setInterval("time_count()",1000);
	}


$(function(){
	var a=document.getElementById("can");
	var ctx=a.getContext('2d');
	var gra=ctx.createLinearGradient(0,0,300,0);
	gra.addColorStop("0","#cc3");
	gra.addColorStop("1","#9ff");
	ctx.fillStyle=gra;
	ctx.fillRect("10","10","300","300")
})
$(function(){
	var a=document.getElementById("can");
	var ctx=a.getContext('2d');
	var ragra=ctx.createRadialGradient(100,100,10,200,200,200);
	ragra.addColorStop("0","white");
	ragra.addColorStop("1","red");
	ctx.fillStyle=ragra;
	ctx.fillRect(0,0,300,300);
})*/










