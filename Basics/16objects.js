//there are two ways of declaring an object: as a literal and as a constructor
//singleton: when an object is created using constructor, then that object is the only existence of itself, there are no other copies
//whenever created as a literal, it is not singleton

//Declaring Object as Literals

const mysymb=Symbol("key1")

const Jsuser={
    name:"priya",
    "full name":"priya garg",
    //mysymb="mykey1", //this doesnt give error but is actually wrong bcz the compiler percieves mysymb as a string here
    [mysymb]:"mykey1", //this is correct bcz here, it refers to the fact that mysymb is a symbol that we declared above
    age:20,
    location: "Delhi",
    email:"priya@gmail.com",
    isLoggedIn:false,
    lastLogin:["Monday", "Saturday"] //another object (array here) can be given as a data inside the declared object
} 
//the keys here are automatically percieved as a string
//we just have to do this 😂these curly braces is the object, if there's no data, then it is considered as empty object

//accessing the object
console.log(Jsuser.email);//not a good way of accessing the data(but generally accessed this way only), why? we cannot access the key "full name"
console.log(Jsuser["email"]); //here inside the brackets, we have to give the key as a string only, also this way, we can access "full name as well"

// console.log(Jsuser.mysymb);// if we do this using the first type of declaration, then mysymb is percieved as a string and for sen=cond type, this doesnt work at all
console.log(Jsuser[mysymb]);//this is only valid for 2nd type of declaration, also, there has to be no " "

//changing values in object
Jsuser.email="priya26@gmail.com"
// Object.freeze(Jsuser) //Freezes the object so that no further changes can be made
// Jsuser.email="priya26@yahoo.com" // this doesnt give any error but the change is not propogated into the object
console.log(Jsuser);
//also, when the object above is printed, the symbol mysymb is printed as : [Symbol(key1)]: 'mykey1' i.e. the value of mysymb as a symbol


//we can even add a function as a data in the object
Jsuser.greeting=function(){
    console.log("Hello JS user");
}

//for referencing to a particular data/property of the object created 
Jsuser.greetingagain=function(){
    console.log(`Hello JS user, ${this.name}`); //when we write this. then we can access the properties of the object Jsuser
}

console.log(Jsuser.greeting); // returns [Function (anonymous)] which means that function is not executed yet, but a reference of that function is returned back
console.log(Jsuser.greeting());// calls the function, prints Hello Js user and also gives "undefined", will talk about it later
console.log(Jsuser.greetingagain()); // calls the function, prints hello js user, priya, basically we're able to access the name property, also gives undefined
console.log(Jsuser);