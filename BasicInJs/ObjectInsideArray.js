const users = [
    {
        userId:1,
        userName: "Clint",
        gender:'male'
    },
    {
        userId:2,
        userName: "Clins",
        gender:'male'
    },
    {
        userId:3,
        userName: "Clin",
        gender:'female'
    },
]

console.log(users)
console.table(users)

for(const user of users){
    console.log(user)
    // console.log(user.userId)
    //console.table(user)
}
console.log("Destructure");
const [user1,user2,user3] = users
console.log(user1)
console.log(user2)
console.log(user3)
const [user5,,user6] = users
console.log(user5)
console.log(user6)

const [{userName},,{gender}] = users
console.log(userName)
console.log(gender)

const [{userName : UserName},,{gender: Gender}] = users
console.log(UserName)
console.log(Gender)

// Key as a variable
const key ="userName"
const [{[key] : UName},,{gender: Gen}] = users
console.log(UName)
console.log(Gen)