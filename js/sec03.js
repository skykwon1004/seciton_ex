$(function () {

    $('.left_itm .menu>li').on('click', function () {
        var idx = $(this).index();
        console.log(idx);
        $('.right_itm div').removeClass('on');
        $('.right_itm div').eq(idx).addClass('on');

        $('.left_itm .menu>li').removeClass('on');
        $(this).addClass('on');
    })
})
