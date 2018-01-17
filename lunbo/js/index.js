/**
 * Created by admin on 2017/10/11.
 */

var count = 0;
var ulList = $(".head-banner ul li");
var olList = $(".head-banner ol li");

var timer;
timer = setInterval(autoPlay,1000);

$(".head-banner").on("mouseenter",function () {
   clearInterval(timer);
});

$(".head-banner").on("mouseleave",function () {
    timer = setInterval(autoPlay,1000);
});

function autoPlay() {
    count++;
    if(count>ulList.length-1) {
        count = 0;
    }
    ulList.css("display","none").eq(count).show();
    olList.removeClass("active").eq(count).addClass("active");
}

olList.on("click",function () {
    count = olList.index($(this));
    ulList.css("display","none").eq(count).show();
    olList.removeClass("active").eq(count).addClass("active");
});
