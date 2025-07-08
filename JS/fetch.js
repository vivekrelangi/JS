async function f() {
    //pass any url that you wish to access to fetch() 
let response = await fetch("https://google.com");
if (response.ok) { // if HTTP-status is 200-299
    // get the response body 
    let json = await response.json();
    console.log(json)
}
else {
    console.log("HTTP-Error: " + response.status);
}

}