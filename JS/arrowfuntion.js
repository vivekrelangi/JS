let sayHello = () => {
	console.log("Welcome to JavaScript");
};
sayHello();
calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));
// 1000
trip = () => "Let's go to trip."
console.log(trip());
// Let's go to trip.
trip = place => "Trip to " + place;
console.log(trip("Paris"));
// Trip to Paris
trip = _ => "Trip to " + _;
console.log(trip("Sun temple"));
// Trip to Paris
// const myObject = {
//     items: [1],
//     myMethod() {
//       console.log(this == myObject) // true
//       this.items.forEach(function() {
//         console.log(this === myObject) // false
//         console.log(this === window); // true
//       });
//     }
//   };
//   myObject.myMethod();
const myObject = {
    items: [1],
    myMethod() {
      console.log(this == myObject) // => true
      this.items.forEach(() => {
        console.log(this === myObject) // => true
        // console.log(this === window); // => false
      });
    }
  };
  myObject.myMethod();
//   function multiply(num1, num2) {
// 	if (num2 == undefined) {
// 		num2 = 1;
// 	}
// 	return num1 * num2;
// }
// console.log(multiply(5, 6)); // 30
// console.log(multiply(5)); // 5
function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(5, 5)); //25
console.log(multiply(10)); //10
console.log(multiply(10, undefined)); //10
function showNumbers(x, y, ...z) {
    return z;
}
console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]

  
  