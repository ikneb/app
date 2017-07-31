var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
var click = false;
var render = false;
var firstMousWell = true;
var windWidth = document.documentElement.clientWidth; 
var windHeigth = document.documentElement.clientHeight;
var stop = false;
var isAnim = true;
var swichOfAnimate = false;
var speed = 5;
var animateLineWork = 0;
var is_move = false;


function fly() {
    setTimeout(function () {
                $('.line-aus').addClass('path-aus');
                $('.houston-flex .composition').addClass('show-composition');
            }, 800);
            setTimeout(function () {
                $('.line-isr').addClass('path-isr');
                $('.isr-flex .composition').addClass('show-composition');
            }, 1000);
            setTimeout(function () {
                $('.line-bzr').addClass('path-bzr');
                $('.brz-flex .composition').addClass('show-composition');
            }, 1200);
            setTimeout(function () {
                 $('.line-usa').addClass('path-usa');
                $('.aus-flex .composition').addClass('show-composition');
                
            }, 1400);
            setTimeout(function () {
                $('.usa-flex .composition').addClass('show-composition');
            }, 1600);
}


function cloudFly (){
     setTimeout(function () {
                    $(".flex-cloud").attr('id','flex-cloud');
                    $(".we-specilise").attr('id','we-specilise');
                }, 600);
}

function aboutUsFly (){
            if (windWidth > 769 ) {
                $(".header-flex-about").stop().animate({ top: "178px" }, 2000);
            }
            setTimeout(function () {
                    $(".header-flex-about").attr('id','about-us-fly-text');
                    $(".about-img").addClass('about-us-fly-img');
                }, 900);
}


$(function(){
        function updateAnchors() {
            anchors = [];
            $('.anchor').each(function(i, element){
                anchors.push( $(element).offset().top );
            });
        }

        var cells = document.getElementById('is-home');
        if (cells) {
            document.addEventListener('mousewheel', function(e) {
                e.preventDefault();
                e.stopPropagation();

                if ('ontouchstart' in document.documentElement) {
                    /**/
                }

                if (currentAnchor == 3 && animateLineWork < 14)
                {
                    if (come('.flex-slider')) {
                        switch(animateLineWork) {
                            case 1:
                                $('.line-work-wrap:nth-child(1)').addClass('show-how-work');
                                setTimeout(function () {
                                    $('.how-img:nth-child(2)').addClass('show-how-work-icon');
                                }, 200);
                                break;
                            case 4:
                                $('.line-work-wrap:nth-child(3)').addClass('show-how-work');
                                setTimeout(function () {
                                     $('.how-img:nth-child(4)').addClass('show-how-work-icon');
                                }, 200);
                                break;
                            case 7:
                                $('.line-work-wrap:nth-child(5)').addClass('show-how-work');
                                setTimeout(function () {
                                    $('.how-img:nth-child(6)').addClass('show-how-work-icon');
                                }, 200);
                                break;
                            case 10:
                                $('.line-work-wrap:nth-child(7)').addClass('show-how-work');
                                setTimeout(function () {
                                    $('.how-img:nth-child(8)').addClass('show-how-work-icon');
                                }, 200);
                                break;
                            case 13:
                                $('.line-work-wrap:nth-child(9)').addClass('show-how-work');
                                break;
                        }
                        animateLineWork++;
                    }
                    if(animateLineWork < 14) return;
                    
                }

                if( isAnimating) {

                    return false;
                }
                isAnimating  = true;
                // console.log(e.wheelDelta);
                // Increase or reset current anchor
                if( e.wheelDelta >= 0 ) {
                    currentAnchor--;
                }else{
                    currentAnchor++;
                }
                
                if( currentAnchor > (anchors.length - 1) 
                   || currentAnchor < 0 ) {
                    currentAnchor = 0;
                }
                isAnimating  = true;
                if( anchors[currentAnchor] > 600) {
                    fly();
                }
                 if (parseInt(anchors[currentAnchor]) > 1200) {
                       cloudFly();
                }
                    render = true;
                if (firstMousWell) {
                       $('html, body').animate({
                        scrollTop: parseInt(615)
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                    });
                       firstMousWell = false;
                       fly();
                        currentAnchor++;
                } else {
                    $('html, body').animate({
                        scrollTop: parseInt( anchors[currentAnchor] )
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                    });
                }
            });

            document.addEventListener('touchstart', function(e) {
                console.log(e);
            });
        }
    

    $('body').on('touchmove', function(e){
        e.preventDefault();
        e.stopPropagation();
        var cells = document.getElementById('is-home');
        if (cells) {
            fly();
            cloudFly();
        }
    });
    updateAnchors(); 
});

function come(elem) {
  var docViewTop = $(window).scrollTop() + $(window).height();
  
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top + 100;
  if (parseInt(docViewTop) > parseInt(elemTop)) {
    return true;
  }
  return false;
}


$(function() {
    var cells = document.getElementById('is-about-us');
        if (cells) {
    var canvas = $('#canvasElement');
    canvas.attr('width', windWidth).attr('height', windHeigth);
    var context = canvas.get(0).getContext('2d');
    var canvasWidth = canvas.width();
    var canvasHeight = canvas.height();
    var canvasItem = canvasWidth/10;


    var x1 = 0, x2 = canvasItem, x3 = canvasWidth -(canvasWidth - x2) + canvasItem , x4 = canvasWidth -(canvasWidth - x3) + canvasItem, x5 =canvasWidth -(canvasWidth - x4) + canvasItem, x6 = canvasWidth -(canvasWidth - x5) + canvasItem, x7 = canvasWidth -(canvasWidth - x6) + canvasItem, x8 = canvasWidth -(canvasWidth - x7) + canvasItem, x9 = canvasWidth -(canvasWidth - x8) + canvasItem , x10 = canvasWidth -(canvasWidth - x9) + canvasItem;
    var y1 = canvasHeight - canvasItem, y2 = canvasHeight - canvasItem, y3 = canvasHeight - canvasItem, y4 = canvasHeight - canvasItem, y5 = canvasHeight - canvasItem, y6 = canvasHeight - canvasItem, y7 = canvasHeight - canvasItem, y8 = canvasHeight - canvasItem, y9 = canvasHeight - canvasItem, y10 = canvasHeight - canvasItem ;
    
    var x11 = 0, x12 = canvasItem, x13 = canvasWidth -(canvasWidth - x12) + canvasItem, x14 = canvasWidth -(canvasWidth - x13) + canvasItem, x15 =canvasWidth -(canvasWidth - x14) + canvasItem, x16 = canvasWidth -(canvasWidth - x15) + canvasItem, x17 = canvasWidth -(canvasWidth - x16) + canvasItem, x18 = canvasWidth -(canvasWidth - x17) + canvasItem, x19 = canvasWidth -(canvasWidth - x18) + canvasItem , x20 = canvasWidth -(canvasWidth - x19) + canvasItem;
    var y11 = canvasHeight - canvasItem * 2, y12 = -canvasItem , y13 = -canvasItem, y14 = canvasHeight - canvasItem * 2, y15 = -canvasItem, y16 = -canvasItem, y17 = canvasHeight - canvasItem * 2, y18 = -canvasItem, y19 = canvasHeight - canvasItem * 2, y20 = canvasHeight - canvasItem * 2 ;
        
    var x21 = 0, x22 = canvasWidth -(canvasWidth - x8) + canvasItem, x23 = canvasWidth -(canvasWidth - x9) + canvasItem;
    var y21 = -canvasItem, y22 = -canvasItem, y23 = -canvasItem;

    var y12w = y12 - canvasItem;
    var y13w = y13 - canvasItem;
    var y15w = y15 - canvasItem;
    var y16w = y16 - canvasItem;
    var y18w = y18 - canvasItem;
    var y21w = y21 - canvasItem;
    var y22w = y22 - canvasItem;
    var y23w = y23 - canvasItem;

    var color1 = "#09606a";
    var color2 = "#00c2e9";
    var color3 = "#b4d8f4";
    var color4 = "#a9e8f9";
    var color5 = "#6abfc9";
    var widthItems = canvasItem;
    var heightItems = canvasItem;

    function chekPixels(y, stop) {
        if (
            parseInt(y) == parseInt(stop) - 1 
            || parseInt(y) == parseInt(stop) - 2 
            || parseInt(y) == parseInt(stop) - 3 
            || parseInt(y) == parseInt(stop) - 4 
            || parseInt(y) == parseInt(stop) - 4
            || parseInt(y) == parseInt(stop) - 5
            || parseInt(y) == parseInt(stop) - 4
            || parseInt(y) == parseInt(stop) + 5
            || parseInt(y) == parseInt(stop) + 4
            || parseInt(y) == parseInt(stop) + 3
            || parseInt(y) == parseInt(stop) + 2
            || parseInt(y) == parseInt(stop) + 1
            || parseInt(y) == parseInt(stop)) {
            return true;
        } else {
            return false;
        }
    }

    function moveBox1() {
        context.fillStyle = color1;
        context.fillRect(x1, y1, widthItems, heightItems);
    }

    function moveBox2() {
        // draw 
        context.fillStyle = color2;
        context.fillRect(x2, y2, widthItems, heightItems);
    }

    function moveBox3() {
        // draw 
        context.fillStyle = color3;
        context.fillRect(x3, y3, widthItems, heightItems);
    }

    function moveBox4() {
        // draw 
        context.fillStyle = color2;
        context.fillRect(x4, y4, widthItems, heightItems);
    }

    function moveBox5() {
        // draw 
        context.fillStyle = color1;
        context.fillRect(x5, y5, widthItems, heightItems);
    }

    function moveBox6() {
        // draw 
        context.fillStyle = color3;
        context.fillRect(x6, y6, widthItems, heightItems);
    }

    function moveBox7() {
        // draw 
        context.fillStyle = color1;
        context.fillRect(x7, y7, widthItems, heightItems);
    }

    function moveBox8() {
        // draw 
        context.fillStyle = color4;
        context.fillRect(x8, y8, widthItems, heightItems);
    }

    function moveBox9() {
        // draw 
        context.fillStyle = color3;
        context.fillRect(x9, y9, widthItems, heightItems);
    }

    function moveBox10() {
        // draw 
        context.fillStyle = color4;
        context.fillRect(x10, y10, widthItems, heightItems);
    }

    function moveBox11() {
        // draw 
        context.fillStyle = color4;
        context.fillRect(x11, y11, widthItems, heightItems);
    }

    function moveBox12() {
        // draw 
        context.fillStyle = color1;
        context.fillRect(x12, y12, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x12 - 2, y12w, widthItems + 3, heightItems);

        //move 
        y12 = y12 + speed;
        y12w = y12w + speed;
        var timerId = setTimeout( moveBox12, 1);

        var stop = canvasHeight - canvasItem * 2;
        
        if (chekPixels(y12, stop)) {
             
            var back = parseInt(stop) - parseInt(y12);
                
            context.fillStyle = color1;
            context.fillRect(x12, y12 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x12 - 2, y12w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
    }

    function moveBox13() {
        // draw 
        context.fillStyle = color4;
        context.fillRect(x13, y13, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x13 - 2, y13w, widthItems + 2, heightItems);
        //move 
        y13 = y13 + speed;
        y13w = y13w + speed;
        var timerId = setTimeout( moveBox13, 1);

        var stop = canvasHeight - canvasItem * 2 + 1 ;
        
        if (chekPixels(y13, stop)) {
             
             var back = parseInt(stop) - parseInt(y13);
                

            context.fillStyle = color4;
            context.fillRect(x13, y13 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x13 - 2, y13w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
    }

    function moveBox14() {
        // draw 
        context.fillStyle = color5;
        context.fillRect(x14, y14, widthItems, heightItems);
        //move 
        y14++;
    }

    function moveBox15() {
        // draw 
        context.fillStyle = color3;
        context.fillRect(x15, y15, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x15 - 2, y15w, widthItems + 2, heightItems);
        //move 
        y15 = y15 + speed;
        y15w = y15w + speed;
        var timerId = setTimeout( moveBox15, 1);

        var stop = canvasHeight - canvasItem * 2;
        
        if (chekPixels(y15, stop)) {
             
             var back = parseInt(stop) - parseInt(y15);
            context.fillStyle = color3;
            context.fillRect(x15, y15 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x15 - 2, y15w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
    }

    function moveBox16() {
        // draw 
        context.fillStyle = color5;
        context.fillRect(x16, y16, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x16 - 2, y16w, widthItems + 3, heightItems);
        //move 
        y16 = y16 + speed;
        y16w = y16w + speed;
        var timerId = setTimeout( moveBox16, 1);

        var stop = canvasHeight - canvasItem * 2;
        
        if (chekPixels(y16, stop)) {
             
             var back = parseInt(stop) - parseInt(y16);
                

            context.fillStyle = color5;
            context.fillRect(x16, y16 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x16 - 2, y16w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
    }

    function moveBox17() {
        // draw 
        context.fillStyle = color3;
        context.fillRect(x17, y17, widthItems, heightItems);
        //move 
        y17++;
    }

    function moveBox18() {
        // draw 
        context.fillStyle = color5;
        context.fillRect(x18, y18, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x18 - 2 , y18w, widthItems + 3, heightItems);
        //move 
        y18 = y18 + speed;
        y18w = y18w + speed;
        var timerId = setTimeout( moveBox18, 1);

        var stop = canvasHeight - canvasItem * 2;
        
        if (chekPixels(y18, stop)) {
             
             var back = parseInt(stop) - parseInt(y18);

            context.fillStyle = color5;
            context.fillRect(x18, y18 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x18 - 2, y18w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
    }

    function moveBox19() {
        // draw 
        context.fillStyle = color2;
        context.fillRect(x19, y19, widthItems, heightItems);
        //move 
        y19++;
    }

    function moveBox20() {
        // draw 
        context.fillStyle = color1;
        context.fillRect(x20, y20, widthItems, heightItems);
        //move 
        y20++;
    }

    function moveBox21() {
        // draw 
        context.fillStyle = color5;
        context.fillRect(x21, y21, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x21 - 2, y21w, widthItems + 2, heightItems);
        //move 

        y21 = y21 + speed;
        y21w = y21w + speed;
        var timerId = setTimeout( moveBox21, 1);

        var stop = canvasHeight - canvasItem * 2 - canvasItem;
        
        if (chekPixels(y21, stop)) {
             
             var back = parseInt(stop) - parseInt(y21);

            context.fillStyle = color5;
            context.fillRect(x21, y21 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x21 - 2, y21w + back, widthItems + 2, heightItems);

            clearTimeout(timerId);
        }
        
    }

    function moveBox22() {
        // draw 
        context.fillStyle = color4;
        context.fillRect(x22, y22, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x22 - 2, y22w, widthItems + 3, heightItems);
        //move 

        y22 = y22 + speed;
        y22w = y22w + speed;
        var timerId = setTimeout( moveBox22, 1);

        var stop = canvasHeight - canvasItem * 2 - canvasItem;
        
        if (chekPixels(y22, stop)) {
             
             var back = parseInt(stop) - parseInt(y22);

            context.fillStyle = color4;
            context.fillRect(x22, y22 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x22 - 2, y22w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
        
    }

    function moveBox23() {
        // draw 
        context.fillStyle = color5;
        context.fillRect(x23, y23, widthItems, heightItems);

        context.fillStyle = '#fff';
        context.fillRect(x23 - 2, y23w, widthItems + 2, heightItems);
        //move 

        y23 = y23 + speed; 

        y23w = y23w + speed;

        var timerId = setTimeout( moveBox23, 1);

        var stop = canvasHeight - canvasItem * 2 - canvasItem;
        
        if (chekPixels(y23, stop)) {
             var back = parseInt(stop) - parseInt(y23);

            context.fillStyle = color5;
            context.fillRect(x23, y23 + back, widthItems, heightItems);

            context.fillStyle = '#fff';
            context.fillRect(x23 - 3, y23w + back, widthItems + 3, heightItems);

            clearTimeout(timerId);
        }
    }

            moveBox1();
            moveBox2();
            moveBox3();
            moveBox4();
            moveBox5();
            moveBox6();
            moveBox7();
            moveBox8();
            moveBox9();
            moveBox10();
            moveBox11();
            moveBox14();
            moveBox17();
           
            moveBox19();
            moveBox20();
            
            mouse();
            if (come('#canvasElement') && isAnim == true) {
                   setTimeout(function () {
                        flyBecome();
                        firstMousWell = false;
                   }, 800);
            }


        $('body').on('touchmove', function(e){
        e.stopPropagation();
        var cells = document.getElementById('is-about-us');
        if (cells && isAnim == true) {
             flyBecome();
            firstMousWell = false;
            isAnim = false;
        }
    });
    }

    function mouse () {
        $('body').on('mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation(); 
                if( isAnimating) {
                    return false;
                }
                isAnimating  = true;
                
                // Increase or reset current anchor
                if( e.originalEvent.wheelDelta >= 0 ) {
                    currentAnchor--;
                }else{
                    currentAnchor++;
                }
                if( currentAnchor > (anchors.length - 1) 
                   || currentAnchor < 0 ) {
                    currentAnchor = 0;
                }
                isAnimating  = true;
                if( anchors[currentAnchor] > 600 && isAnim == true) {
                      flyBecome();
                }
                    render = true;
                if (firstMousWell) {
                       $('html, body').animate({
                        scrollTop: parseInt(windHeigth)
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                        flyBecome();
                    });
                       firstMousWell = false;
                        currentAnchor++;
                } else {
            
                   $('html, body').animate({
                        scrollTop: parseInt( anchors[currentAnchor] )
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                    });
                }
            });
    }


    function flyBecome() {
         moveBox18();   
            setTimeout(function () {
                moveBox12();
            }, 1600);
            setTimeout(function () {
                moveBox13();
            }, 400);
            setTimeout(function () {
                moveBox15();
            }, 1500);
            setTimeout(function () {
                moveBox16();
            }, 400);
            setTimeout(function () {
            moveBox21();
            }, 500);
            setTimeout(function () {
                moveBox22();
            }, 1100);
                setTimeout(function () {
            moveBox23();
            }, 600);
            isAnim = false;
            // $('body').unbind();
    }
});

function mousWheel() {
        $('body').on('mousewheel', function(e, delta){
            this.scrollLeft -= (delta * 200);
                e.preventDefault();
                e.stopPropagation(); 
                if( isAnimating) {
                    return false;
                }
                isAnimating  = true;
                
                // Increase or reset current anchor
                if( e.originalEvent.wheelDelta >= 0 ) {
                    currentAnchor--;
                }else{
                    currentAnchor++;
                }
                if( currentAnchor > (anchors.length - 1) 
                   || currentAnchor < 0 ) {
                    currentAnchor = 0;
                }
                isAnimating  = true;
                if ($('body').hasClass('is-hiring')) {
                    
                        setTimeout(function () {
                            $('.header-opportunities p').addClass('about-us-fly-img');
                            $(".header-opportunities p").stop().animate({ left: "0px" }, 1000);
                        }, 1500);   
                }
                render = true;
                if (firstMousWell) {
                       $('html, body').animate({
                        scrollTop: parseInt(anchors[1])
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                    });
                       firstMousWell = false;
                        currentAnchor++;
                } else {
                   $('html, body').animate({
                        scrollTop: parseInt( anchors[currentAnchor] )
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                    });
                }
            });
}

function setPositionDevItems(rect, _this) {
    var third = windWidth/3;
 
    if(rect.left < third - 200){
        _this.css({'left': rect.left, 'top': rect.top});
        _this.addClass('big-dev-item');
    } else if (third > rect.left ) {
       _this.css({'left': '28.5%', 'top': rect.top});
        _this.addClass('big-dev-item');
    } else if(third < rect.left) {
       _this.css({'right': rect.right, 'top': rect.top});
        _this.addClass('big-dev-item');
    }
}



$(document).ready(function () {
        $('.hamburger').click(function() {
            if(click){
                if (windWidth > 768){
                    $(this).removeClass('is-active').removeClass('js-hamburger');
                    $('#my-menu').removeClass('show-menu').addClass('close-menu');
                        $('.link-menu').removeClass('in-left-menu').addClass('in-right-menu');
                        $('#hamburger').removeClass('in-left').addClass('in-right');
                    click = false;
                } else {

                }
            } else {
                if (windWidth > 768){
                    $(this).addClass('is-active').addClass('js-hamburger');
                    $('#my-menu').removeClass('close-menu').addClass('show-menu');
                        $('.link-menu').addClass('in-left-menu').removeClass('in-right-menu');
                        $('#hamburger').addClass('in-left').removeClass('in-right');
                    click = true;
                }else {

                }
            }
        }); 

        $('#my-menu>ul>li').click(function () {
            var _this = $(this);
            $('.active').removeClass('active');
            _this.addClass('active');
        });

        $('.height-composition').each(function(i, element){
                var composition = $(this)[0];
                composition.style.height = composition.clientWidth + 'px';
                window.onresize = function() {
                composition.style.height = composition.clientWidth + 'px';
            }
        });
        if ($('body').hasClass('is-home')){
        
            if (come('.earth') && !device.ios()) {
             fly();
            } 
            if (come('.cloud')) {
                cloudFly();
            }
        }
        if ($('body').hasClass('is-about-us')){
             aboutUsFly();
        } 
        if ($('body').hasClass('is-our-team')) {
            mousWheel();
            if (windWidth > 769 ) {
                $(".header-flex-team").stop().animate({ top: "175px" }, 1000);
            }
            setTimeout(function () {
                    $(".header-flex-team").attr('id','about-us-fly-text');
                }, 100);
        }
        if ($('body').hasClass('is-hiring')) {
            mousWheel();
            if (windWidth > 769 ) {
                $(".header-flex-hiring").stop().animate({ top: "175px" }, 1000);
            }
            setTimeout(function () {
                    $(".header-flex-hiring").attr('id','about-us-fly-text');
                }, 100);
            if (come('.content-oportunities')) {
                setTimeout(function () {
                            $('.header-opportunities p').addClass('about-us-fly-img');
                            $(".header-opportunities p").stop().animate({ left: "0px" }, 1000);
                        }, 700);
            } 
        }
        if ($('body').hasClass('cont') || $('body').hasClass('dedicated')) {
            mousWheel();
        }

        $('.tabs__caption>li').hover(function() {
            $(this).addClass('active');
        },function() {
            
                $(this).removeClass('active');
            
        });
        $('.tabs__caption li').click (function() {
            if(!$(this).hasClass('is-active')) {
                $(this)
              .addClass('is-active').siblings().removeClass('is-active')
              .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            }
        });
        $('.portal-menu-ul li').click (function() {
            if ($(this).hasClass('contact-hr')){
                window.location.href = "https://houstonapps.co/app/contact.html";
                return;
            }
            if(!$(this).hasClass('active')) {
                $(this)
              .addClass('active').siblings().removeClass('active');
              $('div.tab-login').find('div.filling').removeClass('active').eq($(this).index()).addClass('active');
            }
        });

        $('body').on('click', '.dev-item',function (e) {
            if(e.target && e.target.nodeName == "A") {
                if ($(e.target).hasClass('leave-feedback')) {
                    $('.modal-backdrop').addClass('in');
                    $('.modal').addClass('in');
                }
            } else {
                var _this = $(this);
                $(this).find('.skill').addClass('skill-how').removeClass('skill');
                $('.dev').find('.dev-item').attr('id', '').attr('style', '');
                _this.attr('id', 'big-dev-item');
                var target = document.getElementById('big-dev-item');
                $('.dev').find('.dev-item').removeClass('big-dev-item');
                setPositionDevItems($("#big-dev-item").position(), _this);
                if ($("#big-dev-item").position().top > 0) {
                    $('.opportunities').css('padding-bottom', '500px');
                    $('.avaible-team').css('padding-bottom', '500px');
                }
            }
            
        });

        $(document).mouseup(function (e) {
            var container = $('big-dev-item');
            if (container.has(e.target).length === 0){
                $('.dev').find('.dev-item').removeClass('big-dev-item');
                $('.dev').find('.dev-item').attr('id', '').attr('style', ''); 
                $('.opportunities').css('padding-bottom', '0'); 
                $('.avaible-team').css('padding-bottom', '0');  
                $(this).find('.skill-how').addClass('skill').removeClass('skill-how');
            }
        });

        $('.we-specilise .we-specilise-left-wrap, .we-specilise .we-specilise-right-wrap').on('mouseenter',function () {
            var self = this;
            $(self).find('div:first').addClass('we-specilise-hover')
            setTimeout(function(){
                $(self).find('.first-stage').css('display', 'none');
                $(self).find('p').css('display', 'block');
                $(self).find('.row').css('display', 'block');
            }, 1300);
        });
        $('.we-specilise .we-specilise-left-wrap, .we-specilise .we-specilise-right-wrap').on('mouseleave', function () {
                var self = this;
                $(self).find('div:first').removeClass('we-specilise-hover');
                setTimeout(function(){
                $(self).find('p').css('display', 'none');
                $(self).find('.row').css('display', 'none');
                $(self).find('.first-stage').css('display', 'block');
                }, 1300);
        });

        $('.we-specilise .we-specilise-left').on('click',function () {
            window.location.href = "https://houstonapps.co/app/time_materials.html";
        });
        $('.we-specilise .we-specilise-right').on('click',function () {
            window.location.href = "https://houstonapps.co/app/dedicated.html";
        });

        $('.login').click(function (e) {
            e.preventDefault();
            $('.modal-backdrop').addClass('in');
            $('.modal').addClass('in');
        });
        $('.close').click(function (e) {
            e.preventDefault();
            $('.modal-backdrop').removeClass('in');
            $('.modal').removeClass('in');

        });
        $('.lwa-form').submit(function (e) {
            e.preventDefault();
            window.location.href = "https://houstonapps.co/app/portal_log_in.html";
        });

        $('.link-contact-form').click(function (e) {
            e.preventDefault();
            console.log(123);
            $('html, body').animate({
                        scrollTop: parseInt( anchors[1] )
                    }, 1100, 'swing', function(){
                        isAnimating  = false;
                    });
        });
        $('.skill').mouseout( function (e) {
            e.preventDefault();
            var count = $(this).find('.skill-item').length;
            if (count > 6 && $(this).hasClass('skill')) {
                $(this).addClass('skill-hover');
            }
         });

        $('.skill').mouseleave( function (e) {
            e.preventDefault();
            $(this).removeClass('skill-hover');
        });
        $('#gform_1').submit(function (e) {
            e.preventDefault();
        });
});


$(function() {
    if ($('body').hasClass('time-materials')) { 
        var img_width = $('.start')[0];
        var analysis = $('.analysis').position();
        var specifications = $('.specifications').position();
        var disign = $('.disign').position();
        var development = $('.development').position();
        var testing = $('.testing').position();
        var delivery = $('.delivery').position();
        var maintenance = $('.maintenance').position();


        set_verticale_top_line_position($('.vertical:nth-child(1)'), img_width, analysis, specifications);
        set_verticale_top_line_position($('.vertical:nth-child(2)'), img_width, specifications, disign);
        set_verticale_top_line_position($('.vertical:nth-child(3)'), img_width, disign, development);

        set_verticale_center_line_position($('.vertical:nth-child(4)'), img_width, development, testing)

        set_verticale_bottom_line_position($('.vertical:nth-child(5)'), img_width, testing, delivery);
        set_verticale_bottom_line_position($('.vertical:nth-child(6)'), img_width, delivery, maintenance);

        set_gorizontal_top_line($('.gorizont:nth-child(7)'), img_width, analysis, specifications);
        set_gorizontal_top_line($('.gorizont:nth-child(8)'), img_width, specifications, disign);
        set_gorizontal_top_line($('.gorizont:nth-child(9)'), img_width, disign, development);

        set_gorizontal_bottom_line($('.gorizont:nth-child(10)'), img_width, testing, delivery);
        set_gorizontal_bottom_line($('.gorizont:nth-child(11)'), img_width, delivery, maintenance);


        

        function set_verticale_top_line_position(element, img_width, first_div_position, second_div_position ) {
            element.css({
            top: img_width.height + first_div_position.top - 4, 
            left: img_width.width/2 + 12.5 + first_div_position.left, 
            position:'absolute'
         }).find('rect').attr('height', (second_div_position.top + img_width.width/2) - (img_width.height + first_div_position.top - 7));
        }

        function set_verticale_bottom_line_position(element, img_width, first_div_position, second_div_position ) {
            element.css({
            top: first_div_position.top + img_width.width/2, 
            left: second_div_position.left + img_width.width/2 +13, 
            position:'absolute'
         }).find('rect').attr('height', (second_div_position.top + 5) - (first_div_position.top + img_width.width/2));
        }

        function set_verticale_center_line_position(element, img_width, first_div_position, second_div_position ) {
            element.css({
            top: img_width.height + first_div_position.top - 3, 
            left: second_div_position.left + img_width.width/2 +13, 
            position:'absolute'
         }).find('rect').attr('height', (second_div_position.top + 5) - (img_width.height + first_div_position.top - 3));
        }

        function set_gorizontal_top_line(element, img_width, first_div_position, second_div_position) {
            element.css({
            top: second_div_position.top + img_width.width/2, 
            left: img_width.width/2 + 13 + first_div_position.left, 
            position:'absolute'
         }).find('rect').attr('width',(second_div_position.left + 25) - (img_width.width/2 + 13 + first_div_position.left));
        }

        function set_gorizontal_bottom_line(element, img_width, first_div_position, second_div_position) {
            element.css({
            top: first_div_position.top + img_width.width/2, 
            left: second_div_position.left + img_width.width/2 +13, 
            position:'absolute'
         }).find('rect').attr('width',(first_div_position.left) - (second_div_position.left + img_width.width/2 - 13));
        }
        var scrol = 0;

        function comeWerticaleCenter(elem) {
              var docViewTop = $(window).scrollTop() + $(window).height()/2;
              
              var docViewBottom = docViewTop + $(window).height()/2;
              var elemTop = $(elem).offset().top + 100;
              if (parseInt(docViewTop) > parseInt(elemTop)) {
                return true;
              }
              return false;
        }
        var keys = {37: 1, 38: 1, 39: 1, 40: 1};
        var off_analice = false;
        var off_specifications = false;
        var off_disign = false;
        var off_development = false;
        var off_testing = false;
        var off_delivery = false;
        var off_maintenance = false;



        function preventDefault(e) {
              e = e || window.event;
              if (e.preventDefault)
                  e.preventDefault();
              e.returnValue = false;  
            }

        function preventDefaultForScrollKeys(e) {
            if (keys[e.keyCode]) {
                preventDefault(e);
                return false;
            }
        }

        function disableScroll() {
          if (window.addEventListener) // older FF
              window.addEventListener('DOMMouseScroll', preventDefault, false);
          window.onwheel = preventDefault; // modern standard
          window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
          window.ontouchmove  = preventDefault; // mobile
          document.onkeydown  = preventDefaultForScrollKeys;
        }

        function enableScroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = null; 
            window.onwheel = null; 
            window.ontouchmove = null;  
            document.onkeydown = null;  
        }

        $('body').on('mousewheel', function(e){
            e.preventDefault();
                e.stopPropagation();
            if (firstMousWell) {
                disableScroll();
                $('html, body').animate({
                    scrollTop: anchors[1]
                }, 1500,  function(){
                    if (comeWerticaleCenter('.analysis')) {
                        $('.analysis').addClass('render-verticale-line');
                        if (!off_analice) {
                             disableScroll();
                           /* setTimeout( function() {
                                enableScroll();
                            }, 1500);*/
                            off_analice = true;
                        }
                    }
                });
                firstMousWell = false;
                setTimeout(function () {
                    $('html, body').animate({
                            scrollTop: $('.analysis').offset().top
                        }, 1500,  function(){              
                     });
                },2000);
            } 

            
            if (comeWerticaleCenter('.vertical:nth-child(1)')) { 
              
                if (!off_specifications) {
                     disableScroll();
                    $('.vertical:nth-child(1)').addClass('render-verticale-line'); 
                    $('.gorizont:nth-child(7)').addClass('render-verticale-line');
                    $('.specifications').addClass('render-verticale-line');
                    $('html, body').animate({
                        scrollTop: $('.vertical:nth-child(1)').offset().top
                    }, 1500, 'swing', function(){
                        setTimeout( function() {
                        enableScroll();
                    }, 1500);
                    });   
                    
                    off_specifications = true;
                }
            }

             if (comeWerticaleCenter('.vertical:nth-child(2)')) {
                
                if (!off_disign) {
                   disableScroll();
                    $('.vertical:nth-child(2)').addClass('render-verticale-line');
                    $('.gorizont:nth-child(8)').addClass('render-verticale-line');
                    $('.disign').addClass('render-verticale-line');
                    $('html, body').animate({
                        scrollTop: $('.vertical:nth-child(2)').offset().top
                    }, 1500, 'swing', function(){
                        setTimeout( function() {
                        enableScroll();
                    }, 1500);
                    }); 
                    
                    off_disign = true;
                }
             }

             if (comeWerticaleCenter('.vertical:nth-child(3)')) {
                if (!off_development) {
                    disableScroll();
                    $('.vertical:nth-child(3)').addClass('render-verticale-line');
                    $('.gorizont:nth-child(9)').addClass('render-verticale-line');
                    $('.development').addClass('render-verticale-line');
                    $('html, body').animate({
                        scrollTop: $('.vertical:nth-child(3)').offset().top
                    }, 1500, 'swing', function(){
                        setTimeout( function() {
                        enableScroll();
                    }, 1500);
                    }); 
                    
                    off_development = true;
                }
             }
             
             if (comeWerticaleCenter('.vertical:nth-child(4)')) {
                if (!off_testing) {
                     disableScroll();
                    $('.vertical:nth-child(4)').addClass('render-verticale-line'); 
                    $('.testing').addClass('render-verticale-line');
                    $('html, body').animate({
                        scrollTop: $('.vertical:nth-child(4)').offset().top
                    }, 1500, 'swing', function(){
                        setTimeout( function() {
                        enableScroll();
                    }, 1500);
                    }); 
                    
                    off_testing = true;
                }
             }
             if (comeWerticaleCenter('.gorizont:nth-child(10)')) {
                if (!off_delivery) {
                    disableScroll();
                    $('.gorizont:nth-child(10)').addClass('render-verticale-line');
                    $('.vertical:nth-child(5)').addClass('render-verticale-line'); 
                    $('.delivery').addClass('render-verticale-line');
                     $('html, body').animate({
                        scrollTop: $('.gorizont:nth-child(10)').offset().top
                    }, 1500, 'swing', function(){
                        setTimeout( function() {
                        enableScroll();
                    }, 1500);
                    }); 
                    
                    off_delivery = true;
                }
             }
             
             if (comeWerticaleCenter('.gorizont:nth-child(11)')) {
                if (!off_maintenance) {
                    disableScroll();
                    $('.gorizont:nth-child(11)').addClass('render-verticale-line');
                    $('.vertical:nth-child(6)').addClass('render-verticale-line'); 
                    $('.maintenance').addClass('render-verticale-line');
                    setTimeout( function() {
                        enableScroll();
                    }, 1500);
                    off_maintenance = true;
                }
                $('body').unbind('mousewheel');
             }
             is_move++;
        });

    }


    if ($('body').hasClass('is-home')) { 
        var img_width = $('.how-img img')[0];
        var email = $('.how-img:nth-child(2)').position();
        var balance = $('.how-img:nth-child(4)').position();
        var training = $('.how-img:nth-child(6)').position();
        var checked = $('.how-img:nth-child(8)').position();

        set_how_work_line($('.line-work-wrap:nth-child(3)'), img_width , email, balance);
        set_how_work_line($('.line-work-wrap:nth-child(5)'), img_width , balance, training);
        set_how_work_line($('.line-work-wrap:nth-child(7)'), img_width , training, checked);

        $('.line-work-wrap:nth-child(1)').css({
                    top: email.top  + img_width.height/2, 
                    left: 0, 
                    position:'absolute'
            }).find('rect').attr('width', email.left - 7);
        $('.line-work-wrap:nth-child(9)').css({
                    top: email.top  + img_width.height/2, 
                    left: checked.left + 7 + img_width.width, 
                    position:'absolute'
            }).find('rect').attr('width', windWidth - (checked.left + 7));

        function set_how_work_line(element, img_width, first_div_position, second_div_position) {
            element.css({
                    top: first_div_position.top  + img_width.height/2, 
                    left: first_div_position.left + img_width.width + 7, 
                    position:'absolute'
            }).find('rect').attr('width', (second_div_position.left - 7) -  (first_div_position.left + img_width.width + 7));
        }
    }
});