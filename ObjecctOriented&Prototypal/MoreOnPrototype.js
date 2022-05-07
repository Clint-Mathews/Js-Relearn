let numbe = [1,2,3]
console.log(Object.getPrototypeOf(numbe));
console.log(numbe.__proto__);

function hello(){
    console.log("Hello");
}
// Defaukt prototype is an object  {}
console.log(hello.prototype);
// Prototype to array
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push(1)
console.log(hello.prototype);
