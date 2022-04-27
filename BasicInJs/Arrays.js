let data = [1,2,32,32,323,21];

let col = [121,"Clint",1212, null, undefined];
console.log(col);
col[121] = "sdsdss"
col[1] = "sdsdss"
col[12121212] = "sdsdss"
console.log(col);
console.log(col[12]);


let obj = {}
console.log(typeof col);
console.log(typeof obj);
console.log(Array.isArray(col));
console.log(Array.isArray(obj));