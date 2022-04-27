function greet(){
    console.log("Hello");
}
function sum(a,b){
    return a+b;
}
function sum3Num(a,b,c){
    return a+b+c;
}
function isEven(n){
    return n%2===0
}

function getFrstChar(s){
    return s.length > 0 ? s[0] : "";
}
function getIndex(arr,target){
    // return arr.indexOf(target);
    for(let i =0 ;i < arr.length;i++){
        if(arr[i] == target) return i;
    }
    return -1;
}

greet();
console.log(sum(1,2))
console.log(sum3Num(1,2))
console.log("Is Number even : ",isEven(8))
console.log("Character : ",getFrstChar("hello"))
console.log("Get index : ",getIndex([1,2,23,3,4],4))