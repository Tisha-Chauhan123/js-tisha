//primitive datatypes 7:number,string,boolean,null,undefined,symbol,BigInt

const score = 100
console.log(score)

const scoreValue = 100.3
console.log(scoreValue);

const isLoggedIn = false
console.log(isLoggedIn);

const outsideTemp = null
console.log(outsideTemp);

let userEmail;
console.log(userEmail);

let BigInt = 12234033040023n
console.log(BigInt);

const id = Symbol('123')

//non-primitive data-types: Arrays, objects, functions

const heros = ["ajay", "kartik", "AlluArjun", "RamCharan"]
let myObj = {name:"ad" , age:50}

const myFunction = function(){
    console.log("Hello world");
}

let myName = "Tisha"
let anotherName = myName

anotherName = "Chauhan"
console.log(myName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "tisha@google.com"

console.log(userOne.email);
console.log(userTwo.email);