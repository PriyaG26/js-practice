//DeStructuring of objects
const course={
    name:"JS",
    price:999,
    Instructor:"hitesh"
}

//for accessing any value like price, we will again and again have tow write course.price, to avoid thta, we destructure the object, i.e. store our required value into some variable
const{Instructor}=course // we save the value of course.Instructor into Instrctor which can be used in later functioning
console.log(Instructor); // the curly braces above tell us which value to fetch

const{Instructor:inst}=course // here, we are fetching the Instrcutor value of course object but storing it into inst for convenience
// here Instructor is the value to be fetched whereas inst is the container where we are storing it
console.log(inst);

//when we use APIs, it returns some values, earlier it used to be in XML format, but now, it return a json format which is an unnamed object in simple words
// {
//     "name":"priya",
//     "age":"20",
// } // this is json format

//here, the key as well as values hae to be in a string format only
//sometimes it can be an array as well, which has several objects inside it, and we need to unpack that data

//randomuserme api, json formatter tool can help us recognise and classify the data in a readable mannner