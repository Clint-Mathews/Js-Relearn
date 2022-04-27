const evenNumber =[2,4,6,8,10];
const nums =[2,4,6,1,10];

function isEven(num){
    return num%2==0;
}

// Using Callback
const res3 = evenNumber.every(isEven);
console.log(res3);
const res4 = nums.every(isEven);
console.log(res4);

// Arrow functions
const res1 = evenNumber.every(num => num%2 ==0);
console.log(res1);
const res2 = nums.every(num => num%2 ==0);
console.log(res2);


// Realist example
const products = [
    {id:1,name:"Mobile",price:400},
    {id:2,name:"Laptop",price:300},
    {id:3,name:"tv",price:700},
]


// Check of product price is less than 1000
const check = products.every(item =>item.price < 1000);
console.log(` Every product has price less than 1000 : ${check}`);

// False case
products[0].price = 1200;
const check1 = products.every(item =>item.price < 1000);
console.log(` Every product has price less than 1000 : ${check1}`);