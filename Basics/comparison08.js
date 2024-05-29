// these operations work normally
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2">1); //gives true: "2" is converted to integer
console.log("02">1); // gives true: same reason
//it is preferable not to use differeing datatypes to maintain consistency and predictability

console.log(null>0);//false:0(null) is not greater than 0
console.log(null==0);//false: null is not equal to zero
console.log(null>=0);//true: 0(null) is equal to 0
//equality check == and comparison operators work differently
//comparisons convert null to a number, treating it as 0

//undefined compared with any number always gives false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

//=== strict check 
console.log("2" === 2); //false: checks the equality as well as datatype; doesn't allow different datatype