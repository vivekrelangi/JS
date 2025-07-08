let name1="Arnold"; 
let age=65; 
let country="USA"; 
let obj={name1,age,country}; 
console.log(obj)

// //Literal property without shorthand 
// function createCourse(name, status) {
//     return {type: "JavaScript", name: name, status: status};
// }
// function reviewCourse(name) {
//     return {type: "JavaScript", name: name};
// }
/*Literal property with shorthand 
when the property and the value identifiers have the same name,  
the identifier can be omitted to make it implicit*/
function createCourse(name, status) {
    return {type: "JavaScript", name, status};
}
function reviewCourse(name) {
    return {type: "JavaScript", name};
} 

c=createCourse('a','completed');
r=reviewCourse('b')
console.log(c,r)
let dynamicProperty = "age";
let personalDetails = {
    name: "Stian Kirkeberg",
    country: "Norway",
    [dynamicProperty]: 45
};
console.log(personalDetails.age);   //Output: 45 

function Car(name, model, color, numberOfGears, currentSpeed, currentGear) { 
        //-------------States of the object--------- 
        this.name = name; 
        this.model = model; 
        this.color = color; 
        this.numberOfGears = numberOfGears;
        this.currentSpeed = currentSpeed; 
        this.currentGear = currentGear; 
        //-------------Behaviour of the object--------- 
        this.accelerate = function (speedCounter) {
            this.currentSpeed = this.currentSpeed + speedCounter; 
            return this.currentSpeed; 
        }
        this.brake = function (speedCounter) { 
            this.currentSpeed = this.currentSpeed - speedCounter; 
            return this.currentSpeed; 
        } 
    } 

fobj=new Car('tata','nano','green',5,100,5);
console.log(fobj.name,fobj.accelerate(2),fobj.brake(50),fobj["model"])    

let candidateSelected={
	Name:'Rexha Bebe',
	Qualification:'Graduation',
};
let SelectedAs={
	jobTitle:'System Engineer',
	location:'Bangalore'
};
let employeeInfo={
	...candidateSelected,
	...SelectedAs
};
console.log(employeeInfo); 
/*
{
  Name: 'Rexha Bebe',
  Qualification: 'Graduation',
  jobTitle: 'System Engineer',
  location: 'Bangalore'
} 
*/

let originalObj = { one: 1, two: 2, three: 3 };
let clonedObj = { ...originalObj };
/*
Here spreading the object into a list of parameters happens 
which return the result as a new object 
checking whether the objects hold the same contents or not 
*/
console.log(JSON.stringify(originalObj) === JSON.stringify(clonedObj)); // true 
//checking whether both the objects are equal 
console.log(originalObj === clonedObj); // false (not same reference) 
//to show that modifying the original object does not alter the copy made 
originalObj.four = 4;
console.log(JSON.stringify(originalObj)); // {"one":1,"two":2,"three":3,"four":4} 
console.log(JSON.stringify(clonedObj)); // {"one":1,"two":2,"three":3} 

// let myObject = { name: 'Arnold', age: 65, country: 'USA' };
// let { name, age:currentAge } = myObject; //alias can be used with : 
// console.log(name); 
// console.log(currentAge); 
// //OUTPUT: Arnold 65 

let myObject = { name: 'Marty', age: 65, country: 'California' }; 
function showDetails({ country }) { 
    console.log(country); 
} 
showDetails(myObject);  //invoke the function using the object 
//OUTPUT: California 
console.log({p: 1})

let user = { 
        name: "Rexha", 
        age: 24, 
        isConfirmed: true 
    }; 
    for (let key in user) {
        // keys 
        console.log(key);  // name, age, isConfirmed 
        // values for the keys 
        console.log(user[key]); // Rexha, 24, true 
    } 

    let dateObject3 = new Date(); 
console.log("Date is: " + dateObject3);
//OUTPUT: Date is: Thu Jun 18, 2020, 22:17:36 GMT+0530 (India Standard Time) 

let  dataObject2 = new Date(2020, 5, 18, 22, 20, 23, 0o0); 
console.log("Date is: "+dataObject2); 
//OUTPUT: Date is: Thu Jun 18, 2020, 22:20:23 GMT+0530 (India Standard Time) 

let dateObject1 = new Date(); 
console.log("Date is: " + dateObject1.getDate()); 
console.log("Day is: " + dateObject1.getDay()); 
console.log("Year is: " + dateObject1.getYear()); 
console.log("Horrs: " + dateObject1.getHours()); 
console.log("Month is: " + dateObject1.getMonth()); 
console.log("Time is: " + dateObject1.getTime()); 
console.log("Millisecond: " + dateObject1.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 18 
Day is: 4 
Year is: 120 
Horrs: 22 
Month is: 5 
Time is: 1592499518512 
Millisecond: 512 
*/ 

let dateObject4 = new Date(); 
dateObject4.setDate(3); 
dateObject4.setYear(1996); 
dateObject4.setHours(8); 
dateObject4.setMonth(7); 
dateObject4.setMilliseconds(2000); 
 
console.log("Date is: " + dateObject4.getDate()); 
console.log("Year is: " + dateObject4.getYear()); 
console.log("Hours: " + dateObject4.getHours()); 
console.log("Month is: " + dateObject4.getMonth()); 
console.log("Millisecond: " + dateObject4.getMilliseconds()); 
/* 
OUTPUT: 
Date is: 3 
Year is: 96 
Hours: 8 
Month is: 7 
Millisecond: 0 
*/ 

let myString = "Welcom to JavaScript Session"; 
console.log("Length is: " + myString.length); 
/*OUTPUT: returns Length is: 28,  
space between words are also considered as a character*/ 
// let myString = "Hello World"; 
console.log("Character at position 4 is : " + myString.charAt(3)); 
//Returns: Character in position 4 is: c

let myStr1 = "Hello"; 
let myStr2 = " "; 
let myStr3 = "World"; 
console.log("Concatenated string: "+myStr1.concat(myStr2,myStr3)); 
//Returns: Concatenated string: Hello World 
 

let myString2 = "Hello World"; 
console.log("Index of character l is : "+myString2.indexOf('l')); 
//Returns: Index of character l is : 2 


let myStr = "Are you enjoying JavaScript? you."; 
console.log(myStr.match(/you/)); 
/*Returns an array: 
[ 
  'you', 
  index: 4, 
  input: 'Are you enjoying JavaScript?', 
  groups: undefined 
] 
*/
console.log("string found at index position: "+myStr.match(/you/).index);
/*Returns:  string found at index position: 4*/ 
myStr=myStr.replaceAll('you','they')
console.log(myStr)

let myString5 = "can you find it?"; 
console.log("Occurrence of find in statement1: "+myString5.search('find')); 
let myString6 = "Or you can not?"; 
console.log("Occurrence of find in statement2: "+myString6.search('find'));
/*Returns: 
 The Occurrence of find in statement1: 8, 
 The Occurrence of find in statement2: -1*/ 

let myString7 = "Hello World"; 
console.log("Split string based on spaces: "+myString7.split(" ")); 
//Returns: Split of string based on spaces: Hello,World 

let myString8 = "Hello World"; 
console.log("Slicing using 2 parameters: "+myString8.slice(0,5)); 
console.log("Slicing using 1 parameter: "+myString8.slice(5)); 
/*Returns:  
Slicing using 2 parameters: Hello, 
Slicing using 1 parameter: World*/ 

let myString9 = "Hello World"; 
console.log("Substring using 2 parameters: "+myString9.substring(2,5)); 
console.log("Substring using 1 parameter: "+myString9.substring(5,-2)); 
/*Returns: 
Substring using 2 parameters: llo 
Substring using 1 parameter: World*/ 

let myString10 = "Hello World"; 
console.log("Substr using 2 parameters: "+myString10.substr(2,5)); 
console.log("Substr using 1 parameter: "+myString10.substr(5)); 
console.log(myString10.toLowerCase(), myString10.toUpperCase())
/*Returns: 
Substr using 2 parameters: llo W 
Substr using 1 parameter: World*/ 

