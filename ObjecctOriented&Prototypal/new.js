// new keyword
function Check(fname){
    // new keyword creates a object this = {} 
    this.fname = fname // adds key values
    //Auto returns the object back
}
// prototype object assign key value 
Check.prototype.greet = function(){
    console.log("Greet user" + this.fname);
}
// When we call function with new keyword
// 1. object get created
// 2. initialized with key value from function
// 3. links the function prototype key value to __proto__ 
// 4. auto retuns back the object
const user = new Check("Clint");
console.log(user);
console.log(user.fname);
user.greet();

// Constructer function 
function CreateUser(name,age){
    this.name = name;
    this.age = age;
}
CreateUser.prototype.about = function(){
        return `${this.name} - ${this.age}`
    };
CreateUser.prototype.isAbove18 = function(){
        return this.age > 18
};
CreateUser.prototype.sing = function(){
        return "Sing";
    };
const user1 = new CreateUser("Clint",19);
const user2 = new CreateUser("Clins",45);
console.log(user1);
console.log(user1.about());
console.log(user1.isAbove18());
console.log(user1.sing());
console.log(user2);
console.log(user2.about());
console.log(user2.isAbove18());
console.log(user2.sing());

for(let item in user1){
    if(user1.hasOwnProperty(item)){
        console.log(item);
        console.log(user1[item]);
    } else{
        console.log(`Shared __proto__ property : ${item}`);
    }
}

for(let item in user2){
    if(user1.hasOwnProperty(item)){
        console.log(item);
        console.log(user2[item]);
    } else{
        console.log(`Shared __proto__ property : ${item}`);
    }
}