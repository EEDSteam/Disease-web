/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-03 03:36:15
 * @version $Id$
 */
$(document).ready(function() {



    //----------------------------------------------- header-water---------------------------------------------
    $(function() {
    $('#demo-menu-lower-left').click(function(){
        $('#overlay').fadeIn(200,function(){
            $('#box').animate({'top':'100px'},200);
        });
        return false;
    });
    $('#boxclose').click(function(){
        $('#box').animate({'top':'-800px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });
 
	});
	var $first = true;
	$(".nav>li").click(function () {
		var $beClicked = $(this).children('.nav-container');
		$(this).children('a').css({
			'border-bottom': '2px dotted #A0522D'
		});
		if ($(".active-nav>#water").hasClass('water-circle')) {
			$(this).children('a').css({
				'border-bottom': '2px dotted #A0522D'
			});
			$('.active-nav>.water-circle')
				.animate({
				'bottom': '25px'
			},

			function () {
				back($beClicked);
				pour($beClicked);

			});
		}
		

	});
	if ($first == true) {
		$('.active-nav').siblings('a').css({
			'border-bottom': '2px dotted #A0522D'
		});
		$beClicked=$('.active-nav');
		pour($beClicked);
		$first = false;
	}
	function pour($beClicked) {
		$('.active-nav').animate({
			borderSpacing: 180
		}, {
			step: function (now, fx) {
				$($beClicked).css('-webkit-transform', 'rotate(' + now + 'deg)');
				$($beClicked).css('-moz-transform', 'rotate(' + now + 'deg)');
				$($beClicked).css('transform', 'rotate(' + now + 'deg)');
				$('.active-nav>.water').addClass('water-circle').removeClass('water')
					.delay(300)
					.animate({
					'bottom': '150px'
				});

			},
			duration: '1000'
		}, 'linear');
	}

	function back($beClicked) {
		$('.active-nav').delay(300).animate({
			borderSpacing: 0
		}, {
			step: function (now, fx) {

				$('.active-nav').css('-webkit-transform', 'rotate(' + now + 'deg)');
				$('.active-nav').css('-moz-transform', 'rotate(' + now + 'deg)');
				$('.active-nav').css('transform', 'rotate(' + now + 'deg)');
				$('.active-nav>.water-circle').addClass('water').removeClass('water-circle');

			},
			complete: function () {
				$('div.active-nav').siblings('a').css({
					'border-bottom': ''
				});
				$('div.active-nav').removeClass("active-nav");
				$($beClicked).addClass('active-nav');


			},
			duration: '1000'
		}, 'linear');
	}
	$('.nav>li').each(function () {
		var $len = $(this).children('a').text().length;
		var $dist = 80 - ($len / 2) / 2 * 10;
		$(this).children('a').css({
			'margin-left': $dist + 'px'
		});
	});

	if ($('.nav>li>.nav-container').hasClass('active-nav') == false) {
		$(this).hover(function () {
			$(this).siblings('a').css({
				'border-bottom': '2px dotted #A0522D'
			});
		}, function () {
			$(this).siblings('a').css({
				'border-bottom': 'none'
			});
		});
	}


    //----------------------------------------------Type--------------------------------------------------
    if (document.location.search.match(/type=embed/gi)) {
        window.parent.postMessage("resize", "*");
    }
    var active1 = 0;
    var active2 = 0;
    var active3 = 0;
    $('.mask2').on('mousedown touchstart', function() {

        var act1 = false;
        var act2 = false;
        var act3 = false;
        if (active1 == 0)
            $('.parent2').find('.test1').css({
                'background-color': 'gray',
                'transform': 'translate(0px,125px)'
            });

            $('.test1').on('mousedown touchstart', function() {
                if (!act1) {
                    $(this).find('.test1_1').css({
                        'background-color': 'gray',
                        'transform': 'translate(0px,125px)'
                    });
                    $('.test3').find(".testbutton").css({
                        'transform': 'none'
                    });
                    act3 = !act3;
                    $('.test2').find(".testbutton").css({
                        'transform': 'none'
                    });
                    act2 = !act2;
                } else
                    $(this).find('.test1_1').css({
                        'background-color': 'darkGray',
                        'transform': 'none'
                    });
                if (!act1)
                    $(this).find('.test1_2').css({
                        'background-color': 'gray',
                        'transform': 'translate(-60px,105px)'
                    });
                else
                    $(this).find('.test1_2').css({
                        'background-color': 'darkGray',
                        'transform': 'none'
                    });
                if (!act1)
                    $(this).find('.test1_3').css({
                        'background-color': 'gray',
                        'transform': 'translate(-105px,60px)'
                    });
                else
                    $(this).find('.test1_3').css({
                        'background-color': 'darkGray',
                        'transform': 'none'
                    });
                if (!act1)
                    $(this).find('.test1_4').css({
                        'background-color': 'gray',
                        'transform': 'translate(-125px,0px)'
                    });
                else
                    $(this).find('.test1_4').css({
                        'background-color': 'darkGray',
                        'transform': 'none'
                    });
                act1 = !act1;
            }); //下面第二層

        if (active1 == 1) {
            $('.parent2').find('.test1').css({
                'background-color': 'dimGray',
                'transform': 'none'
            });
            $('.test3').find(".testbutton").css({
                'transform': 'none'
            });
            act3 = !act3;
            $('.test2').find(".testbutton").css({
                'transform': 'none'
            });
            act2 = !act2;
        }

        if (active2 == 0)
            $('.parent2').find('.test2').css({
                'background-color': 'gray',
                'transform': 'translate(-80px,80px)'
            });

        $('.test2').on('mousedown touchstart', function() {
            if (!act2) {
                $(this).find('.test2_1').css({
                    'background-color': 'gray',
                    'transform': 'translate(25px,120px)'
                });
                $('.test3').find(".testbutton").css({
                    'transform': 'none'
                });
                act3 = !act3;
            } else
                $(this).find('.test2_1').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.test2_2').css({
                    'background-color': 'gray',
                    'transform': 'translate(-20px,95px)'
                });
            else
                $(this).find('.test2_2').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.test2_3').css({
                    'background-color': 'gray',
                    'transform': 'translate(-65px,65px)'
                });
            else
                $(this).find('.test2_3').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.test2_4').css({
                    'background-color': 'gray',
                    'transform': 'translate(-95px,20px)'
                });
            else
                $(this).find('.test2_4').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act2)
                $(this).find('.test2_5').css({
                    'background-color': 'gray',
                    'transform': 'translate(-120px,-25px)'
                });
            else
                $(this).find('.test2_5').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            act2 = !act2;
        }); //中間第二層
        if (active2 == 1)
            $('.parent2').find('.test2').css({
                'background-color': 'darkGray',
                'transform': 'none'
            });
        if (active3 == 0)
            $('.parent2').find('.test3').css({
                'background-color': 'gray',
                'transform': 'translate(-125px,0px)'
            });
        $('.test3').on('mousedown touchstart', function() {
            if (!act3) {
                $(this).find('.test3_1').css({
                    'background-color': 'gray',
                    'transform': 'translate(25px,125px)'
                });
                $('.test2').find(".testbutton").css({
                    'transform': 'none'
                });
                act2 = !act2;
            } else
                $(this).find('.test3_1').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.test3_2').css({
                    'background-color': 'gray',
                    'transform': 'translate(-20px,100px)'
                });
            else
                $(this).find('.test3_2').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.test3_3').css({
                    'background-color': 'gray',
                    'transform': 'translate(-65px,65px)'
                });
            else
                $(this).find('.test3_3').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.test3_4').css({
                    'background-color': 'gray',
                    'transform': 'translate(-95px,20px)'
                });
            else
                $(this).find('.test3_4').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.test3_5').css({
                    'background-color': 'gray',
                    'transform': 'translate(-120px,-25px)'
                });
            else
                $(this).find('.test3_5').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            if (!act3)
                $(this).find('.test3_6').css({
                    'background-color': 'gray',
                    'transform': 'translate(-180px,-25px)'
                });
            else
                $(this).find('.test3_6').css({
                    'background-color': 'darkGray',
                    'transform': 'none'
                });
            act3 = !act3;
        }); //上方第二層
        if (active3 == 1)
            $('.parent2').find('.test3').css({
                'background-color': 'silver',
                'transform': 'none'
            });

        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
    });


    // name----------------------------------------------------------------------------
    var d_Id=["疾病1","疾病2","疾病3","疾病4","疾病5","疾病6"];
/*
var d_ca_1=["天花,嚴重急性呼吸道症候群,鼠疫,狂犬病,更多",["登革熱","德國麻疹","霍亂","流行性斑疹傷寒","白喉","其他"],["腸病毒感染併發重症","結核病","人類免疫缺乏病毒感染","漢生病","百日咳","其他"],["流感併發重症","肉毒桿菌中毒","庫賈氏病","鉤端螺旋體病","萊姆病","其他"],["新型A型流感","中東呼吸症候群冠狀病毒感染症","黃熱病", "伊波拉病毒感染","拉薩熱","其他"],["棘狀阿米巴","茲卡病毒感染","福氏內格里阿米巴腦膜腦炎","貓抓病","NDM-1腸道菌感染症","更多"]];     
*/

    var d_category_1_1="天花,嚴重急性呼吸道症候群,鼠疫,狂犬病,更多";
    var d_category_1_2="登革熱,德國麻疹,霍亂,流行性斑疹傷寒,白喉,其他";
    var d_category_1_3="腸病毒感染併發重症,結核病,人類免疫缺乏病毒感染,漢生病,百日咳,更多";
    var d_category_1_4="流感併發重症,肉毒桿菌中毒,庫賈氏病,鉤端螺旋體病,萊姆病,更多";
    var d_category_1_5="新型A型流感,中東呼吸症候群冠狀病毒感染症,黃熱病,伊波拉病毒感染,拉薩熱,更多";
    var d_category_1_o="棘狀阿米巴,茲卡病毒感染,福氏內格里阿米巴腦膜腦炎,貓抓病,NDM-1腸道菌感染症,更多";

    var d_category_2_1="登革熱,屈公病,瘧疾,日本腦炎,鼠疫,更多";
    var d_category_2_2="腸病毒感染併發重症,腸道出血性大腸桿菌感染症,傷寒,副傷寒,沙門氏菌感染症,更多";
    var d_category_2_3="新型A型流感,水痘併發症,結核病,多重抗藥性結核病,流感,更多";
    var d_category_2_4="人類免疫缺乏病毒感染,梅毒,淋病,急性病毒性Ｂ型肝炎,急性病毒性Ｃ型肝炎,更多";
    var d_category_2_5="福氏內格里阿米巴腦膜腦炎,狂犬病,炭疽病,類鼻疽,鉤端螺旋體病,更多";


    var d_category_3="登革熱,流感,結核病,B型肝炎,肉毒桿菌中毒,更多";


    var d_show=0;
    var d0=$('.dd');
    var d1=$('#dd1');
    var d2=$('#dd2');
    var d3=$('#dd3');
    var d4=$('#dd4');
    var d5=$('#dd5');
    var d6=$('#dd6');
    var index=0;
    var r=30,n=5,a=66;
    var act=0; 
    d0.click(function(){
        var str="";
        act=!act;
        if(act==1){
            $(".testbutton").css({
                transform: 'none'     
            });
            $(".test3").css({
                transform: 'none'     
            });
            $(".test2").css({
                transform: 'none'     
            });
            $(".test1").css({
                transform: 'none'     
            });

        }

        if($(this).data("l")=="1"){
            if($(this).data("c")=="1")
                var str=d_category_1_1.split(",");
            if($(this).data("c")=="2")
                var str=d_category_1_2.split(",");
            if($(this).data("c")=="3")
                var str=d_category_1_3.split(",");
            if($(this).data("c")=="4")
                var str=d_category_1_4.split(",");
            if($(this).data("c")=="5")
                var str=d_category_1_5.split(",");
            if($(this).data("c")=="o")
                var str=d_category_1_o.split(",");
        }
        if($(this).data("l")=="2"){
            if($(this).data("c")=="1")
                var str=d_category_2_1.split(",");
            if($(this).data("c")=="2")
                var str=d_category_2_2.split(",");
            if($(this).data("c")=="3")
                var str=d_category_2_3.split(",");
            if($(this).data("c")=="4")
                var str=d_category_2_4.split(",");
            if($(this).data("c")=="5")
                var str=d_category_2_5.split(",");
            if($(this).data("c")=="o")
                var str=d_category_2_o.split(",");
        }
        if($(this).data("l")=="3"){
            var str=d_category_3.split(",");
        }
        for(var j=0;j<=5;j++)
            d_Id[j]=str[j];  
 //   var  test=d_ca_1[$(this).data("c")];
   // var str=test.split(",");
//d_Id[0]=d_ca_1[$(this).data("c")];
//    alert(d_ca_1[$(this).data("c")]);
//d_Id[1]=str[1]; 

        if(d_show==0){
     
            for(var ii=1;ii<=6;ii++){
                $('#dd'+ii).delay(ii*100).show('100');
                $('#t'+ii).delay(ii*100).show('100');
            }
        d_show=1;
        }
        else{        
            for(var ii=1;ii<=6;ii++){
                $('#dd'+ii).delay(ii*100).hide('100');
                $('#t'+ii).delay(ii*100).hide('100');
            }
            d_show=0;
        }
        showId();
    })

    for(var i=1;i<=6;i++){
        $('#dd'+i).click(function(){
            var tmp=d_Id[0];
            d_Id[0]=d_Id[$(this).data("l")-1];
            d_Id[$(this).data("l")-1]=tmp;
            showId();
            d1.css({
            'background-color':'red'
            });
        });
        $('#dd'+i).mouseout(function(){
            // $(this).animate({
            //     top:'+=15px',
            //     right:'+=15px',
            //     height:'-=30px',
            //     width:'-=30px',
            // });
            $(this).css({
                'line-height':'50px'
                ,'background-color':'dimGray'
            });
    
        });    
        $('#dd'+i).mouseover(function(){
            // $(this).animate({
            //     top:'-=15px',
            //     right:'-=15px',
            //     height:'+=30px',
            //     width:'+=30px',
            // });
            $(this).css({
                'line-height':'50px'
                , 'background-color':'red'
            });
        })     
    }

    function showId(){
        for(var i=1;i<=6;i++)
            $('#t'+i).text(d_Id[(i-1)]);
    }



    //-----------------------------------------------slide-----------------------------------------------
    // slidebutton.addEventListener("click", changeslide, false);
    width = $(window).width();
    $(".textactive").find("i").css("display", "none");
    $(".textactive").find("span").fadeIn("500");

    $(".slidebutton").click(function() {
        // $(this).css({"background-color":"yellow","font-size":"200%"});
        var movetoright = $(this).css('margin-left');
        // var url= "http://res.freestockphotos.biz/pictures/8/8453-a-blue-sky-with-white-clouds-pv.jpg"
        $(".cr-li-slide").animate({
            marginLeft: movetoright
        });
        var lastchoose = $(".textactive");
        lastchoose.removeClass("textactive");
        lastchoose.find("span").fadeOut("500");
        lastchoose.find("i").delay("500").fadeIn("fast");
        $(this).addClass("textactive");
        //$(".cr-bgslide2").removeClass("eachslidescale");
        //  $(".cr-bgslide3").removeClass("eachslidescale");
        //  $(".cr-bgslide4").removeClass("eachslidescale");
        //  $(".cr-bgslide5").removeClass("eachslidescale");
        // movetoright=  parseInt(movetoright, 10);
        // var number = ((movetoright/width)+0.01)/0.2;
        // alert(number);
        // if(number <1){
        //  $(".cr-bgslide2").removeClass("eachslidescale");
        //  $(".cr-bgslide3").removeClass("eachslidescale");
        //  $(".cr-bgslide4").removeClass("eachslidescale");
        //  $(".cr-bgslide5").removeClass("eachslidescale");
        //  $(".cr-bgslide1").addClass("eachslidescale");
        //  $(".cr-bgslide").toggleClass("slidescale");
        //  // $( ".cr-bgslide:nth-child(1)" ).css("background-image","url(http://res.freestockphotos.biz/pictures/8/8453-a-blue-sky-with-white-clouds-pv.jpg);");
        // }
        // else if(number>1&&number<2){
        //  $(".cr-bgslide1").removeClass("eachslidescale");
        //  $(".cr-bgslide3").removeClass("eachslidescale");
        //  $(".cr-bgslide4").removeClass("eachslidescale");
        //  $(".cr-bgslide5").removeClass("eachslidescale");
        //  $(".cr-bgslide2").addClass("eachslidescale");
        //  $(".cr-bgslide").toggleClass("slidescale");
        //  // $( ".cr-bgslide:nth-child(1)" ).css("background-image","url(http://img10.deviantart.net/c760/i/2012/164/b/1/sky_stock_1_by_lindalees-d53e4b4.png);");
        // }
        // else if(number>2&&number<3){
        //  $(".cr-bgslide2").removeClass("eachslidescale");
        //  $(".cr-bgslide1").removeClass("eachslidescale");
        //  $(".cr-bgslide4").removeClass("eachslidescale");
        //  $(".cr-bgslide5").removeClass("eachslidescale");
        //  $(".cr-bgslide3").addClass("eachslidescale");
        //  $(".cr-bgslide").toggleClass("slidescale");
        //  // $( ".cr-bgslide:nth-child(1)" ).css("background-image","url(http://res.freestockphotos.biz/pictures/8/8453-a-blue-sky-with-white-clouds-pv.jpg);");
        // }
        // else if(number>3&&number<4){
        //  $(".cr-bgslide2").removeClass("eachslidescale");
        //  $(".cr-bgslide3").removeClass("eachslidescale");
        //  $(".cr-bgslide1").removeClass("eachslidescale");
        //  $(".cr-bgslide5").removeClass("eachslidescale");
        //  $(".cr-bgslide4").addClass("eachslidescale");
        //  $(".cr-bgslide").toggleClass("slidescale");
        //  // $( ".cr-bgslide:nth-child(1)" ).css("background-image","url(http://img10.deviantart.net/51bc/i/2010/213/a/b/sky_stock_by_allendra3.jpg);");
        // }
        // else if(number>4&&number<5){
        //  $(".cr-bgslide2").removeClass("eachslidescale");
        //  $(".cr-bgslide3").removeClass("eachslidescale");
        //  $(".cr-bgslide4").removeClass("eachslidescale");
        //  $(".cr-bgslide1").removeClass("eachslidescale");
        //  $(".cr-bgslide5").addClass("eachslidescale");
        //  $(".cr-bgslide").toggleClass("slidescale");
        //  // $( ".cr-bgslide:nth-child(1)" ).css("background-image","url(http://pre13.deviantart.net/433e/th/pre/f/2013/105/9/f/cloudy_sky_stock_by_naturalhorses-d61stqm.jpg);");
        // }

        // var box = document.querySelector('.box');
        // box.addEventListener('click', function() {
        //  box.classList.toggle('move');
        // });
    });

    $(".slidebutton").mouseover(function() {
        $(this).find("i").css("display", "none");
        $(this).find("span").fadeIn("500");
    });
    $(".slidebutton").mouseleave(function() {
        if ($(this).hasClass("textactive")) {} else {
            $(this).find("span").fadeOut("500");
            $(this).find("i").delay("500").fadeIn("fast");
        }
    });




});
