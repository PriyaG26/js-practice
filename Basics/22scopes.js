//Nested Scope

function one(){
    const username="priya"
    function two(){ //doesn't get executed if two() call is never made
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //gives error, since the compilation is line by line, therefore, it never reached the next statement, hence two never got called
    two()
}

one()

//whenever a func is called, a separate call stack is made for that call

if(true){
    const username="priya"
    if(username==="priya"){
        const website = "yt"
        console.log(username+website);
    }
    // console.log(website); //throws error
}
// console.log(username); //throws error


//-----------------------------------interesting-----------------------------------------------------

addone(5) //doesn't throw any error, it can very well access the function addone before declaration
function addone(num){
    return num+1;
}

addone(5)

addtwo(6) //gives an error : Cannot acess addtwo before initialisation, this is actually realted to a concept called HOISTING
//JS treats the variables and some expression differently
const twoadd=function addtwo(num){ //
    return num+1;
}
addtwo(6)