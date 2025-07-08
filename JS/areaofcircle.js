var r=4;
var r=2;
const pi=3.14;
// pi=1;
console.log(pi*r*r,typeof(pi));
let ownership="Rexha\"s";    //OR
// let ownership = 'Rexha's';   
// console.log(ownership)
// let firstName="Kevin"; 
// let lastName="Patrick";
// console.log("Name: "+firstName+" "+lastName+"\n Email:"+firstName+"_"+lastName+"@abc.com");
/*
OUTPUT:
Name: Kevin Patrick
Email:Kevin_Patrick@abc.com 
*/
let firstName="Kevin"; 
let lastName="Patrick";
console.log(`Name:${firstName} ${lastName}
Email: ${firstName}_${lastName}@abc.com`); //backticks are must for literals
/*
OUTPUT:
Name: Kevin Patrick
Email:Kevin_Patrick@abc.com 
*/
let custName; //here value and the data type are undefined 
console.log(typeof(custName))
let item = null;  
// variable item is intended to be assigned with object later. Hence null is assigned during variable declaration. 
// document.write(item==null); 
const bigintvar = 67423478234689887894747472389477823647n;
// OR
const bigintvar1 = BigInt("67423478234689887894747472389477823647");
const bigintFromNumber = BigInt(10); // same as 10n
console.log(bigintvar,bigintvar1,bigintFromNumber)
// alert(3n + 2n); // 5
// alert(7n / 2n); // 3
// alert(8n + 2); // Error: Cannot mix BigInt and other types
console.log(3n + 2n); // 5
console.log(7n / 2n); // 3
// console.log(8n + 2); // Error: Cannot mix BigInt and other types
let bigintvar2 = 6n;
let numvar = 3;
// number to bigint
// alert(bigintvar + BigInt(numvar)); // 9n
// // bigint to number
// alert(Number(bigintvar ) + numvar); // 9
console.log(bigintvar2+BigInt(numvar))
console.log(Number(bigintvar2)+numvar)
if(2===2.0){
    console.log("yes")
}