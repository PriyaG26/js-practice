const regularUser={
    fullname:{
        username:{
            firstname: "priya",
            lastname: "garg"
        }
    }
}
console.log(regularUser.fullname) // gives the whole nested object
console.log(regularUser.fullname.username) // reduces nesting to one level
console.log(regularUser.fullname.username.firstname) // return only priya

console.log(regularUser.fullname?.username.firstname) // we can use a ques mark, bcz sometimes full name or any other thing might not exist, so if we're unsure, then we put ques mark, otherwise we will have to use multiple if else statements

const obj1={1:'a', 2:'b'}
const obj2={3:'a', 4:'b'}
const obj3={obj1,obj2} // cannot do like this, basically it makes an object of object just like in merging of arrays
console.log(obj3);

const obj4={1:'a', 2:'b'}
const obj5={3:'a', 4:'b'}
const obj6={5:'a',6:'b'}
const obj8=Object.assign({},obj4,obj5,obj6) //both these lines are for merging the two/three objects
const obj7=Object.assign(obj4,obj5)
//difference:
//the syntax of assign method is Object.assign(target,source1, source2,...)
//for obj 7, data of obj5 is getting merged into obj4 which is then getting assigned to obj7
//for obj8, target is an empty array and obj4,5,6 are acting as different sources, hence, an empty object is getting manipulated
console.log(obj8);
console.log(obj7);

//most commonly used method- spread operator
const obj9={...obj4, ...obj5, ...obj6} //contents get spread into separate elememts and then merged into one
console.log(obj9);

//generally from DB, we get the data in the form of array of objects
const dbdata=[
    {
        id:657,
        email:1
    },
    {
        id:658,
        email:2
    },
    {
        id:659,
        email:3
    }
]

dbdata[1].email //can be used freely now
//for any object, we can use Object.keys(ObjectName) method to get all the keys in the form of an ARRAY which can be used further
//similary we can also use Object.values(ObjectName)

console.log(Object.entries(dbdata)); //all the elememts get converted to an array of key and value pair arrays

console.log(dbdata.hasOwnProperty('email')); // to check if a particular property exists or not