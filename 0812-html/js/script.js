$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $(this).find(".lnb").stop().slideToggle("slow");
    });
    setInterval(fadeInout, 3000);
});

function fadeInout(){
    $('.hero img:eq(0)').fadeOut(500).next().fadeIn(500).end().appendTo('.hero');

}