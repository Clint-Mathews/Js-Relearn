let data = "        hello this is clint         ";
//Trim
console.log(data.trim());
console.log(data.length);
// data  = data.trim(); Update same string
let newString  = data.trim();
console.log(newString);
console.log(newString.length);


let upperCase = "hello clint";
upperCase = upperCase.toUpperCase();
console.log(upperCase)

let lowerCase = "hello clint";
lowerCase = lowerCase.toLowerCase();
console.log(lowerCase)

let sliceData = "hello slice function";
console.log(sliceData)
console.log(sliceData.length);
sliceData = sliceData.slice(0,sliceData.length-1);
console.log(sliceData)
console.log(sliceData.length);
