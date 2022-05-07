class CreateUser{
    constructor(name,age){
        console.log("Constructor called!")
        this.name = name;
        this.age = age;
    }
    details(){
        return `${this.name} - ${this.age}`;
    }
    sing(){
        return "lal la allas  lalsal sas la";
    }
    fn(a){
        console.log(a)
    }
}

const user1 = new CreateUser("Clint",24);
console.log(user1);
console.log(user1.details());
console.log(user1.sing());
user1.fn(12);
console.log(Object.getPrototypeOf(user1));

