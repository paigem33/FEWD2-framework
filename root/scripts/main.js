$(function(){
    //for navigation
        if ($(window).width() <= 699){
            $('div.icon').click(function(){
            $('.mainNav1').stop().slideToggle();
        })
        $('.nav1-showSub').click(function(){
            $(this).children('ul').stop().slideToggle();
        })
        } else {
            $('.nav1-showSub').hover(function(){
            $(this).children('ul').stop().slideToggle();
            });
            $('.nav2-showSub').hover(function(){
            $(this).children('ul').stop().slideToggle();
            })
        }; //end nav
    //accordion
    $('.accordion').click(function(){
                $(this).toggleClass('active');
                $(this).children('div').stop().fadeToggle();
            }); //end accordion
}) //end doc ready