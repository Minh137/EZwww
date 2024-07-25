/*testFunc();

function testFunc() {
    console.log("안녕?");
}
function testFunc2() {
    console.log("반사워");
}
testFunc2();


let testFunc3 = function(){          //익명함수
    console.log("진짜야");
}
testFunc3();*/

/**
 * 함수 호이스팅 : 함수를 먼저 읽는다
 */

/*function myFunc(name, area){
    console.log("안녕하세요." +area+"사는 "+name+"입니다.");
}
myFunc("김철수","부산");
myFunc("홍길동","김포");*/


function login(id, pw){
   let rightid = "admin";
   let rightpwd = "1234";
   if(id == rightid){
    if(pw == rightpwd){
        document.write("반갑습니다")
    }else{
        alert("잘못된 아이디입니다.")
    }
   }_
}
let uid = prompt("아이디를 입력하세요.")
let pass = prompt("비밀번호를 입력하세요.")
login(uid,pass)