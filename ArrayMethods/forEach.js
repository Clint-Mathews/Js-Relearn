const num = [4,3,5,6,7]

function findFirstElementMulBy2(numbers, index){
    console.log(`index is ${index} : ${numbers} * 2 = ${numbers* 2}`);
}
//Callback case
console.log("Callback");
num.forEach(findFirstElementMulBy2)
//Annyonymus function
console.log("Annyonymus");
num.forEach(function(number,index){
console.log(`index is ${index} : ${number} * 2 = ${number* 2}`)
})
//Arrow function
console.log("Arrow");
num.forEach((number,index) => findFirstElementMulBy2(number,index));


//Example
console.log("Example - forEach");

const users = [
    {name:"Clint", age: 12},
    {name:"Clins", age: 112},
    {name:"Clinx", age: 122},
    {name:"Clinz", age: 112},
]
users.forEach(function(user){
    console.log(user.name);
})

console.log("Example - For of");

for(let user of users){
    console.log(user.name);
}
