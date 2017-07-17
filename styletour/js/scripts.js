$(function () {
    $('.carousel').carousel({
        interval: false,
    });

    $('.search').on('click',function () {
        $('.main-menu .navbar-form').slideToggle();
    });

    $('.product').hover(
        function(){$('img', this).css('opacity','.5');},
        function (){$('img', this).css('opacity','1');}
    );

    $("#elastislide").elastislide();
});

$(window).load(function(){
    var carousel_caption_width = $('#carousel-sidebar .active img').width();
    $('#carousel-sidebar img').each(function(){
        $(this).attr('width', carousel_caption_width);
    });
    $('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carousel_caption_width+"px");
    $('#carousel-sidebar .carousel-indicators').css('max-width', carousel_caption_width+"px");
    $('.sidebar .banner').css('max-width', carousel_caption_width+"px");
});
