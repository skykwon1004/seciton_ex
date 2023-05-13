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

    $('.main_visual .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.lang_btn').on('click', function () {
        $('.lang_list').toggleClass('on');
    });

    $('.lang_list>li').on('click', function () {
        $(this).css('text-decoration', 'underline');
        $('.lang_list>li').not($(this)).css('text-decoration', 'none');
    });

    // https://codepen.io/khr777/pen/RwpzOVN 참고 .not($(this))
})