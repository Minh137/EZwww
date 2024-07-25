/*
    배열객체
    function 함수이름(a. b){
        결과1 = a + b;
        결과2 = a * b;
        rs = [결과1, 결과2];
        return rs;
    }
        let arr = new Array();   //배열의 인덱스 번호 배열순서-1
        let arr2 = [];

        arr[0] = 10;
        arr[1] = 20;

        배열변수를 arr1, arr2, arr3 를 만든 후
        1. arr1은 빈배열로 만들고 30, "따르릉", true를 담으세요.
        2. new Arry() 안에 30, 따르릉, true를 담으세요
        3. []안에 30, 따르릉, true

let arr1 = new Array();
arr1[0] = 30;
arr1[1] = "따르릉";
arr1[2] = true;

let arr2 = new Array(30, "따르릉", true);
let arr3 = [30, "따르릉", true];

for(let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

let arr1 = ["사당", "교대", "방배", "강남"];
let arr2 = ["신사", "압구정", "옥수"];

//배열의 원소를 합치기
// 사당, 교대, 방배, 강남 으로 출력하기 join()
let rs = arr1.join(" -> ");
console.log(rs);

//배열을 합치기 arr1 + arr2
//배열1.concat()(배열2)
let rs2 = arr1.concat(arr2);
console.log(rs2);

//배열의 원소를 원하는 구간만큼 잘라서 가져오기 slice(시작인덱스, 직후인덱스)
let rs3 = arr1.slice(1, 3);
console.log(rs3);

//원소를 순서대로 출력 sort();
arr1.sort();
console.log(arr1.sort());

//배열의 순서를 거꾸로 뒤집기
arr1.reverse();
console.log(arr1);*/

let greenAir = ["교대", "방배", "강남"];
let yellowAir = ["미금", "정자", "수서"];

greenAir.splice(2, 1, "서초", "역삼");
console.log(greenAir);

let data1=yellowAir.pop();
let data2 = yellowAir.shift();

yellowAir.push(data2);
console.log(yellowAir);

yellowAir.unshift(data1);
console.log(yellowAir);
