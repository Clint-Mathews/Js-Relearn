const arr = ["Hello","Clint","His","Hi","Data","Her"];

function isLength3(strData){
    return strData.length === 3;
}

const res = arr.find(isLength3);
console.log(res);

const res1 = arr.find(item => item.length === 3);
console.log(res1);

const users = [
    {name:"Clint", age: 12},
    {name:"Clins", age: 112},
    {name:"Clinx", age: 122},
    {name:"Clinz", age: 112},
]

const user = users.find(user => user.name === "Clinx")
console.log(user);