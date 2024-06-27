//this keyword and arraw function came with ES6 update of JS in 2015

const user={
    username:"priya",
    price:999,

    welcomemsg:function(){
        // console.log(`${username}, welcome to website`); //can be done like this as well, but not preferred
        console.log(`${this.username}, welcome to website`);
        //over here, this keyword is used to refer to the current context (values that particular entities hold)
        console.log(this) //prints the attributes of user(current context)
    }
}

// user.welcomemsg //doesn't run like this
user.welcomemsg() //since it is a method
//here, if we change the value of any of the attributes in user, it gets manipulated

console.log(this); //returns empty object {}
//when we go to browser and run the above line, it says window. Why?
//bcz earlier, the only way to run js was browser bcz js engine was embedded in browser, nowadays, there are standalone engines like node to run js
//in browser, we get window, through which we're able to capture the window events

function one(){
    let user="priya"
    console.log(this); //gives many attributes (eg: global, getter, setter, clear etc) - this is w/o writing any element
    //after declaring user, it still gives the same output as above
    console.log(this.user); //gives undefined
    //it means that console.log(this works only in objects but not inside functions)
}
one()

//even if we initialise a varibale with a function like above, then also this.user will give undefined

//another way to declare a function, this or this.user still doesn't work here, this gives {} and this.user gives undefined
const another=() => { //the => is the arrow function
    let user="priya"
    console.log(this);//{}
    console.log(this.user); //undefined
}

//basic arrow function syntax: ()=>{}, we can hold this inside a variable as well

const addtwo1=(num1,num2)=>{
    return num1+num2
}


//there is an implicit way of using arrow function as well
const addtwo=(num1,num2) => num1+num2
console.log(addtwo(3,6));
//num1,num2 are the parameters and since we have one line statement, it considers that this statement is used to return only, therefore we don't need to write it, hence num1+num2 value will be automatically returned

const addtwo2=(num1,num2) => (num1+num2) //can be used for more clarity: parenthese is used
const addtwo3=(num1,num2) => { return num1+num2} // if we use {} then we have to write return keyword, otherwise it wont return the value

//advantage of using parentheses: returning an object
const addtwo4=() => {username:"oriya"} //doesm't throw any error but gives undefined in console, bcz ibjects cannot be returned like this, they have to be in a parentheses
console.log(addtwo4());