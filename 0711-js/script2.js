//let num = 1;

//while(num>40){//false
//    document.write("while문은 실행 되나요?");
//   num--;
//}

/*do{
    document.write("while문은 실행 되나요?");
    num--;
}while(num>40)*/

/*alert("이 내용은 줄바꿈해서 넣으려고 해요.\n이렇게 하면 될까요?")

for(let i=1; i<=10; i++){
    document.write(i, "<br>");
}*/

/*
    1부터 100까지 중 5의 배수는 빨강,
    7의 배수는 초록
    5의 배수이면서 7의 배수는 핑크
    로 출력하세요.

*/ 


/*for(let i=1; i<=100; i++){
    if(i%5==0 && i%7==0){
    document.write("<p class='pink'>"+i+"</p>");
    }else if(i%5==0){
    document.write("<p class='red'>"+i+"</p>");
    }else if(i%7==0){
    document.write("<p class='green'>"+i+"</p>");
    }
}*/

/**
 * while for 문을 강제종료 break
 * 
 */

//1부터 10까지 루프를 돌리다 6이 나오면 루프를 빠져나오세요.
/*for(let i=1; i<=10;i++){
    if(i==6) break;
    document.write(i);
}*/

/**
 * continue --- 다음에 오는 코드는 무시하고 계속 해
 */

/*for(let i=1; i<=10; i++){
    if(i%2==0) continue;
    document.write(i);
}*/

/*for(let i=1; i<=5; i++){
    for(let j=1; j<=3; j++){
        document.write("i="+i+"j="+j+"<br>");
    }
}*/



/*for(let i=1; i<=9; i++){
    document.write("<div><h1>"+i+"단</h1>");
    for(let j=1; j<=9; j++)
        document.write(i+"x"+j+"="+j*i+"<br>");
    document.write("</div>");
}*/

/**
 * 5행 5열의 표를 만들고 1부터 25까지 출력하세요.
 */

let num=1;  //전체를 카운터 할 변수를 선언함.

document.write("<table>");  //한번 사용할 table 태그 출력
for(let i=1; i<=5; i++){
    document.write("<tr>");
    for(let j=1; j<=5; j++){
        document.write("<td>"+num+"</td>");
        num++;
    }
    document.write("</tr>");
}
document.write("</table>");


