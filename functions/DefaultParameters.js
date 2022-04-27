function add(a,b){
    if(typeof b === "undefined") b = 0;
    return a+b;
}
function adds(a,b=10){
    return a+b;
}
console.log(add(1));
console.log(add(1,1));
console.log(adds(1));
console.log(adds(1,1));