let userName = prompt("이름을 입력하세요.");
//이름이 영문 소문자인 경우 대문자로 변경하여 출력
console.log(userName.toUpperCase(),"<br>");

let userTel = prompt("전화번호를 입력하세요.");
//전화번호가 입력되면 뒤에 4자를 ****로 치환하여 출력 0101234****
let rs = userTel.substring(0, userTel.length-4)+"****";
console.log(rs);