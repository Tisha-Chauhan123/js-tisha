// Object literals
const JUser = {name: "Tisha",age:21,location:"Jamnagar",[mySym]:"mykey", email:"Tisha@google.com",isLoggedIn:false}

console.log(JUser.email)
console.log(JUser["email"])

const mySym = Symbol("key1")
console.log(JUser[mySym]) //symbol

JUser.location = "Mumbai"
Object.freeze(JUser)

JUser.location = "Banglore"
console.log(JUser)

JUser.greeting = function(){
    console.log("Hello JS User")
}

console.log(JUser.greeting())

JUser.greetingSecond = function() {
    console.log(`Hello JS user, ${this.location}`)
}

console.log(JUser.greetingTwo())