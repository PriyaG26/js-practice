//Dates
let mydate=new Date()
console.log(mydate) //very unreadable format
console.log(mydate.toString()); //better and more readble
console.log(mydate.toLocaleDateString());
console.log(typeof mydate); // since we made an object, therefore datatype of mydate is object

let customdate=new Date(2023,0,23) //months start from 0, Format: YYYY/MM/DD
//further we can give arguments for hour, minutes and seconds as well
//if you just give 23 as the year, it will assume it as 1923
console.log(customdate.toString());

let customdate1=new Date("2023-01-23") // moth starts from 1 in this format
console.log(customdate1.toLocaleDateString());

let customdate2=new Date("23-01-2023") //indian Format

let myTimeStamp=Date.now()
console.log(myTimeStamp); //returns the value of time in milliseconds since 1 jan 1970 till now
console.log(customdate.getTime()); // returns the value of time in milliseconds since 1 jan 1970 till the given date
//further we can compare these 2 values, mainly used in recording time stamps 

console.log(Math.floor(Date.now()/1000)); // dividing by 1000 gives the value in seconds instead of ms. Also, math.floor ensures that we take the floor value

let newdate=new Date()
console.log(newdate.getDate()); // returns the day, similarly we can also extract other info as well
console.log(newdate.getMonth()+1) // tho it returns 0 on jan, we do +1 to not confuse the user

newdate.toLocaleString('default', {
    weekday: "long"
}) //basically we can alter the format in which the date is printed, default is for format(indian/us etc) and weekday is to mention any alterations in the format
