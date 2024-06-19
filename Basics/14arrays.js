const myarr=[1, 2, 3, 4, 5] //similar or different type of elements; this is method 1 of declaring an array
const myarr2=new Array(1,2,3,4,5) // another way of declaring an array
//arrays are resizable in JS
console.log(myarr[0]); //accessing the lements

//Shallow Copy-where original and formal arguments point to the same data(same reference point)
//Deep Copy-when original and formal arguments of same object refer to the different data copies(do not share same references)

//Array methods

myarr.push(6)
myarr.pop()//delete last element
myarr.unshift(9) // adds the element to the start of array; Problem: all elements have to be shifted
myarr.shift() // removes the first element of the array

//following methods return true/false
console.log(myarr.includes(6))
console.log(myarr.indexOf(1)) // return index in zero based indexing, otherwise -1 if element doesn't exist
console.log(myarr);

const newarr=myarr.join() // copies the contents of myarr into newarr and converts them to string
console.log(myarr); // returns [1,2,3,4,5] and the type of myarr is object
console.log(newarr); //returns 1,2,3,4,5 and the type of newarr is string

//slice and splice

console.log("Original before slice", myarr);
const sl=myarr.slice(1,3) //takes the elements present at index 1,2(3 not included) and stores it in sl
console.log("Sliced arr", sl)
console.log("Original after slice", myarr); //original array is not manipulated when we use slice

const sp=myarr.splice(1,3) //takes the elements present at index 1,2,3(upper limit included) and stores in sp
console.log("Spliced Arr", sp);
console.log("original after splice", myarr); // the spliced items are no longer in the original array, they are now stored in sp

//Hence, slice doesnt manipulate the array, whereas splice does
