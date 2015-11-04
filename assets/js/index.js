/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-03 03:36:15
 * @version $Id$
 */
$(document).ready(function() {



    //----------------------------------------------- header-water---------------------------------------------
    var $first = true;
    $(".nav>li").click(function() {
        var $beClicked = $(this).children('.container');
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
                    function() {
                        back($beClicked);
                        pour($beClicked);

                    });
        }
        if ($first == true) {
            $($beClicked).addClass('active-nav');
            pour($beClicked);
            $first = false;
        }

    });

    function pour($beClicked) {
        $('.active-nav').animate({
            borderSpacing: 180
        }, {
            step: function(now, fx) {
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
            step: function(now, fx) {

                $('.active-nav').css('-webkit-transform', 'rotate(' + now + 'deg)');
                $('.active-nav').css('-moz-transform', 'rotate(' + now + 'deg)');
                $('.active-nav').css('transform', 'rotate(' + now + 'deg)');
                $('.active-nav>.water-circle').addClass('water').removeClass('water-circle');

            },
            complete: function() {
                $('div.active-nav').siblings('a').css({
                    'border-bottom': ''
                });
                $('div.active-nav').removeClass("active-nav");
                $($beClicked).addClass('active-nav');


            },
            duration: '1000'
        }, 'linear');
    }
    $('.nav>li').each(function() {
        var $len = $(this).children('a').text().length;
        var $dist = 80 - ($len / 2) / 2 * 10;
        $(this).children('a').css({
            'margin-left': $dist + 'px'
        });
    });

    if ($('.nav>li>.container').hasClass('active-nav') == false) {
        $(this).hover(function() {
            $(this).siblings('a').css({
                'border-bottom': '2px dotted #A0522D'
            });
        }, function() {
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
