const name="Priya"
const repoCount=50
// console.log(name+repoCount+"Value") //very bad syntax and not used

//more readbale and commonly used syntax, we can even use string methods here
console.log(`Hi my name is ${name} and my repo count is ${repoCount}`) //`` does string interpolation and basically creates placeholders for the variables
//the strikethrough is because of typescript

const getname=new String("Priya") // object of string
//when we run this on browser console, then we can see that "Priya" is stored in getname as a key value pair
//{0:"P", 1:"r"...}, also we get many methods which we can use to alter the string and a length attribute as well

console.log(getname.length) //this is an attribute and not a method
console.log(getname.toUpperCase()) //this is an attribute and not a method

//try out all the methods of strings

const subname= getname.substring(0,4) //negative indexes dont work
const subname2= getname.slice(-2,4) //negative indexes work


//trim method removes white space, line terminator(\n) from the string

