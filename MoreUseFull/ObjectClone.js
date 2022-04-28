const obj = {name :"Clint"}
const obj2 = obj // Reference same memmory location
console.log(obj);
console.log(obj2);
obj.age = 23
// Will obj2 as both are referencing same memory location
console.log(obj);
console.log(obj2);

// Instead do clone
// 1 Spread operator
const obj3 = {...obj}
console.log(obj);
console.log(obj3);
obj.gender = "Male"
console.log(obj); //Updated
console.log(obj3); // No change
// 2 Object assign
const obj4 = Object.assign({},obj)
console.log(obj);
console.log(obj4);
obj.id = 10
console.log(obj); //Updated
console.log(obj4); // No change

