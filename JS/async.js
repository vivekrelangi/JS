let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
//   myPromise.then(function(value) {
//     // document.getElementById("demo").innerHTML = value;
//     console.log(value)
//   });
//   myPromise.catch(console.log("Error"))
async function fetchData() {
    // const response = await fetch('https://api.example.com/data');
    // const data = await response.json();
    const data= await myPromise
    console.log(data);
  }
  
  fetchData(); // Logs the fetched data to the console