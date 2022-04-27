const Outer = () => {
    const inner = () => console.log("Inner App")
    const addNum = (a,b) => a+b;
    const mulNum = (a,b) => a*b;
    console.log("Outer App")
    inner();
    console.log(addNum(2,3))
    console.log(mulNum(2,3))
} 

Outer();