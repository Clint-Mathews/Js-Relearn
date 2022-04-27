greet();

function greet(){
    console.log("Hello");
}
// Error case of hoisting while using function expression
greet2();
const greet2 =  function(){
    console.log("Hello 2");
}
// Error case of hoisting while using arrow functions expression

const greet3 = () => console.log("Hello 3");
greet3();