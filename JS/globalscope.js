//Global variable
var greet = "Hello JavaScript";
function message() {
	
	//Global variable accessed inside the function
	console.log("Message from inside the function: " + greet);
}
message();
//Global variable accessed outside the function
console.log("Message from outside the function: " + greet);
//Message from inside the function: Hello JavaScript
//Message from outside the function: Hello JavaScript
