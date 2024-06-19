let score_string = "30"
console.log(typeof score_string)
console.log(typeof(score_string)) //another way to know the type

let valueInScore = Number(score_string) //for type conversion, here string to Number
console.log(typeof valueInScore) //returns the value 30


let age_nan = "20abc"
let valueInAge = Number(age_nan) 
console.log(typeof valueInAge) //will return the type as Number but the value in age is not actually a number
console.log(valueInAge) //will return NaN -> Not a Number


let val_null = null
let valueInNull = Number(val_null) 
console.log(typeof valueInNull) //will return the type as Number but the value in var is empty/null
console.log(valueInNull) //will return 0


let val_ud = undefined
let valueInUd = Number(val_ud) 
console.log(typeof valueInUd) //will return the type as Number but the value in var is not defined
console.log(valueInUd) //will return NaN


let val_bool = true
let valueInBool = Number(val_bool) 
console.log(typeof valueInBool) //will return the type as Number but the value in var is true/false i.e. boolean
console.log(valueInBool) //will return true -> 1, false -> 0

let isLoggedIn = 1
let BooleanisLoggedIn = Boolean(isLoggedIn)
console.log(BooleanisLoggedIn) //return true


let isLoggedIn1 = ""
let BooleanisLoggedIn1 = Boolean(isLoggedIn1)
console.log(BooleanisLoggedIn1) //returns false


let isLoggedIn2 = "priya"
let BooleanisLoggedIn2 = Boolean(isLoggedIn2)
console.log(BooleanisLoggedIn2) //returns true

//for conversion to str -> use String