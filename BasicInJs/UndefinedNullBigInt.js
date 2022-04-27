//Undefined

let data;
console.log(typeof data, data);
data =  123
console.log(typeof data, data);

// Error
// const myData;
// console.log(myData);


//Null
let myVar = null;
console.log(typeof myVar, myVar);
// Null type is object which is a bug

// BigInt
console.log(Number.MAX_SAFE_INTEGER)

let val = BigInt(900719925474099112321321321321);
console.log(typeof val, val);

let vals = BigInt(12);
console.log(typeof vals, vals);

let value = 123n;
console.log(typeof value, value);

console.log(vals + value);
// Error since the datatypes does not match
console.log(vals + 1212);
