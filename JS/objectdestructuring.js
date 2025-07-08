let myObject = { name: "Mark", age: 25, country: "India" };
function showDetails({ name, country }) {
	console.log(name, country); // Mark India
}
showDetails(myObject);
