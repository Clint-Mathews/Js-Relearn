function myFunc(){
        console.log("HEllo");
}

myFunc();

function outerFunc(){
    function innerFunc(){
        console.log("HEllo");
    }
    return innerFunc;
}

const ans = outerFunc()
console.log(ans)
ans()

function printFullName(fname,lname){
    function printName(){
       function prints(){
           console.log(fname,lname)
       }
       return prints
    }
    return printName
}

const ret = printFullName("Clint","Mathews")
console.log(ret)
ret()()