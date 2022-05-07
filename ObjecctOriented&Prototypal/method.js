function aboutme(){
    console.log(this);
    console.log(`${this.firstName} - ${this.age}`);
}

const person = {
    firstName: 'Clint',
    age: 10,
    about : aboutme
}

const person1 = {
    firstName: 'Xcs',
    age: 20,
    about : aboutme
}

console.log(person.about);
console.log(person1.about);

// this is global object
aboutme();

// this is person object
person.about();

// this is person1 object
person1.about();