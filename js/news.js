var currentt = 0;
var countt = $(".contents03_news_img li").size() -1;

$(".contents03_news_list li").click(function(){
   currentt = $(this).index();
    
    var index = $(this).index();
    var poss = 700 * index;
    
    $(".contents03_news_img").animate({
        left: -poss
    }, 400);
});

$(".contents03_news_list li").eq(currentt).click();

$(".contents03_news_btn a").click(function(){
   var checkk = $(this).hasClass("prev1");
    if (checkk == true) {
        currentt -= 1;
    } else {
        currentt += 1;
    }
    if (currentt < 0) {
        currentt = countt;
    }
    if (currentt > countt) {
        currentt = 0;
    }
    $(".contents03_news_list li").eq(currentt).click();
    
    return false;
});