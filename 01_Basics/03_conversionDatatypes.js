let score="33"
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof (valueInNumber))

//Notes:
//"33"=> 33 (string to number)
//"true" => 1, "false" => 0
//"33abc" => NaN(not a number)

let score2="33abc"
console.log(typeof (score2))
let valueChanged = Number(score2)
console.log(valueChanged)

let isLoggedIn = 1
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof (BooleanisLoggedIn))