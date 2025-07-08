console.log("Before For loop execution");
// for (var i = 0; i < 2; i++) {
//     console.log("setTimeout message");//Synchronous execution
//     func1();
//     func2();
// }
for (var i = 0; i < 2; i++) {
    setTimeout(function() {
        console.log("setTimeout message");
        func1();
    }, );
    func2();
}

console.log("After For loop execution");
function func1() {
    console.log("Am in func1");
}
function func2() {
    console.log("Am in func2");
}

// new Promise(function (resolve, reject) {
//         //async code here
//         //resolve if success, reject if error
//     });
    
var myPromise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		// resolve("success");
        reject("err");
	}, 2000);
});
myPromise.then(
	function (data) {
		console.log(data + " received in 2 seconds");
	},
	function (error) {
		console.log(error);
	}
);
// myPromise.catch((error)=>{
//     console.log(error)
// })

// doSomething(function(result){
// 	doSomethingElse(result,function(newResult){
// 		doThirfThing(newResult,function(finalResult){
// 			console.log('Print the final result ' +finalResult);
// 		}, failureCallback);
// 	}, failurCallback);
// }, failureCallback);

async function hello() {
    //Value will be wrapped in a resolved promise and returned
    return "Hello Async";
}
h=hello().then(val => console.log(val)); // Hello Async
async function hello1() {
    //Promise can be returned explicitly as well
    return Promise.resolve("Hello Async");
}
h1=hello1().then(val => console.log(val)); // Hello Async
console.log(h,h1)

function sayAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}
async function hello2() {
	//wait until the promise returns a value
	var x = await sayAfter2Seconds("Hello Async/Await");
	console.log(x); //Hello Async/Await
}
hello2();
