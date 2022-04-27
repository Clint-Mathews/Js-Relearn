// Primitive
let num1 = 6;
let num2 = num1;

console.log("Value of num1 is " + num1);
console.log("Value of num2 is " + num2);

console.log("After increment");
num1 ++;
console.log("Value of num1 is " + num1);
console.log("Value of num2 is " + num2);

// Reference types
let arr1 = [1,2,3,4];
let arr2 = arr1;
console.log("Value of arr1 is " , arr1);
console.log("Value of arr2 is " , arr2);

console.log("After increment");
arr1.push(5);
console.log("Value of arr1 is " , arr1);
console.log("Value of arr2 is " , arr2);