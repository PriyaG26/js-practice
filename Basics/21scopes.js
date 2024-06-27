let a=10
const b=20
var c=30


//anything here is called global scope
// {} //indicates scope
if(true){ //anything inside the curly braces is called block scope
    let in_a=10
    const in_b=20
    var in_c=30
    let a=200 // these 2 lines will neither give any error, not go out of the scope
    const b=4000
}
//now if at this point, i try to access in_a and in_b, then compiler will say that these are not defined, which is desired output bcz in_a and in_b are inside the block scope
//but, if i try to access in_c, then it won't throw any error, this shouldn't have happened
//Now this might arise a problem to programmer if var in_c is declared outside and this if block is getting imported from some file


//imp: global scope in browser->inspect is different from the one we use through node(here in code editor)