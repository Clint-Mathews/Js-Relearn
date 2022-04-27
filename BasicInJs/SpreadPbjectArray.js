// Arrays
const array1 = [1,2,3]
const array2 = [4,5,6]

const newArray = [...array1, ...array2,10]
console.log(array1);
console.log(array2);
console.log(newArray);


const data = [..."abcd"]
const numString = [..."123456789"]
// const nums = [...1234] Error not iterable
console.log(data);
console.log(numString);


// Objects

const obj1 = {
    key1:"value1",
    key1:"value56",
    key2:"value2"
}
console.log(obj1);
const obj2 = {
    key1:"value66",
    key3:"value3"
}
console.log(obj2);

const obj= {...obj1,...obj2}
console.log(obj)

const objs= {...obj1,...obj2,key:"Value"}
console.log(objs)


console.log({..."abc"})
console.log({...["i1","i2","i3"]})

