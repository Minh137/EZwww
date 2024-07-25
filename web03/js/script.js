function viewSub(x){
    const gnb = document.getElementById("gnb");
    gnb.classList.toggle("flex");
    x.classList.toggle("change");
}

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

function slideShow2(){
    const nanaIn = document.querySelector(".nana-in");
    const imgBox = document.querySelectorAll(".img-box");
    const ibcount = document.length;
    let fimgBox = imgBox[0];
    let limgBox = imgBox[ibcount];
    nanaIn.classList.add("ani-2");
    setTimeout(function(){
        nanaIn.classList.remove("ani-2");
        fimgBox.remove();
        limgBox.insertAdjacentElement("afterend", fimgBox);
        nanaIn.style.left = "0";
    }, 400);
    setTimeout(slideShow2, 5000);
}

slideShow2();

