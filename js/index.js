// JavaScript Document
 $(document).ready(function(){
	  /*  导航条特效   */
	  $(".heade_nav").fadeOut(0);//页面一打开，导航条隐藏
	  $("#fade2").fadeOut(0);
      $("#fade1").click(function(){
		  $("#fade1").hide();
          $(".heade_nav").fadeIn(1000);
		  $("#fade2").css("background-color","#CCC");
		  $("#fade2").show();
        });
	  
	  $("#fade2").click(function(){
		  $("#fade2").hide();
          $(".heade_nav").fadeOut(1000);
		  $("#fade1").css("background-color","#666");
		  $("#fade1").show();
	    });
		
	 /*Follow 特效*/
	 $(".follow_li_img").hover(function(){
		 $(this).css("background","rgba(14,63,103,0.5)");
		 $(this).css("border","none");
		 $(this).css("transition","0.5s all");
		 $(this).css("border-radius","50%");
     },function(){
        $(this).css("background","rgba(255, 255, 255, 0.18)");
	    $(this).css("border","solid 2px #FFFFFF");
	    $(this).css("border-radius","0");

     });
     $("#follow_li_img1").click(function () {
     	alert("电话：18476612664");
     });
     $("#follow_li_img2").click(function () {
         alert("微信：18476612664");
     });
     $("#follow_li_img3").click(function () {
         alert("邮箱：1024599697@qq.com");
     });
     /*SKILLS特效*/

     function refreshSwatch(){
         var red=$(".red").slider("value");
         var green=$(".green").slider("value");
         var blue=$(".blue").slider("value");
         var black=$(".black").slider("value");
         var gray=$(".gray").slider("value");
         $("#red").val(red);
         $("#green").val(green);
         $("#blue").val(blue);
         $("#black").val(black);
         $("#gray").val(gray);
     }

     $(".red, .blue, .green, .black, .gray").slider({
         orientation:     "horizontal",
         range:           "min",
         max:             100,
         value:           0,
		 animate:         1300,
         slide:           refreshSwatch,
         change:          refreshSwatch

     });
     $(".red").slider("value",90);
     $(".blue").slider("value",87);
     $(".green").slider("value",85);
     $(".black").slider("value",84);
     $(".gray").slider("value",80);

     /*学习科目*/
     $('.subject li').hover(function(){
         $('span',this).stop().animate({'top':'-42px'});
     },function(){
         $('span',this).stop().animate({'top':'0px'});
     });

     /*项目经验*/
     $('#solutions li').click(function(){
         $('#solutions .solutit2').stop().animate({
             height:'0'
         },600);
         $(this).find('.solutit2').stop().animate({
             height:'300'

         },600);
     });

     /*项目图片*/
     var _index7=0;
     $(".flash4 ul li").mouseover(function(){
         _index7=$(this).index();
         $(this).stop().stop().animate({width:538},500).siblings("li").stop().animate({width:106},500);
         $(".imgCen").eq(_index7).css("display","block").siblings(".imgCen").css("display","none");
         $("p.bt_2").eq(_index7).css("display","block").siblings("p.bt_2").css("display","none");
         $(".imgTop img").eq(_index7).addClass("tm").siblings(".imgTop img").removeClass("tm");
     });
     $(".flash4 ul li").mouseout(function(){
         $(".imgCen").css("display","none");
         $("p.bt_2").css("display","none");
     });

 });