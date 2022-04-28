const arr = [12,3,4,5,6,7,3,4,5]
const setData = new Set(arr); // new Set(iterable)
console.log(setData);
console.log(arr);
// using set delete element using an element
setData.delete(12)
console.log(setData);
// using set add
setData.add(12)
setData.add(12) // No duplicates added
setData.add(arr)
setData.add(arr) // No duplicates added
// Comment out to check delete since its same set wont show the updates
console.log(setData);
setData.delete(arr)
console.log(setData);
setData.add([1,2,3])
setData.add([1,2,3])
// Gets added since its different memory space 
console.log(setData);
console.log(setData[0]); // Won't get data based on index => undefined


if(setData.has(12)){
    console.log("12 is peresent");
} else {
    console.log("12 is not peresent");
}

// For of iterable set
for(let item of setData){
    console.log(item);
}

// Excersise
// 1 Remove duplicates from array
const arrayData = [1,2,3,4,4,5,6,7,7,8];
const removedDuplicates = new Set(arrayData);
console.log(arrayData);
console.log(removedDuplicates);
// Find length
let i =0;
for(let item of removedDuplicates){
    console.log(item);
    i++;
}
console.log("length of set " + i);

console.log(removedDuplicates.keys());
for(let item of removedDuplicates.keys()){
    console.log(item);
}
console.log(removedDuplicates.values());
for(let item of removedDuplicates.values()){
    console.log(item);
}
