let numArr = [1, 2, 3, 4];
let empArr = ["Johnson", 105678, "Chicago"];
// let numArr = [1, 2, 3, 4];
console.log(numArr[0]); //1
console.log(numArr[3]); //4
console.log(empArr)
// let color = ["Red", "Orange", "Green"]
let color = new Array("Red", "Orange", "Green");
let colors = new Array(2);
console.log(colors.length); //2
//Assign values to an empty array using indexes
colors[0] = "Red";
colors[1] = "Green";
console.log(colors); //['Red','Green']
let numAr = [10, 5, 20];
//spread turns array into the list of arguments
console.log(Math.max(...numAr)); // 20 

let arr1 = [3, 5, 1];
let arr2 = [8, 2, 6];
// let newArr = [...arr1, ...arr2];
// console.log(newArr); // [3,5,1,8,2,6]
let newArr = [0, ...arr1, 4, ...arr2];
console.log(newArr); // [0,3,5,1,4,8,2,6]

let arrCopy = [...arr1];
arrCopy.push(4);
console.log(arrCopy);
//arrCopy becomes [3,5,1,4] and arr1 remains unaffected

// // [RN1] we have an array with the employee name and id
// let empAr = ["Shaan", 104567];
// // destructuring assignment
// // sets empName = empArr[0]
// // and empId = empArr[1]
// let [empName, empId] = empAr;
// console.log(empName); // Shaan
// console.log(empId);  // 104567

let [empName, , location] = ["Shaan", 104567, "Bangalore"];
//Here second element of array is skipped and third element is assigned to location variable
console.log(empName); // Shaan
console.log(location);  // Bangalore

let [empNam, ...rest] = ["Shaan", 104567, "Bangalore"];
console.log(empNam); // Shaan
console.log(...rest);  // [104567,'Bangalore']

let arr = ["first", "second", "third"];
console.log(arr[0]); //first
console.log(arr[1]); //second
console.log(arr[3]); //undefined
console.log(arr[2])

let colours = ["Red", "Orange", "Green"];
for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}
//Red
//Orange
//Green
console.log(colours.splice(1,1),colours)

// let myArray = ["Android", "iOS", "Windows", "Linux"];

// let result = myArray.find(element => element.length > 5);

// console.log(result); //Android 
// let myArray = ["Android", "iOS", "Windows"];

// myArray.push("Linux");

// console.log(myArray);

// // ["Android","iOS","Windows","Linux"]

// let myArray = ["Android", "iOS", "Windows"];

// console.log(myArray.pop()); // Windows

// console.log(myArray); // ["Android","iOS"]

// let myArray = ["Android", "iOS", "Windows"];

// console.log(myArray.shift()); //Android

// console.log(myArray); //["iOS", "Windows"]

// let myArray = ["Android", "iOS", "Windows"];

// myArray.unshift("Linux"); 

// console.log(myArray);

// //["Linux","Android","iOS","Windows"]

// let myArray = ["Android", "iOS", "Windows"];

// //inserts at index 1

// myArray.splice(1, 0, "Linux"); 

// console.log(myArray); 

// // ["Android","Linux", "iOS", "Windows"]

// let myArray1 = ["Android","iOS"];

// let myArray2 =  ["Samsung", "Apple"];

// console.log(myArray1.concat(myArray2));

// //["Android", "iOS", "Samsung", "Apple"]

// let myArray = ["Android","iOS","Windows","Linux"];

// console.log(myArray.indexOf("iOS")); // 1

// console.log(myArray.indexOf("Samsung")); 

// //-1

// let myArray = ["Android", "iOS", "Windows", "Linux"];

// let result = myArray.findIndex(element => element.length > 5);

// console.log(result) //0

// let myArray = ["Android", "iOS", "Windows", "Linux"];

// let result = myArray.filter(element => element.length > 5);

// console.log(result)

// //["Android","Windows"]

let myArray = ["Android", "iOS", "Windows"];

myArray.forEach((element, index) => 

console.log(index + "-" + element));

//0-Android

//1-iOS

//2-Windows

//3-Linux
myArray.forEach((ele,i,myArray)=>{console.log(ele,i,myArray)})
let numA = [2, 4, 6, 8];

let result = numA.map(num=>num/2);

console.log(result);

//[ 1, 2, 3, 4 ]

let myAr = ["Android", "iOS", "Windows"];

console.log(myAr.join()); 

// Android,iOS,Windows

console.log(myAr.join('-'));

 // Android-iOS-Windows

const nmAr = [1, 2, 3, 4];

// 1 + 2 + 3 + 4

console.log(nmAr.reduce(

(accumulator, currentVal) => 

accumulator + currentVal));

// 10

// 5 + 1 + 2 + 3 + 4

console.log(nmAr.reduce(

(accumulator, currentVal) => 

accumulator + currentVal,5));

// 15