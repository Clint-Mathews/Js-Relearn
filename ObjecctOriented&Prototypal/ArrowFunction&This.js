// My unwanted code
const user = {
    fname:"Clint",
    age:23,
    aboutArrow:()=>{
        console.log(this);
        console.log(this.fname,this.age);
    },
    aboutFn:function(){
        console.log(this);
        console.log(this.fname,this.age);
    }
}
// Normal Function this object
user.aboutFn();
// Arrow fn where object is a level up ie window object
// Will print undefined and window object
user.aboutArrow();

// we cannot use call() method with arrow it will use the same windows object
// Normal working
user.aboutFn.call(user);
// Arrow fn where object is a level up ie window object
// Will print undefined and window object
user.aboutArrow.call(user);