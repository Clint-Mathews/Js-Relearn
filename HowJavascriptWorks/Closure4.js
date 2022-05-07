function myFunc(){
    let check = true;
    return function(){
        if(check){
            console.log("Function was called")
            check = false;
        } else {
            console.log("Function already done calling")
        }
    }
}
// myFunc = () => {
//     let count = 0;
//     return () => {
//         if(count == 0){
//             console.log("Function was called")
//         } else {
//             console.log("Function already done calling")
//         }
//         count++;
//     }
// }
const func  = myFunc()
func();
func();
func();

const func1  = myFunc()
func1();
func1();
func1();