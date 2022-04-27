const arr = ["Value1","Value1"];
let Value1 = arr[0];

let Value2 = arr[0];
console.log(arr);
console.log(Value1);
console.log(Value2);

// Destructure the array elements
let [data1,data2] = arr;
const [datac1,datac2] = arr;
// datac1 = "asdas"; Error
console.log(arr);
console.log(data1);
console.log(data2);
console.log(datac1);
console.log(datac2);


const arry = [1,2];
const [u,p,i,o] = arr;
console.log(u);
console.log(p);
console.log(i);
console.log(o);


const arrs = ['a1','a2','a3','a4'];
let [a1,a2,a3,a4] =arrs;
// Skipping value
let [a5,a6] =arrs;
console.log(a5);
console.log(a6);
let [,,a7,a8] =arrs;
console.log(a7);
console.log(a8);

let [x,y,...c] = arrs;
console.log(x);
console.log(y);
console.log(c);