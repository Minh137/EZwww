// 변수 (variable)는 데이터값을 저장할 수 있는 메모리 공간
// 하나의 변수에는 오직 하나의 데이터만 저장된다. 즉 새로운 데이터가 들어오면 기존데이터는 지워진다.
/*
* 변수의 종류 
* 1. 문자형 (string)
* 2. 숫자형 (Number)
* 3. 논리형 (Boolean)

var 변수명; var 변수명=값;
const 변수명 = 값;
let 변수명; let 변수명 = 값;
var은 선언 이후 다시 선언하는 것이 가능하지만
let은 한 번 선언되면 다시 선언x
const 값을 다시 재정의 할 수없다. 즉 변수가 아니라 상수가 된다.
*/

var val="철수";
var val=12;
document.write(val);

let val2="민수";
//let val2=30;

const val3="영희";

// 문자형(string) 따옴표를 이용하여 초기화
let str = "문자형 변수";
let str2 = "1000";
let tag= "<h1>제목입니다.";
document.write(tag);

//숫자형 따옴표 없이 쓰거나 Number("숫자")
let Num01=1000;
let num02=number(str2);//문자형이었던 str를 숫자형으로 변환.

//논리형 따옴표 없이 Boolean(데이터);
let s = true;   //true
let t = 10 >=100;  //false
let k = Boolean(tag); //true 
//데이터가 있으면 true 없으면 false, 숫자형에서 0은 false