// on the basis of how data is stored and accessed from the memory, the datatypes are categorized into two types: Primitive and non primitive
//Primitive: String, Number, null, boolean, undefined, symbol, bigInt
//Reference/Non-Primitve: Arrays[inside square brackets], objects[inside curly braces], functions
//Dynamically typed language
const id=Symbol('123') //since we want it to be unique, return type is symbol
const anotherid=Symbol('123') //since we want it to be unique, return type is symbol
console.log(id==anotherid);

let myobj={
    name: "priya",
    age:20,
}
console.log(typeof(myobj));
//type of null is object

let myfun=function(){
    console.log("hi");
}
console.log(typeof(myfun)); //function: also known as object function