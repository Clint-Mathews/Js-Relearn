function myfunc2(data){
    console.log(`My Func 2 : ${data}`)
}

function myfucn1(callback,name = ""){
    console.log(`My Func 1 : ${name}`)
    callback(name);
}

myfucn1(myfunc2,"Hello")