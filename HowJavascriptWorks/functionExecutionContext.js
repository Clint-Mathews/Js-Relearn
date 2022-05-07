let foo = "foo"
console.log(foo)
function getFullName(fname,lname){
    console.log(arguments)
    let myVar = "var inside function"
    console.log(myVar)
    const fullName = fname + " " + lname
    return fullName
}
const personName = getFullName("Clint","Mathews")
console.log(personName)