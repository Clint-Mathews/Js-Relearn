const greet = () => console.log("Hello")
const sum = (a,b) => a+b;
const sum3Num = (a,b,c) => a+b+c;
const isEven  = n => n%2===0

const getFrstChar =  s => s.length > 0 ? s[0] : "";
const getIndex = (arr,target) => {
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