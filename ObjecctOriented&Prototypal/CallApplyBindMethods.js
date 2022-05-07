function hello(){
    console.log("Hello")
    console.log(this)
}
hello.call()


const user1 = {
    name: "Clint", age:123,
    about: function(hobby){
        console.log(this.name, this.age,hobby);
    }
}
const user2 = {
    name: "XCVCV", age:34
}

user1.about.call(user1,"hello");
user1.about.call(user2,"hello2");
user1.about.apply(user1,["hello"]);
user1.about.apply(user2,["hello2"]);

const funcc = user1.about.bind(user1,"hello");
const funcc1 = aboutMe.bind(user2,"hello");

function aboutMe(){
        console.log(this.name, this.age);
}
const user5 = {
    name: "user5", age:4,
}
const user8 = {
    name: "user8", age:7
}

aboutMe.call(user5);
aboutMe.call(user8);

funcc();
funcc1();