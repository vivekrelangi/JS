// function rand(){
//     return Math.floor(Math.random())
// }
// let c=0;
// console.log(setInterval(rand(),3000))
// // let p=new Promise((res,rej)=>{
// //     id=setInterval(rand(),3000)
// //     c++
// //     if (c===2){
// //         resolve(clearInterval(id));
// //     }
// // })
// // p.then((res)=>{console.log(res)
// // })
// // p.catch((err)=>{console.log(err)})
function getRandomStockPrice() {
    return Math.floor(Math.random() * 100) + 1; // Random stock price between 1 and 100
  }
  
  function simulateStockPriceChange() {
    return new Promise((resolve) => {
      let count = 0;
      const intervalId = setInterval(() => {
        count++;
        const stockPrice = getRandomStockPrice();
        console.log(`Stock Price ${count}: $${stockPrice}`);
  
        if (count === 5) {
          clearInterval(intervalId); // Stop after 5 updates
          resolve("Simulation Complete!");
        }
      }, 3000); // Runs every 3 seconds
    });
  }
  
  // Execute and handle the promise
  simulateStockPriceChange()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  