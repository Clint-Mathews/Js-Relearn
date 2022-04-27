const data = {
    name:"Clint",
    age: 12
}
console.log(typeof data, data);
data.Hobbies = ["Sleeping"]
console.log(typeof data, data);
console.log(typeof data.Hobbies,Array.isArray(data.Hobbies), data.Hobbies);
console.log(typeof data.age, data.age);
console.log(typeof data["age"], data["age"]);
data["test"] = "Test"
console.log(typeof data.test, data.test);
console.log(typeof data["test"], data["test"]);