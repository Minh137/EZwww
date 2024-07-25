const mymap = new Map();
mymap.set("name", "홍길동");
mymap.set("age",500);
mymap.set("heught",185);
mymap.set("weight",70);
console.log(mymap);

//
console.log(mymap.get('name'));
if(mymap.has('address')){
    console.log("주소를 알수 있다");
}else{
    console.log("주소를 알수 있다");
}

mymap.delete("weight");
console.log(mymap);

for(const[key, value] of mymap){
    console.log(`${key}:${value}`);
}
mymap.forEach((value, key) =>{
    console.log(`${key}:${value}`);
})
const student= {
    firstname: "John",
    lastname: "Doe",
    age: 30
}
let fname= student.firstname;
let lname= student.lastname;

console.log(`${fname} ${lname}`);