let value=3
let negvalue=-value
// console.log(negvalue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3) // 2^3=8
// console.log(2%2) // all these give a value that can be calculated using general arithematic operations

let str1="hello"
let str2 = " Priya"
let str3=str1+str2
console.log(str3) //concatenates both strings

console.log("1" + 2) // gives output = 12 : 1st operand is string, so the other operand is also sort of type casted as a string
console.log(1+"2" ) // gives output = 12 : first whatever is at the left is evaluated and then concatenated with the right operand
console.log("1"+2+2) // gives output = 122 : expression is scanned left to right, so 1 concatenates with 2 making 12 a string which then concatenates with rightmost 2 making 122 a string
console.log(1+2+"2") // gives output = 32 : expression is scanned L to R, 1 adds with 2 making 3 an integer which then concatenates with 2 making it a string 32
console.log(3 + 4 * 5 % 3) //refrain from writing such a confusing code

console.log(true) // prints true
console.log(+true) //prints 1 : true was supposed to be incremented but it had to type cast first, refrain from writing this
//console.log(true+) //error
console.log(+"") //prints 0

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++
++gameCounter
console.log(gameCounter) // increments gameCounter


//refrain from using these tricky conversions as they're okay for studying purpose but not for practical purpose