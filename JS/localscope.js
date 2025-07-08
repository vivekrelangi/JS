function message() {
	//Local variable
	var greet = "Hello JavaScript";
	//Local variables are accessible inside the function
	console.log("Message from inside the function: " + greet);//Message from inside the function: Hello JavaScript
}
message();
//Local variable cannot be accessed outside the function
// console.log("Message from outside the function: " + greet);//Uncaught ReferenceError: greet is not defined


//Global variable
var firstName = "Mark";
function fullName() {
	//Variable declared without var has global scope
	lastName = "Zuckerberg";
	console.log("Full Name from inside the function: " + firstName + " " + lastName);
}
fullName();
console.log("Full Name from outside the function: " + firstName + " " + lastName);
//Full Name from inside the function: Mark Zuckerberg
//Full Name from outside the function: Mark Zuckerberg
