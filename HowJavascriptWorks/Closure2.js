function hello(x){
    const a ="VarA"
    const b ="VarB"
    return function(){
        console.log(x,a,b)
    }
}

const ans = hello("X")
console.log(ans)
ans();