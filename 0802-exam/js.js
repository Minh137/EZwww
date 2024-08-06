function st(x, y){

    if(x==y){
        return 3*(x + y);
    }else{
        return x + y;
    }
    
}
console.log( st(10, 30) );
console.log( st(30, 30) );


function test6(x,y){
    return(x===50 || y===50 || (x+y==50));
}

function test7(x,y){
    return(x<0 &&y>0 || x>0 &&y<0 );
}



function test10(x,y){
    if(str === null || str === undefined || str.substring(0,4)=='java'){
        return;
    }
    return "Java" + str;

}