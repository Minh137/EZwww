let site =prompt("네이버, 다음, 구글, 네이트 중 가장 즐겨 사용하는 포털의 이름은?");
let url;

switch(site){
    case "네이버":
        url = "naver.com";
    break;
    case "다음":
        url = "daum.net";
    break
    case "구글":
        url = "google.com";
    break
    case "네이트":
        url = "nate.com";
    break
    default:
        alert("보기에는 없습니다.")
        location.reload()
}
if(url){
    location.href="http://"+url
}