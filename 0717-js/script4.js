let str = "Hello Thank you good luck to you";

/*
1. 인덱스 번호 16의 문자를 출력
2. 왼쪽부터 제일 먼저 발견된 you의 인덱스 값을 반환
3. 인덱스 16이후부터 발견되는 you값을 반환
4. 오른쪽 부터 제일 먼저 발견된 you값을 반환
5. luck와 일치된 문자를 반환
6. 21번부터 네 글자를 가져옴
7. 6번부터 12번까지의 문자를 가져옴
8. 왼쪽부터 제일먼저 발견된 you를 me로 치환
9. 문자열을 모두 소문자로
10. 문자열을 모두 대문자로
11. 공백을 기준으로 문자를 분리해서 배열 arr에 담음
12. arr 인덱스 0번과 4번을 출력
13. arr 0번 인덱스의 charCode 출력
14. 아스키코드 65의 문자 출력
*/

console.log(str.charAt(16));

console.log(str.indexOf("you"));

//let b = str>str.charAt(16);
console.log(str.indexOf("you", 16));

console.log(str.lastIndexOf("you"));

console.log(str.match("luck"));

console.log(str.substr(21, 4));

console.log(str.substring(6,13));

console.log(str.replace("you", "me"));

console.log(str.toLowerCase());

let arr = str.split(" ");

console.log(arr[0] +" " + arr[4]);

console.log(arr[0].charCodeAt(0));

console.log(String.fromCharCode(65));