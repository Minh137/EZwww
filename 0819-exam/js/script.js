$(document).ready(function(){
    $("ul.main-menu>li").hover(function(){
        $(this).find(".sub-menu").stop().slideToggle("slow");
    });

    let currentIndex = 0;
    const slideWrapper = $(".slide-wrapper");
    const slides = $(".slide-wrapper img");
    const totalSlides = slides.length;
    const slideWidth = $(".slide").width();

    // 첫 슬라이드를 맨 뒤에 복제하여 추가
    slideWrapper.append(slides.first().clone());

    function showSlide() {
        currentIndex++;
        slideWrapper.css("transition", "transform 0.5s ease-in-out");
        slideWrapper.css("transform", `translateX(-${currentIndex * slideWidth}px)`);

        // 마지막 슬라이드에 도달한 경우
        if (currentIndex >= totalSlides) {
            setTimeout(() => {
                slideWrapper.css("transition", "none");
                slideWrapper.css("transform", "translateX(0)");
                currentIndex = 0;
            }, 500); // 애니메이션 시간(0.5초) 후에 실행
        }
    }

    setInterval(showSlide, 3000);
});

// function showSlide(){
//     $(".slide-wrapper").animate(){
//         {"left": "-100%"}, 300, function(){
            
//         }
//     }
// }