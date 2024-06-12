const score = 400 //a general and common declaration
console.log(score) // prints 400 only

const balance=new Number(100) //creates an object of Number ans assigns 100 to it
console.log(balance) // prints [Number:100] i.e. explicitly mentions that this is a number

console.log(balance.toString()) // converts the number to a string and similary other methods are there as well. the data type of balance is changed to string and now we can use methos of strings
console.log(balance.toFixed(2)) // gives 100.00 i.e gives the value of precision upto 2 decimal points  

//toPrecision is a very complex method
//Eg. value is 12.8923 and precision is 3, then output will be 12.9
//value is 123.89 and precision is 3, then output is 124
// value is 1123.89 the output is 1.12e+3
