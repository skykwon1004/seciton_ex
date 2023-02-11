$(function () {


    // sec02
    $('.sub_slide').slick({
        fade: true,
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 0,
        // autoplaySpeed: 4000,
        // pauseOnHover: false,
        // pauseOnFocus: false,
    });


    $('.sub_slide').on('afterChange', function (e, s, c) {
        $('.dots li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });


    $('.dots li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.sub_slide').slick('slickGoTo', idx)
    });

})