const data = {
    name: "Clint",
    "person age": 23,
    hobbies: ["Sleeping","Swimming"],
}
let key = "email"
// console.log(data.person age);
// Error since we cannot access directly instead use backet access
console.log(data["person age"]);

data[key] = " clint@y.com"
console.log(data);
