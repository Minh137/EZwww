// const soosuck ={
//     birth: 1999,
//     height: "2m",
//     weight: "100kg",
//     firstname: "오",
//     lastname: "수석",
//     fullname: function(){
//         return this.firstname+""+this.lastname;
//     }
// }
// console.log("이름은? " +soosuck.fullname());

// let x = 999999999999999;
// let y = BigInt("9999999999999999");
// console.log(x);
// console.log(y);

const arr = [1,3,5,6,7,10];
//1. for문
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//2. for of "반복가능한 객체를 순회 a of 객체  객체=a"
for( const value of arr){
    console.log(value);
}
//3. for in  key가 있는 객체
const obj = {a:1,b:2,c:3};
for(const key in obj){
    console.log(key);
    console.log(obj[key]);
}

const myset = new Set();
myset.add("철수");
myset.add("영희");
myset.add("순이");
console.log(myset);
myset.delete("영희");
console.log(myset);

if(myset.has("민수")){
    myset.add("영수");
}else{
    myset.add("민수");
}
//myset.clear();
console.log(myset.size);

for(const rs of myset){
    console.log(rs);
}

myset.forEach(function(rs, index){
    console.log(rs+":"+index);
});

const mysetArr =[...myset];
console.log(mysetArr);