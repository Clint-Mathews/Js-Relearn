let arr = [1,2,3,4]
let arr1 =  arr;

console.log(arr === arr1);
arr.push(5);
console.log(arr);
console.log(arr1);
console.log(arr === arr1);

// Clone the data without reference

// Fastest using slice
let arr2 = arr.slice(0);
console.log(arr);
console.log(arr2);
console.log(arr === arr2);

// using concat to create new array
let arr3 = [].concat(arr)
console.log(arr);
console.log(arr3);
console.log(arr === arr3);

// Using spread operator
let arr4 = [...arr]
console.log(arr);
console.log(arr4);
console.log(arr === arr4);


let arr5 = arr.slice(0).concat([1,2])
console.log(arr5);
let arr6 = [].concat(arr).concat([1,2])
console.log(arr6);
let arr7 = [...arr,...[1,2]]
console.log(arr7);

