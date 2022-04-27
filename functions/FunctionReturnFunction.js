function ret1(){
    return function ret2(){
        return "Hello"
    }
}


const funToCall = ret1()
console.log(funToCall)
console.log(funToCall());