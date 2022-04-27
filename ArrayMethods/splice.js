const arr = ['item1','item2','item3','item4','item5']

// Delete item2
console.log("Delete");
console.log(arr);
const delItem = arr.splice(1,1)
console.log(delItem);
console.log(arr);

// Insert item2
console.log("Insert");
console.log(arr);
arr.splice(1,0,'item2')
console.log(arr);

// Insert & Delete

console.log("Insert & Delete");
console.log(arr);
const d = arr.splice(1,2,'item21','item31')
console.log(d);
console.log(arr);