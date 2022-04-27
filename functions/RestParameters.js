console.log("Without Rest parameter")
function myApp(a,b,c){
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
}

myApp(1,2,3)
myApp(1,2,3,4,5,6,7,8,9)

console.log("With Rest parameter")
function myApp1(a,b,...c){
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
}
// c retuens an array, if no elements empty
myApp1(1)
myApp1(1,2,3)
myApp1(1,2,3,4,5,6,7,8,9)

console.log("With Rest parameter Sum the numbers")
function Sum(...arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum;
}

console.log("Sum: ",Sum(1))
console.log("Sum: ",Sum(1,2,3))
console.log("Sum: ",Sum(1,2,3,4,5,6,7,8,9))
