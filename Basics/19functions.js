//function declaration
function saymyname(){
    console.log("priya");
}

// saymyname //this is a function reference
saymyname() //when we give parentheses, it becomes a function call/execution

function add(num1, num2){//in js, we don't need to give the datatype of formal argument
    num1=num1+num2;
    console.log(num1);
}

add() // if we just execute this, it gives NaN, bcz we didn't pass any arg so compiler didn't know which values to add
// basically num1 and num2 did not get any value ever, and any var which doesn't get any value has a dataype NaN/undefined

add(3,4)
add(3,"4") //returns 34
add(3,"a") //any string or null, creates a problem bcz we didn't put any condition to check the datatype of the formal arguments
//we can use an if else condition

//values in function call are called arguments, values in function definition are called parameters

let res=add(3,4) // here it prints 8 bcz of the console.log in the function, but value stored in result is undefined

function addition(num1, num2){//in js, we don't need to give the datatype of formal argument
    return num1+num2;
}
let result = addition(8,9) //now, since we returned the value from the function, the returned value got stored in the variable
console.log(result);

function userlogin(username){
    if(username===undefined){ //or we can write if(!username)
        console.log("enter a valid username");
        return //not returning anything
    }
    return `${username} just logged in`
}

console.log(userlogin("Priya")) // this prints Priya just logged in
console.log(userlogin()); //if the IF block doesn't exist in our function, it prints "undefined just logged in", to avoid this, we have put if-else block
 // empty string, undefined is considered as false

 //Default value to avoid a situation where it gives undefined
 function userlogin2(username="user"){
    if(username===undefined){ //this block will never execute now
        console.log("enter a valid username");
        return //not returning anything
    }
    return `${username} just logged in`
}

console.log(userlogin2()); //now it won't matter bcz it will print user just logged in, if a value is passed, then user gets overwritten
