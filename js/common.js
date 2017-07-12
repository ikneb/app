var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
var click = false;
var render = false;


console.log(document.documentElement.clientWidth);

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
                }, 1000);
}

$(function(){
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
    
        if( isAnimating ) {
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
        
        console.log(anchors[currentAnchor]);
        if( anchors[currentAnchor] > 600) {
            fly();
        }
         if (parseInt(anchors[currentAnchor]) > 1200) {
              console.log(parseInt(anchors[currentAnchor]));
               cloudFly();
        }
            render = true;
        
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });

    updateAnchors(); 
    
});



$(document).ready(function () {
        $('.hamburger').click(function() {
            if(click){
                $(this).removeClass('is-active').removeClass('js-hamburger');
                $('#my-menu').removeClass('show-menu').addClass('close-menu');
                    $('.link-menu').removeClass('in-left-menu').addClass('in-right-menu');
                    $('#hamburger').removeClass('in-left').addClass('in-right');
                click = false;
            } else {
                $(this).addClass('is-active').addClass('js-hamburger');
                $('#my-menu').removeClass('close-menu').addClass('show-menu');
                
                    $('.link-menu').addClass('in-left-menu').removeClass('in-right-menu');
                    $('#hamburger').addClass('in-left').removeClass('in-right');
            
                click = true;
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

        var windWidth = document.documentElement.clientWidth; 
        var windHeigth = document.documentElement.clientHeight;
        if (windWidth < 480) {
            
        }
});