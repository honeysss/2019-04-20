/*document.onreadystatechange=function(){
	if(document.readyState=="complete"){
		$(".loading").fadeOut();
	};
};*/

/*document.onreadystatechange=function(){
	if(document.readyState=="complete"){
		$(".progress_content").animate({width:"100%"},function(){
			$(".progress").fadeOut();
		});
	};
};*/

/*$(function(){
	var img=$("img");
	var num=0;
	img.each(function(i){
		var objimg=new Image();
		objimg.onload=function(){
			objimg.onload=null;
			num++;
			$(".loading_content p").html(parseInt(num/$("img").size()*100)+"%");
			if(num>=i){
				$(".loading").fadeOut();
			};
		};
		objimg.src=img[i].src;
	});
});*/
function playmusic(){
	document.getElementsByClassName("audio_1")[0].play();
}



$(function(){
	var img=$("img");
	var num=0;
	img.each(function(i){
		var oimg=new Image();
		oimg.onload=function(){
			num++;
			oimg.onload=null;
			$(".loading_content p").html(parseInt(num/$("img").size()*100)+"%");
			if(num>=i){
				$(".loading").fadeOut();
			};
		};
		oimg.src=img[i].src;
	});
});





$(document).ready(function(){
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		if(top>=1240){
			$("#back_go").text("回顶部");
			$("#back_go").attr("href","#back");
			$("#back_goo").attr("href","#back");
			$(".float_nav").css("top","100px");
		}
		if(top>0 && top<1240){
			$(".float_nav").css("top","280px");
		}
		if(top==0){
			$("#back_go").text("去底部");
			$("#back_go").attr("href","#go");
			$("#back_goo").attr("href","#go");
			$(".float_nav").css("top","280px");
		}
		if(top>=150){
			$(".header_nav").css({"display":"block","z-index":"2"});
		}
		if(top<150){
			$(".header_nav").css("display","none");
		}
	});
	$(".kuai").mouseover(function(){
        $(".kuai span").css("color","#F08080");
	});
	$(".kuai").mouseleave(function(){
		$(".kuai span").css("color","white");
	});
	$(".kuai").click(function(){
		 $(".public").slideToggle();
		 $("body").click(function(){
			if(".public".display=="block"){
			$(".public").slideUp();
		}
		});
	});
	$(".erweimadisplay1").mouseover(function(){
		$(".erweima1").css("z-index","1");
	});
	$(".erweimadisplay1").mouseleave(function(){
		$(".erweima1").css("z-index","-1");
	});
	$(".erweimadisplay2").mouseover(function(){
		$(".erweima2").css("z-index","1");
	});
	$(".erweimadisplay2").mouseleave(function(){
		$(".erweima2").css("z-index","-1");
	});
	$(".erweimadisplay3").mouseover(function(){
		$(".erweima3").css("z-index","1");
	});
	$(".erweimadisplay3").mouseleave(function(){
		$(".erweima3").css("z-index","-1");
	});
	$(".erweimadisplay4").mouseover(function(){
		$(".erweima4").css("z-index","1");
	});
	$(".erweimadisplay4").mouseleave(function(){
		$(".erweima4").css("z-index","-1");
	});
	$(".erweimadisplay5").mouseover(function(){
		$(".erweima5").css("z-index","1");
	});
	$(".erweimadisplay5").mouseleave(function(){
		$(".erweima5").css("z-index","-1");
	});
	$(".erweimadisplay6").mouseover(function(){
		$(".erweima6").css("z-index","1");
	});
	$(".erweimadisplay6").mouseleave(function(){
		$(".erweima6").css("z-index","-1");
	});
	$(".erweimadisplay7").mouseover(function(){
		$(".erweima7").css("z-index","1");
	});
	$(".erweimadisplay7").mouseleave(function(){
		$(".erweima7").css("z-index","-1");
	});
	$(".erweimadisplay8").mouseover(function(){
		$(".erweima8").css("z-index","1");
	});
	$(".erweimadisplay8").mouseleave(function(){
		$(".erweima8").css("z-index","-1");
	});
	$(".erweimadisplay9").mouseover(function(){
		$(".erweima9").css("z-index","1");
	});
	$(".erweimadisplay9").mouseleave(function(){
		$(".erweima9").css("z-index","-1");
	});
	$(".erweimadisplay10").mouseover(function(){
		$(".erweima10").css("z-index","1");
	});
	$(".erweimadisplay10").mouseleave(function(){
		$(".erweima10").css("z-index","-1");
	});
	$(".erweimadisplay11").mouseover(function(){
		$(".erweima11").css("z-index","1");
	});
	$(".erweimadisplay11").mouseleave(function(){
		$(".erweima11").css("z-index","-1");
	});
	$(".erweimadisplay12").mouseover(function(){
		$(".erweima12").css("z-index","1");
	});
	$(".erweimadisplay12").mouseleave(function(){
		$(".erweima12").css("z-index","-1");
	});
	$(".disad").click(function(){
		$(".jingdong").css("display","none");
	});
	$(".chageskin").click(function(){
		$(".change_list").slideToggle(1000);
		$(".change_list_0").slideDown(1000);
		$(".modify").css("background-color","white");
		$(".modify").find(".huan").css("color","black");
		$(".modify").click(function(){
			$(".modify").css("background-color","#0B5EA5");
			$(".modify").find(".huan").css("color","white");
		});
	});
	$(".change_list_bot_cancle").click(function(){
		$(".change_list").slideToggle(1000);
	});
	$(".turnright").click(function(){
		$(".change_list_top_1").animate({left:'-1009px'},1000);
		$(".change_list_top_2").animate({left:'0'},1000);
		$(".turnright").addClass("active");
		$(".turnleft").removeClass("active");
	});
	$(".turnleft").click(function(){
		$(".change_list_top_1").animate({left:'46px'},1000);
		$(".turnleft").addClass("active");
		$(".turnright").removeClass("active");
		$(".change_list_top_2").animate({left:'1059px'},1000);
	});
//	$(".Game").mouseover(function(){
//		$(".gamerank").css("display","block");
//		$(".bookrank").css("display","none");
//		$(".novelrank").css("display","none");
//		$(".youxi").addClass("active");
//		$(".tushu").removeClass("active");
//		$(".ruanjian").removeClass("active");
//	});
	$(".th_nav ul li a").mouseover(function(){
		$("this").siblings("a").removeClass("active");
		$("this").addClass("active");
	})
//	$(".Novel").mouseover(function(){
//		$(".novelrank").css("display","block");
//		$(".bookrank").css("display","none");
//		$(".gamerank").css("display","none");
//		$(".ruanjian").addClass("active");
//		$(".tushu").removeClass("active");
//		$(".youxi").removeClass("active");
//	});
//	$(".Book").mouseover(function(){
//		$(".bookrank").css("display","block");
//		$(".gamerank").css("display","none");
//		$(".novelrank").css("display","none");
//		$(".tushu").addClass("active");
//		$(".youxi").removeClass("active");
//		$(".ruanjian").removeClass("active");
//	});
	$(".visit").click(function(){
		$(".visit").toggleClass("white");
		$(".deng2").toggleClass("black1");
	});
	$(".set").click(function(){
		$(".set").toggleClass("white");
		$(".deng1").toggleClass("black1");
	});
	$(".a_two").mouseover(function(){
		$(".a_one").removeClass("active1");
		$(".a_two").addClass("active1");
		$(".img_box_2").css("display","block");
		$(".img_box_1").css("display","none");
	});
	$(".a_one").mouseover(function(){
		$(".a_two").removeClass("active1");
		$(".a_one").addClass("active1");
		$(".img_box_1").css("display","block");
		$(".img_box_2").css("display","none");
	});
});


//$(function(){
//	setInterval(function(){
//		var a=$("#xm_content_1").position().top, //0
//			b=$("#xm_content_2").position().top, //79
//			xm1=$("#xm_content_1"),
//			xm2=$("#xm_content_2");
//			
//		if(a===0 && b===79){
//			xm1.animate({top:"-79"},1000); //a=-79
//			xm2.animate({top:"0"},1000,function(){  //b=0
//				xm1.css("top","79"); //a=79 b=0
//			});  
//		}else{
//			xm1.animate({top:"0"},1000);  //a=0
//			xm2.animate({top:"-79"},1000,function(){  //b=-79
//				xm2.css("top","79"); //a=0 b=79
//			}); 
//		}
//	},3000);
//});



$(function(){
	var xm_ul=$(".xm_ul");
	setInterval(function(){
			xm_ul.animate({top:"-79px"},1000,function(){
				var li=$(".xm_ul").find("li")[0];
				xm_ul.append(li);
				xm_ul.css("top","0");
			})
	},3000);
})











