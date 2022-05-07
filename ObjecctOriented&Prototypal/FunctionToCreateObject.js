const userMethods= {
    about : function(){
        return `${this.name} - ${this.age}`
    },
    isAbove18 : function(){
        return this.age > 18
    },
    sing: function(){
        return "Sing";
    }
}
function createUser(name,age){
    // const user = {};
    // __proto__
    // Create a user object with __proto__ of userMethods ie we can create prototype chain
    const user = Object.create(userMethods)
    user.name = name;
    user.age = age;
    // Instead add __proto__ to the userMethods
    // user.about = userMethods.about
    // user.isAbove18 = userMethods.isAbove18
    // user.sing = userMethods.sing
    return user;
}

const user1 = createUser("Clint",19);
const user2 = createUser("Clins",45);
const user3 = createUser("Xtreme",4);
console.log(user3);
console.log(user3.about());
console.log(user3.isAbove18());
console.log(user3.sing());



const obj1  = {
    key1 : "value1",
    key2 : "value2",
}
// Create __proto__ ref to obj1 from obj2
const obj2  = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj1)
console.log(obj1.key1)
console.log(obj2.key3)
console.log(obj2.key2)
console.log(obj2.__proto__)
