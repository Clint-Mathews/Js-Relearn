// When commented since it is in the global no lexical environment to check, will return not defined
const myVal = 0
function Outer() {
    // When commented will check if the variable exists in the lexical environment of Outer ie global
    // const myVal = 1
    const inner = function() {
        // When commented will check if the variable exists in the lexical environment of inner ie Outer, global
        // const myVal = 2
        const innerInner = () => {
            // When commented will check if the variable exists in the lexical environment of innerinner ie outer, inner and global
            // const myVal = 3
            console.log(myVal);
        }
        console.log(myVal);
        innerInner();
    }
    console.log(myVal);
    inner();
}
Outer();