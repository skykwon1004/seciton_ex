$(function () {
    // main_visual
    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_visual .main_slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .main_slide_num strong').text(s.slideCount);
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
    });

    $('.main_visual .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual  .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });







})