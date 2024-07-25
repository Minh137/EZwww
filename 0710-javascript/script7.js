/*let sum = 0;
let n = 1;
while(n <= 10){
    sum += n;
    n++;
}
document.write("1부터 10까지의 합은 "+sum+"입니다.");

i=1;
while(i<=30){
    if(i % 2 == 0 && i % 6 ==0){
        document.write(i,"<br>");
    }
    i++;
}*/

let a = 1;
let odd;
let even;

while(a<=20){
    if(a % 2 == 0){
        even=a;
        document.write('<span style="color: red;">' + even + '</span><br>');
    }else{
        odd=a;
        document.write('<span style="color: blue;">' + odd + '</span><br>');
    }
    a++;
}