const id="admin";
const pass = "1234";


let userid = prompt("아이디를 입력하세요.");


// /*
// 1. 아이디가 일치하는 확인
//  2. 비밀번호가 일치하는지 확인
//    2-1. 비밀번호가 일치하면 ---->location.href="http://naver.com"
//    2-2. 비밀번호가 일치하지 않으면----->alert("00가 일치하지 않습니다.");
//                                         location.reload();

// 1-1. 아이디가 일치하지 않으면
// */ 

if(userid == id){
    let usepass = prompt("비밀번호를 입력하세요.");
    
    if(usepass == pass){
    alert(userid + "님 환영합니다.");
    location.href="http://naver.com";
    }else{
    alert("pass가 일치하지 않습니다.");
    location.reload();
}
}else{
    alert("id가 일치하지 않습니다.");
    location.reload();
}