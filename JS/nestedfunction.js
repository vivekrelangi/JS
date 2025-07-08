function giveMessage(message) {
	let userMsg = message;
	function toUser(userName) {
		let name = userName;
		let greet = userMsg + " " + name;
		return greet;
	}
	userMsg = toUser("Bob");
	return userMsg;
}
console.log(giveMessage("The world says hello dear: "));
// The world says hello dear: Bob
