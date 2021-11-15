$(".navbar_left_menu>li").hover(function () {
    $(this).find('.navbar_left_sub_menu').slideDown('fast');
}, function () {
    $(this).find('.navbar_left_sub_menu').slideUp('fast');
});

$(".navbar_right_menu>li").hover(function () {
    $(this).find('.navbar_right_sub_menu').slideDown('fast');
}, function () {
    $(this).find('.navbar_right_sub_menu').slideUp('fast');
});

var current = 0;
var count = $(".main_bg li").size() - 1;

$(".main_slide_btn_list li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    current = $(this).index();

    var index = $(this).index();
    var pos = 1900 * index;

    $(".main_bg").animate({
        left: -pos
    }, 400);
    
});

$(".main_slide_btn_list li").eq(current).click();

$(".main_slide_btn a").click(function () {
    var check = $(this).hasClass("prev");
    if (check == true) {
        current -= 1;
    } else {
        current += 1;
    }

    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }
    $(".main_slide_btn_list li").eq(current).click();

    return false;
});


$(".main ul").css('left',-1900);
