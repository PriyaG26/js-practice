const accountId = 144553 
let accountEmail = "priya@gmail.com"
var accountPass = "12345" //let and var both are used to declare a variable only but its deprecated now
/* prefer not to use var bcz of issue in block scope and functional scope*/

accountCity = "Delhi" //can be used for declaring variables but prefer not to use
let accountState //JS says that this is undefined

// accountId=2 //not allowed bcz accountID is constant which means it's value cannot be changed throughout the program
accountEmail="pg@gmail.com"
accountPass="548485154"
accountCity="Jaipur"
// console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState]) //for printing many values at once
