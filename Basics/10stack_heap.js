//Two types of memory are :
//1. Stack: for Primitve dataypes; for every variable we get a copy of it; any change will occur in the copy of the variable
//2. Heap: for non primtive datatypes; for every variable, we get a reference; any change will change the original value


let myName="Priya" //this is a primitve datatype so its value is stored in stack
let myAnotherName=myName // this is also primitve so its value is also in stack
myAnotherName="PG"
console.log(myAnotherName)
console.log(myName) //value doesnt change in myName bcz a copy of myName is being passed to myAnotherName

let userOne={
    email:"user@google.com",
    upi: "userOne@paytm"
} // this is not a primitve datatype, it is a struct sort of something, therefore it is stored in heap
let userTwo=userOne //now userTwo is also not primitve, even though their declaration is in the stack, the info is stored in heap and now the refernce was given to userTwo, so they point to the same reference
userTwo.email="priya@google.com" //since the user two refers to an item in heap, any change in it results in change of the info globally
console.log(userTwo)
console.log(userOne)