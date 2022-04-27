const data = {
    person : "Clint",
    age: 23,
    hob : ["Sleeping","Eating","Stressing"]
}

// For in loop
for(let key in data){
    console.log(`${key} - ${data[key]}`);
}

// Object.keys()

const keys = Object.keys(data);
console.log(keys)
for(let key of keys){
    console.log(`${key} - ${data[key]}`);
}