const users = {
    name : "users", age:123,
    about: function(){
        console.log(this.name,this.age);
    }
}
users.about();
const users1 = {
    name : "users1", age:2,
    // Short syntax for method
    about() {
        console.log(this.name,this.age);
    }
}
users1.about();