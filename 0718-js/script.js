/*
1. 자바스크립트를 이용해 ‘오늘은 2024년 7월 18일 목요일입니다.’를 출력하세요.

2.  현재 페이지의 내용을 인쇄하는 javaScript 코드를 작성하세요.

3. yyyy-mm-dd, yyyy/mm/dd 형식으로 날짜를 출력하세요.

4. 세 변의 길이가 5,6,7인 삼각형의 면적을 구하는 코드를 작성하세요.

5. 주어진 년도가 윤년인지 아닌지 판별하는 함수를 작성하세요. (윤년일 경우 true , 아닐 경우 false)

6. 2010년부터 2050년까지 1월1일이 일요일인 년도를 모두 찾으세요.

7. 1부터 10까지의 임의의 정수를 하나 선택하게 한 후 사용자가 번호를 맞추면 “맞췄습니다.” 틀리면 “다시하세요.”를 출력하는 함수를 작성하세요.
*/

//1.
let today = new Date()

let tyear = today.getFullYear();
let tmon = today.getMonth()+1;
let tdate = today.getDate();

let tdays = new Array("일","월","화","수","목","금","토");
let tday = tdays[today.getDay()];


console.log(`오늘은 ${tyear}년 ${tmon}월 ${tdate}일 ${tday}요일입니다.`);

//2.


//3.
let tmon2 = ("0"+(today.getMonth()+1)).slice(-2);
let tdate2 = ("0"+today.getDate()).slice(-2); 
console.log(`${tyear}-${tmon2}-${tdate2}`);
console.log(`${tyear}/${tmon2}/${tdate2}`);

//4.
const ta = 5;
const tb = 6;
const tc = 7;
let s = (ta+tb+tc)/2;
let S = Math.sqrt(s*(s-ta)*(s-tb)*(s-tc));
console.log(S);

//5.
let yearS = 2100;
if( (yearS % 4 == 0 && yearS % 100 != 0) || yearS % 400 == 0){
    console.log(true);
}else{
    console.log(false);
}

//6.
for(let i = 2010; i <= 2050; i++){
    const yearA = new Date(i, 0, 1);
    if(yearA.getDay() === 0){
        console.log(i);
    }
}

//7.
let A = prompt("1부터 10까지 정수를 입력하세요.");
let B = Math.ceil((Math.random()*10));
if(A == B){
    document.write("맞춰습니다.");
}else{
    document.write("틀렵습니다.");
}