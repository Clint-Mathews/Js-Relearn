// Sort

const arr = [5,499,1200,3,34,190];
console.log(arr);
arr.sort();
console.log(arr);

const str = ["nju","p","q","a","A"]
console.log(str);
str.sort();
console.log(str);


// To fix sorting in numbers using callback

const nums = [5,499,1200,3,34,190];
console.log(nums);
// nums.sort((a,b)=>{return a-b});
nums.sort((a,b)=>a-b);
console.log(nums);


// Example sorting products
const products = [
    {id:1,name:"Mobile",price:400},
    {id:2,name:"Laptop",price:300},
    {id:3,name:"tv",price:700},
]

const lowToHigh = products.slice(0).sort((a,b)=>a.price-b.price)
console.log("lowToHigh");
console.table(lowToHigh);
const highToLow = [...products].sort((a,b)=>b.price-a.price)
console.log("highToLow");
console.table(highToLow);

const basedOnName = [].concat(products).sort((a,b)=>a.name.localeCompare(b.name));
console.log("basedOnName");
console.table(basedOnName);