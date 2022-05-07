class Person{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    static Describe(){
        return "This is person class"
    }
    static describe = "This is person";
    get fullName(){
        return `${this.fname} ${this.lname} - ${this.age}`
    }
    set fullName(fullname){
        const [fname,lname] = fullname.split(" ")
        this.fname = fname;
        this.lname = lname;
    }
    details(){
        return `${this.fname} ${this.lname} - ${this.age}`;
    }
    sing(){
        return "lal la allas  lalsal sas la";
    }
}

const person = new  Person("Clint","Matehws",12)
console.log(person.fullName)
console.log(person.details())
// Error static methods need to be called using class not instance
// console.log(person.Describe())
console.log(Person.Describe());
console.log(Person.describe);
