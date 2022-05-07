const user = {
    name : "Clint", age: 12,
    about: function(){
        console.log(this.name,this.age);
    }
}

user.about();
// Reference stored
const funcc = user.about;
// Object this refers windows object
funcc();
// instead use bind
const funcWork = user.about.bind(user)
funcWork();