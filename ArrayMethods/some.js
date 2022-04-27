const nums =[2,4,6,1,10];
const nums1 =[2,4,6,12,10];

function isOdd(num){
    return num%2!=0;
}

// Using Callback
const res3 = nums.some(isOdd);
console.log(res3);
const res4 = nums1.some(isOdd);
console.log(res4);

// Arrow functions
const res1 = nums.some(num => num%2 !=0);
console.log(res1);
const res2 = nums1.some(num => num%2 !=0);
console.log(res2);


// Realist example
const products = [
    {id:1,name:"Mobile",price:400},
    {id:2,name:"Laptop",price:300},
    {id:3,name:"tv",price:700},
]


// Check of any product price is less than 400
const check = products.some(item =>item.price < 400);
console.log(` Any product has price less than 400 : ${check}`);

// False case
products[0].price = 1200;
const check1 = products.some(item =>item.price > 1000);
console.log(` Any product has price greater than 1000 : ${check1}`);