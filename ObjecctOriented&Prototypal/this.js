console.log(this);
console.log(window);
console.log(window == this);
console.log(window === this);
function myFunc(){
    "use strict";
    console.log(this);
}
window.myFunc();
this.myFunc();