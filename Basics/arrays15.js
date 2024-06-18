const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc) //uncomment this
// console.log(marvel); // basically dc becomes a datatype for marvel and hence get pushed into marvel array as 4th element as a whole
// console.log(marvel[3][1]); // not a desirable way for merging and accessing

// marvel.concat(dc) // gives the same output as push
// concat actually returns a new array, since we didnt store it above in any array, it got stored into marvel only
const all=marvel.concat(dc) //this does a desirable work of pushing the elements of dc(not the whole array as one element)
console.log(all);
console.log(marvel);

//an easier and more convenient way of doing the above task is to use spread operator (remenber breaking of glass example)
const allnew=[...marvel, ...dc] //... means that all the elemnets of this array have become single separate elements
console.log(allnew);
//advantage of spread operator is that we can merge as many arrays as we want which cannot be done using concat

const unusable=[1,2,3[4,5,6], 7,[6,7,[8,9]], 9] // a very rare situation when we get stuck with arrays with array of different depths(depth is number of arrays inside array)
const usable=unusable.flat(Infinity) // returns a new array resolving the unusable array into one single array with no arrays inside arrays
// we have to give an integer (indicating to which depth the program must resolve the array, we can simply give infinity, tho its not good)
console.log(usable);

//many times from webpages we get data in undesirable format(nodelist, object, strings etc)
console.log(Array.isArray('priya')); // returns a boolean value if the given arg is array or not
console.log(Array.from('priya')); // returns ["p", "r", "i", "y", "a"]
console.log(Array.from({name:"priya"})); //returns empty bcz it is not able to unpack this format and not able to judge whether the array should be formed of keys or values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //returns a new array from a set of elements passed as arguments