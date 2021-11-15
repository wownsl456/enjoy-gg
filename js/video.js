var current = 0;
var count = $(".contents02_header_menu li").size() - 1;

$(".contents02_header_menu li").click(function () {
    $(this).addClass("effect");
    $(this).siblings().removeClass("effect");
    
    current = $(this).index();
     var index = $(this).index();
    var pos = 1000 * index;
    
    $(".contents02_box ul").animate({
        top: -pos
    }, 400);
    
      $(".contents02_box li").animate({
        top: -pos
    }, 400);
    
});

$(".contents02_header_menu li").eq(current).click();

$(".contents02_header_arrow a").click(function(){
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
    $(".contents02_header_menu li").eq(current).click();
    
     return false;
});

$(".contents02_box_list li").hover(function(){
    $(this).find("h2").slideDown('fast');
},function(){
    $(this).find("h2").slideUp('fast');
});

$(".contents02_box_list li").click(function(){
   var img = $(this).children().attr("src");
    $(".contents02_box_cover img").attr("src", img);
    
    var title = $(this).children().attr("title");
    $(".title").text(title);
});

    