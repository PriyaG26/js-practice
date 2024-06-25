//sometimes we are not sure how many values will be passed to the function, for that we use REST operator
//rest and spread operator are basically same, but their use case determines their name
function calculateCartPrice(...num1){ // these 3 dots here mean that whatever the data is incoming, it should be packed into num1
    return num1;
}

console.log(calculateCartPrice(200,300,400,40000)); // we can pass any no. of arguments
//as a result of rest operator, the above line gives us an array of all these prices



//Passing objects into a function
const mydetails={
    name:'priya',
    age:20
}
function deets(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}
//need to be careful about the keys
deets(mydetails)

//objects can be passed directly
deets({
    name:"PRIYA", 
    age: "20"
})


//Passing an array to function
const newarr=[200,300,400]
function value(getarray){
    return getarray[1]
}