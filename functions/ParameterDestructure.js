function deStructNotDone(obj){
    console.log(obj.name)
    console.log(obj.age)
    console.log(obj.test)
}
function deStructDone({name,age}){
    console.log(name)
    console.log(age)
}

function deStructDone2
({name : v1,age :v2}){
    console.log(v1)
    console.log(v2)
}

let obj = {
    name :"Clint",
    age: 12
};
deStructNotDone(obj)
deStructDone(obj)
deStructDone2(obj)