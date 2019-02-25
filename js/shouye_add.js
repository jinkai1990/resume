/****************************************/
/***********页面各种效果集合***************/
/****************************************/

$(function(){
	//刷新页面，第一屏效果
	/*右侧导航效果*/
	// $("#fr_nav").css("display","none");
	// $("#fr_down").css("display","block");
	
	//help_link_title1 400
	$('.section1').find('.help_link_title1').delay(300).animate({
		top: '0'
	}, 1200, 'easeOutExpo');
	$('.section1').find('.help_link_line').delay(100).animate({
		top: '32'
	}, 800, 'easeOutExpo');
	$('.section1').find('.heip_link_title2').delay(500).animate({
		bottom: '0'
	}, 1500, 'easeOutExpo');
	//help_link1
	$('.section1').find('.help_link1').delay(300).animate({
		left: '0'
	}, 1500, 'easeOutExpo');
	$('.section1').find('.help_link2').delay(300).animate({
		left: '222'
	}, 1500, 'easeOutExpo');
	$('.section1').find('.help_link3').delay(300).animate({
		left: '445'
	}, 1500, 'easeOutExpo');
	$('.section1').find('.help_link4').delay(300).animate({
		left: '668'
	}, 1500, 'easeOutExpo');
	$('.section1').find('.help_link5').delay(300).animate({
		left: '890'
	}, 1500, 'easeOutExpo');
	
	//每屏切换效果
	$('#dowebok').fullpage({
		afterLoad: function(anchorLink, index){
            $('.tab_ul li img').eq(index-1).addClass('active').parent().siblings().children('img').removeClass('active')
            $('.tab_ul li p').eq(index-1).addClass('active').parent().siblings().children('p').removeClass('active')
			var sindex = 0;
			//第一屏：进入回调
            console.log('load'+index);
			if(index == 1){
				$("#fr_nav").css("display","block");
				// $("#fr_down").css("display","block");
				//浮点导航	
				sindex = $("#dowebok>.section").index($(".active"));
				
				//help_link_title1 400   help_link_line 400   heip_link_title2 374
				$('.section1').find('.help_link_title1').delay(300).animate({
					top: '0'
				}, 1200, 'easeOutExpo');
				$('.section1').find('.help_link_line').delay(100).animate({
					top: '32'
				}, 800, 'easeOutExpo');
				$('.section1').find('.heip_link_title2').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
				//help_link1 0 
				$('.section1').find('.help_link1').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.help_link2').delay(500).animate({
					left: '222'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.help_link3').delay(500).animate({
					left: '445'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.help_link4').delay(500).animate({
					left: '668'
				}, 1500, 'easeOutExpo');
				$('.section1').find('.help_link5').delay(500).animate({
					left: '890'
				}, 1500, 'easeOutExpo');
			}

			//第二屏：进入回调
			if(index == 2){
				$('.section2').find('.skillsWord').delay(100).animate({
					left: '0'
				}, 800, 'easeOutExpo');
                $('.section2').find('#skills').delay(200).animate({
                    top: '0'
                }, 800, 'easeOutExpo');

			}
			//第三屏：进入回调
			if(index == 3){

                $('.section3').find('.list-time-one').delay(100).animate({
                    left: '0'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-one').delay(100).animate({
                    right: '0'
                }, 500, 'easeOutExpo');

                $('.section3').find('.list-time-two').delay(300).animate({
                    left: '0'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-two').delay(300).animate({
                    right: '0'
                }, 500, 'easeOutExpo');

                $('.section3').find('.list-time-three').delay(500).animate({
                    left: '0'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-three').delay(500).animate({
                    right: '0'
                }, 500, 'easeOutExpo');

                $('.section3').find('.list-time-four').delay(700).animate({
                    left: '0'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-four').delay(700).animate({
                    right: '0'
                }, 500, 'easeOutExpo');
			}
			//第四屏：进入回调
			if(index == 4){

			$('.service_tab .service_type').on('click',function () {
				var index = $(this).index()
				$(this).addClass('active').siblings().removeClass('active')
				$('.service_content').eq(index).addClass('active').siblings().removeClass('active')
            })
				
                $('.section4').find('.move-top').delay(100).animate({
					top: '0'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-top-two').delay(200).animate({
					top: '0'
                }, 800, 'easeOutExpo');
                $('.section4').find('.move-right').delay(300).animate({
                    right: '0'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-right-two').delay(400).animate({
                    right: '0'
                }, 800, 'easeOutExpo');
                $('.section4').find('.move-left').delay(500).animate({
                    left: '0'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-left-two').delay(600).animate({
                    left: '0'
                }, 800, 'easeOutExpo');
                $('.section4').find('.move-bottom').delay(700).animate({
                    bottom: '0'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-bottom-two').delay(800).animate({
                    bottom: '0'
                }, 800, 'easeOutExpo');



			}
			//第五屏：进入回调
			if(index == 5){

				$('.section5').find('.news-title-font').delay(100).animate({
					left: '0'
				}, 800, 'easeOutExpo');
				$('.section5').find('.interact_tit').delay(900).animate({
					top: '0'
				}, 1200, 'easeOutExpo');
				$('.section5').find('.interact_b p').delay(900).animate({
					bottom: '0'
				}, 800, 'easeOutExpo');
				$('.section5').find('.left_line').delay(1700).animate({
					left: '-182px'
				}, 800, 'easeOutExpo');
				$('.section5').find('.right_line').delay(1700).animate({
					right: '-182px'
				}, 800, 'easeOutExpo');
				
				$('.section5').find('.interact_yidong').delay(1700).animate({
					left: '0px'
				}, 1500, 'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
            $('.tab_ul li img').eq(index -1).addClass('active').parent().siblings().children('img').removeClass('active')
            $('.tab_ul li p').eq(index -1).addClass('active').parent().siblings().children('p').removeClass('active')
			//第一屏：离开回调
            console.log('leave'+index);
            if(index == 1){//help_link_title1 400
				$("#fr_nav").css("display","block");
				// $("#fr_down").css("display","none");
				$('.section1').find('.help_link_title1').delay(300).animate({
					top: '-37'
				}, 1200, 'easeOutExpo');
				$('.section1').find('.help_link_line').delay(500).animate({
					top: '-7'
				}, 800, 'easeOutExpo');
				$('.section1').find('.heip_link_title2').delay(100).animate({
					bottom: '-31'
				}, 1500, 'easeOutExpo');
				//help_link1 0 
				$('.section1').find('.help_link1').delay(100).animate({
					left: '425'
				}, 500, 'easeOutExpo');
				$('.section1').find('.help_link2').delay(100).animate({
					left: '425'
				}, 500, 'easeOutExpo');
				$('.section1').find('.help_link3').delay(100).animate({
					left: '425'
				}, 500, 'easeOutExpo');
				$('.section1').find('.help_link4').delay(100).animate({
					left: '425'
				}, 500, 'easeOutExpo');
				$('.section1').find('.help_link5').delay(100).animate({
					left: '425'
				}, 500, 'easeOutExpo');
			}

			//第二屏：离开回调
			if(index == 2){
                $('.section2').find('.skillsWord').delay(100).animate({
                    left: '-300px'
                }, 800, 'easeOutExpo');
                $('.section2').find('#skills').delay(200).animate({
                    top: '-620px'
                }, 800, 'easeOutExpo');
			}
			//第三屏：离开回调
			if(index == '3'){
                $('.section3').find('.list-time-one').delay(100).animate({
                    left: '-158px'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-one').delay(100).animate({
                    right: '-801px'
                }, 500, 'easeOutExpo');

                $('.section3').find('.list-time-two').delay(300).animate({
                    left: '-158px'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-two').delay(300).animate({
                    right: '-801px'
                }, 500, 'easeOutExpo');

                $('.section3').find('.list-time-three').delay(500).animate({
                    left: '-158px'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-three').delay(500).animate({
                    right: '-801px'
                }, 500, 'easeOutExpo');

                $('.section3').find('.list-time-four').delay(700).animate({
                    left: '-158px'
                }, 500, 'easeOutExpo');
                $('.section3').find('.list-content-four').delay(700).animate({
                    right: '-801px'
                }, 500, 'easeOutExpo');
				
			}
			//第四屏：离开回调
			if(index == '4'){
                $('.section4').find('.move-top').delay(100).animate({
                    top: '-320px'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-top-two').delay(200).animate({
                    top: '-320px'
                }, 800, 'easeOutExpo');
                $('.section4').find('.move-right').delay(300).animate({
                    right: '-537px'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-right-two').delay(400).animate({
                    right: '-257px'
                }, 800, 'easeOutExpo');
                $('.section4').find('.move-left').delay(500).animate({
                    left: '-257px'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-left-two').delay(600).animate({
                    left: '-537px'
                }, 800, 'easeOutExpo');
                $('.section4').find('.move-bottom').delay(700).animate({
                    bottom: '-305px'
                }, 800, 'easeOutExpo');

                $('.section4').find('.move-bottom-two').delay(800).animate({
                    bottom: '-305px'
                }, 800, 'easeOutExpo');
				

				
			}
			//第五屏：离开回调
			if(index == '5'){
				$('.section5').find('.news-title-font').delay(300).animate({
					left: '-999'
				}, 1200, 'easeOutExpo');
				$('.section5').find('.interact_tit').delay(300).animate({
					top: '35px'
				}, 800, 'easeOutExpo');
				$('.section5').find('.interact_b p').delay(300).animate({
					bottom: '21px'
				}, 800, 'easeOutExpo');
				
				$('.section5').find('.left_line').animate({
					left: '0'
				});
				$('.section5').find('.right_line').animate({
					right: '0'
				});
				$('.section5').find('.interact_yidong').animate({
					left: '-152px'
				});
			}
		}
	});
});



/*  每屏自适应高度，及高度提示弹出层  */
$(document).ready(function(){
	var win_h = $(window).height();	
	$(".section4_bg").height(win_h);
	
	var section1_addh = (win_h-580)/3;
	var section2_addh = (win_h-570)/4;
	var section3_addh = (win_h-587)/4;
	var section4_addh = (win_h-556)/4;
	var section5_addh = (win_h-590)/4;
	var section6_addh = (win_h-566)/4;
	
	if(win_h>620 && win_h<660){	
		$.fn.fullpage.setAutoScrolling(true);	
		$(".section1_h1").height(section1_addh);
		$(".section1_h2").height(section1_addh);
		$(".section1_h3").height(section1_addh);
		
		$(".section2_h1").height(section2_addh);
		//$(".section2_h2").height(section2_addh);
		$(".section2_h2").css({'margin-top': '6%','height':section2_addh});
		$(".section2_h3").height(section2_addh);
		$(".section2_h4").height(section2_addh);
		
		$(".section3_h1").height(section3_addh);
		$(".section3_h2").height(section3_addh);
		$(".section3_h3").height(section3_addh);
		
		$(".section4_h1").height(section4_addh);
		$(".section4_h2").height(section4_addh);
		$(".section4_h3").height(section4_addh);
		$(".section4_h4").height(section4_addh);
		
		$(".section5_h1").height(section5_addh);
		$(".section5_h2").height(section5_addh);
		$(".section5_h3").height(section5_addh);
		
		$(".section6_h1").height(section6_addh);
		$(".section6_h2").height(section6_addh);
		$(".section6_h3").height(section6_addh);
		$(".section6_h4").height(section6_addh);
	}
	else if(win_h<=620){
		
		$(".layer_h").delay(500).fadeIn(1500);
		$(".section4_bg").css("height","660px");
		$.fn.fullpage.setAutoScrolling(true);		
		
		$(".section1_h1").height(30);
		$(".section1_h2").height(30);
		$(".section1_h3").height(20);
		
		$(".section2_h1").height(30);
		$(".section2_h2").height(20);
		$(".section2_h3").height(20);
		$(".section2_h4").height(20);
		
		$(".section3_h1").height(30);
		$(".section3_h2").height(20);
		$(".section3_h3").height(23);
		
		$(".section4_h1").height(30);
		$(".section4_h2").height(20);
		$(".section4_h3").height(30);
		$(".section4_h4").height(26);
		
		$(".section5_h1").height(30);
		$(".section5_h2").height(20);
		$(".section5_h3").height(20);
		
		$(".section6_h1").height(30);
		$(".section6_h2").height(20);
		$(".section6_h3").height(20);
		$(".section6_h4").height(24);
	}
	else if(win_h>=860){
		$.fn.fullpage.setAutoScrolling(true);
		
		$(".news-title-font").width('50%');
		$(".news-title-font2").css({
			'margin-bottom': '35px',
		    'margin-left': '-25%',
		    'width': '50%'
		});
		//
		// $(".carousel h4").css({
		//     'font-size': '1.2rem'
		// });
		$(".c-detail").css({
		    'font-size': '1rem'
		});
		// $("#trailer-tu").css({
		//     'height': '393px'
		// });
		// $(".notice-list .bidL").height(424);
		// $(".notice-list .bidL p").css({
		//     'font-size': '1rem'
		// });
		
		$(".info_list").css('margin-top', '16%');
		$(".info_gk").height(40);
		$(".info_gk_t").css({
		    'width': '50%'
		});
		$(".info_gk_b").css({
		    'width': '60%'
		});
		
		$(".info_intrdu").css('margin-top', '0');
		$(".interact_intrdu").css('margin-top', '0');
		
		
		$(".section1_h1").height(130);
//		$(".section1_h2").height(30);
//		$(".section1_h3").height(20);
		
		$(".section2_h1").height(130);
//		$(".section2_h2").height(20);
//		$(".section2_h3").height(20);
//		$(".section2_h4").height(20);
		
		$(".section3_h1").height(130);
//		$(".section3_h2").height(20);
//		$(".section3_h3").height(23);
		
		$(".section4_h1").height(130);
//		$(".section4_h2").height(20);
//		$(".section4_h3").height(30);
//		$(".section4_h4").height(26);
		
		$(".section5_h1").height(130);
//		$(".section5_h2").height(20);
//		$(".section5_h3").height(20);
		
		$(".section6_h1").height(130);
//		$(".section6_h2").height(20);
//		$(".section6_h3").height(20);
//		$(".section6_h4").height(24);
	}
	else {
		$.fn.fullpage.setAutoScrolling(true);
	}
	$(".layer_close").click(function(){
		$(".layer_h").stop().fadeOut(100);
	});
});
















