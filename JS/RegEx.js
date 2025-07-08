// to make sure that string has @ and .com 
let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
 
//to make sure that given number has digits between 0-9 and max length of 10 digits 
let phoneNumberPattern = new RegExp("(?= [0-9]{10})"); 
//to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 

// let emailPattern = new RegExp("(?=.*@)(?=.+.com)"); 
let emailString = "someone@xyz.com"
if(!(emailPattern.test(emailString))) { 
     console.log("Email Id is invalid! It should contain@ and .");
} 
else { 
    console.log("Email Id is Valid"); 
} 

let myPattern = /@gmail.com/; 
let myString="mark.christ@gmail.com"; 
console.log(myString.search(myPattern));
console.log(myString.replace(myPattern,'@facebook.com')); 
/* 
OUTPUT: 
11 
mark.christ@facebook.com 
*/ 


