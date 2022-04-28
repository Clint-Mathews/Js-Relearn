const user = {
    name : "Clint",
    age :10,
    address: { hno : 23}
}
console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.address)
//  If address commented out will show error here
console.log(user.address.hno)

// To fix this use optional chaining check value and consider nested objects 
console.log(user)
console.log(user?.name)
console.log(user?.age)
console.log(user?.address)
console.log(user?.address?.hno)
