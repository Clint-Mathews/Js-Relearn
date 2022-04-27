const data = [1,2,3,4,5];

function squareData(num){
    return num * num
}

console.log("Callback");
const res = data.map(squareData)
console.log(data);
console.log(res);

console.log("anonymous");
const res1 = data.map(function(num){
    return num*num
})
console.log(data);
console.log(res1);

console.log("Arrow");
const res2 = data.map(num => num*num)
console.log(data);
console.log(res2);

// If no return then undefined array


console.log("Undefined case");
const res3 = data.map(function(num){
    console.log(num*num);
})
console.log(data);
console.log(res3);

// Exercise
const users = [
    {name:"Clint", age: 12},
    {name:"Clins", age: 112},
    {name:"Clinx", age: 122},
    {name:"Clinz", age: 112},
]

const userNames = users.map(user => user.name)
console.log(userNames);