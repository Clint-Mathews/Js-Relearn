function hello(){
    console.log("HElllo");
}
console.log(hello.name);
hello();
hello.test = "Hello"
console.log(hello.test);
console.log(hello.prototype);
hello.prototype.abc = "abc"
hello.prototype.sing = function(){
    console.log("Hello")
}
hello.prototype.sing();
console.log(hello.prototype.abc);
console.log(hello.prototype);

function createUser(name,age){
    const user = Object.create(createUser.prototype)
    user.name = name;
    user.age = age;
    return user;
}
createUser.prototype.about = function(){
        return `${this.name} - ${this.age}`
    };
createUser.prototype.isAbove18 = function(){
        return this.age > 18
};
createUser.prototype.sing = function(){
        return "Sing";
    };
const user1 = createUser("Clint",19);
const user2 = createUser("Clins",45);
console.log(user1);
console.log(user1.about());
console.log(user1.isAbove18());
console.log(user1.sing());
console.log(user2);
console.log(user2.about());
console.log(user2.isAbove18());
console.log(user2.sing());