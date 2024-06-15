const score = 400 //a general and common declaration
// console.log(score) // prints 400 only

const balance=new Number(100) //creates an object of Number ans assigns 100 to it
// console.log(balance) // prints [Number:100] i.e. explicitly mentions that this is a number

// console.log(balance.toString()) // converts the number to a string and similary other methods are there as well. the data type of balance is changed to string and now we can use methos of strings
// console.log(balance.toFixed(2)) // gives 100.00 i.e gives the value of precision upto 2 decimal points  

//console.log(balance.toprecision(3))
//toPrecision is a very complex method
//Eg. value is 12.8923 and precision is 3, then output will be 12.9
//value is 123.89 and precision is 3, then output is 124
// value is 1123.89 the output is 1.12e+3

const hundreds = 100000
// console.log(hundreds.toLocaleString("en-IN")) // when it is difficult to count the number of 0s, this method converts it to US number system by default, but for indian system, we can use en-IN

// number datatype provides a lot of methods(which we can see in browser console)
//min/max integer, min/max safe integer etc

//------------------------------------------MATHS-------------------------------------------------

//Math library is a default library of JS, we can see various method in browser console
// console.log(Math.abs(-1)) // makes the value +ve
// console.log(Math.round(4.4)) // rounds off the value to nearest int (4.5 will be rounded off to 5) to control the values, we can use ceil or floor methods
// console.log(Math.min(1,2,3,4,5,7)) // return min element in the array, similarly Math.max returns the largest element in the array

console.log(Math.random()) //generates a random value between 0 and 1
console.log((Math.random()*10) +1) // to ensure that we always get a value which is atleast 1
//we can even enclose this in math.floor to avoid a decimal value

const min=10
const max=20
// Very imp formula for when we want the value between some range
const result=Math.floor(Math.random() * (max - min + 1)) + min // for getting a min value as 10, we add min(just like we added 1 above to ensure the value is atleast 1)
console.log(result); 
