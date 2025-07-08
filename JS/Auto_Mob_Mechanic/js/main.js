// Add JavaScript Code here
// let exploreMore = document.getElementById('explore');

// exploreMore.addEventListener('click', ()=>{
//     location.assign('./services.html');
// })
if(!sessionStorage.getItem('currentUser')){
    location.assign('./login.html')
}

let username = JSON.parse(sessionStorage.getItem('currentUser')).name;
let spanEle = document.getElementById('name');
spanEle.innerText = "Hi "+username+" |";

function navtoservices(){
    location.assign('./services.html');
}

function logout(){
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('selectedService');
    alert('Logged out successfully')
    location.assign('./login.html');
}

// var selectedService = '';