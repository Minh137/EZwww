$(document).ready(function(){
    $("ul.gnb>li").hover(function(){
        $(this).find(".lnb").stop().slideToggle("slow");
    });

    $('.tab-nav>a').click(function(e){
        e.preventDefault(); //a href의 기능을 중지 시킨다.
        $('.tab-nav > a').removeClass("active"); //a 태그에 있는 모든 active를 없앤다.
        $('.tab-content > div').removeClass("act"); //본문의 모든 act도 없앤다.
        $(this).addClass("active"); //클릭한 곳에 active를 추가한다.
        const act = $(this).data("act"); //data-act 값을 받는다. 이 값이 id 값이다.
        $(act).addClass("act"); //data-act값에 해당
    });

    $(".pop").click(function(){
        $(".popup").fadeIn();
    });
    $(".close").click(function(){
        $(".popup").fadeOut();
    });

    setInterval(fadeInout, 3000);
});

function fadeInout(){
    $('.hero img:eq(0)').fadeOut(500).next().fadeIn(500).end().appendTo('.hero');

}

