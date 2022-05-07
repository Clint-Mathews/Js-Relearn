class Person{
    constructor(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    // Proprety rather than a method
    get fullName(){
        return `${this.fname} ${this.lname} - ${this.age}`
    }
    // setName(fname,lname){
    //     this.fname = fname;
    //     this.lname = lname;
    // }
    // Proprety rather than a method
    set fullName(fullname){
        const [fname,lname] = fullname.split(" ")
        this.fname = fname;
        this.lname = lname;
    }
}

const person = new  Person("Clint","Matehws",12)
console.log(person)
console.log(person.fname)
console.log(person.lname)
console.log(person.age)
console.log(person.fullName)
// person.setName("Clins","Matehws")
// console.log(person.fname)
// console.log(person.lname)
// console.log(person.age)
// console.log(person.fullName)
// person.fname = "Xcc"
// person.lname = "1ts"
// console.log(person.fname)
// console.log(person.lname)
// console.log(person.age)
// console.log(person.fullName)
// After using get we can use a methoud like a property
//console.log(person.fullName())

person.fullName = "Clins Mathews"
console.log(person.fname)
console.log(person.lname)
console.log(person.age)
console.log(person.fullName)