const person = new Map();
person.set("name","Clint");
person.set("age",24);
// Key can be of any type
person.set(1, "One");
person.set([1,2,3], "Array");
person.set({1:"one",2:"two"}, "Object literal");

console.log(person);
console.log(person.keys());
console.log(person.values());
// Get map value based on key using map.get(key)
for(let key of person.keys()) {
    console.log(`key : ${key}, type of key : ${typeof key}, value of key : ${person.get(key)}`);
}
// For of in map, returns array of key, value
for(let item of person) {
    console.log(item);
}

// For of in map, returns array of key, value, destructure
for(let [key,value] of person) {
    console.log(key,value);
}

// Initialization of map data on declaring
const perMap = new Map(
    [
        ["firstname","Clint"],
        ["lastname","Mathews"],
        [1,"One"],
        [{1:"one"},"Object"],
        [[1,2,3],"Array"]
    ]
)
console.log(perMap);

const person1 = {
    id :1,
    "Name" :"Clint"
}
const person2 = {
    id :2,
    "Name" :"Clins"
}
const extraInfo = new Map();
extraInfo.set(person1,{age:10,gender:"Male"});
extraInfo.set(person2,{age:21,gender:"Female"});
console.log(person1);
console.log(extraInfo);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(person2);
console.log(extraInfo);
console.log(extraInfo.get(person2).age);
console.log(extraInfo.get(person2).gender);

