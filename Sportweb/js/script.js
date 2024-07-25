function slideShow(){
    const heroIn = document.querySelector(".hero-in");
    const bannerBox = document.querySelectorAll(".banner-box");
    const bCount = bannerBox.length;
    let fBannerBox = bannerBox[0];
    let lBannerBox = bannerBox[bCount - 1];
    heroIn.classList.add("ani");  //ani 클래스를 추가한다. (-1330픽셀 이동)
    setTimeout(function(){
        //1. ani클래스를 지운다
        heroIn.classList.remove("ani");
        //2. 첫번째 배너를 지우고 복제해서 마지막에 추가 한다.
        fBannerBox.remove();
        lBannerBox.insertAdjacentElement("afterend",fBannerBox);
        //3. left 포지션을 0으로 셋팅한다.
        heroIn.style.left ="0";
    }, 400);
    setTimeout(slideShow, 5000);
}

slideShow();

document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; 
    var date = today.getDate();
    let tdays = new Array("일","월","화","수","목","금","토");
    let day = tdays[today.getDay()];

    if(month < 10) {
        month = '0' + month;
    }
    if(day < 10) {
        day = '0' + day;
    }

    var rs = year + '-' + month + '-' + date + '-' + day;
    document.getElementById('current-date').innerText = '센터일정 : ' + rs;
});