var current = 0;

$(".contents03_search_right_box_text1 li ").click(function(){
   $(this).addClass("on").siblings().removeClass("on"); 
    
    current = $(this).index();
    return false;
});

$(".contents03_search_right_box_text1 li").eq(current).click();

$(".contents03_search_left_list li").click(function(){
   $(this).addClass("change").siblings().removeClass("change");
    
    current = $(this).index();
    return false;
});

$(".contents03_search_left_list li").eq(current).click();

