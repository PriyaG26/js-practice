//Immediately invoked function Expression (IIFE) - functions that get invoked on their own, they don't need any explicit fucntion call to start their execution
//Use case
// 1. Database Connectivity: We want our database to get connected/loaded as soon as our app starts
// 2. Global scope: SOmetimes we don't want any global entity to pollute/interfere with some particular data, so we define a separate scope for such part of code

function chai(){
    console.log("DB connected");
}

chai(); //this DB connection use case doesn't craete much problem, but the 2nd use case does create a problem 

//idk why the program isn't working when the above function is uncommented
//okay i got it, basically, JS automatically inserts ; after any statement that it thinks ends here
//while interpreting above line (i didn't put a ;) it interpreted the iife as a part of chai function call: chai()(iife)
//this means that first chai() is getting called, then the result of chai is getting called as a function in which another function code is passed
//now, chai returns undefined, and undefined is not a function, therefore it was giving an error

//IIFE
(function code(){
    //named IIFE
    console.log("DB connected in IIFE");
})();

//similarly as the above scenario happened, it is important to put ; after the iife, bcz iife doesn't know the context of scope and if ; is not used, then it interferes with other functions
//; puts an end to that line

//ANother way to make an iife using arrow function but make sure that the previous statement must be having a ;
( ()=>{
    //Unnamed IIFE
    console.log("DB connected in IIFE arrow");
})(); //first set of parentheses is for function definition, last set of parenthese is to call the function

//passing a value in IIFE
( (name)=>{
    console.log(`Hi, ${this.name}`);
})("Priya"); //this gives undefined in name

( (name)=>{
    console.log(`Hi, ${name}`);
})("Priya"); //runs well