class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log("Eating!");
    }
}
const animal1 = new Animal("Deer",27);
console.log(animal1)
animal1.eat();
console.log(Object.getPrototypeOf(animal1));
class Cat extends Animal{}
const cat = new Cat("Cat",12);
console.log(cat);
cat.eat();
console.log(Object.getPrototypeOf(cat));
class Dog extends Animal {
    constructor(name,age,bark){
        super(name,age);
        this.bark = bark
    }
    // Overriding existing function
    eat(){
        console.log("!Eating!");
    }
    barking(){
        console.log(this.name, this.bark)
    }
}
const dog = new Dog("Dog",12,"Haha");
console.log(dog);
dog.eat();
dog.barking();
console.log(Object.getPrototypeOf(dog));