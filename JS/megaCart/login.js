let usrnm = document.getElementById('usrnm');
let pswd = document.getElementById('pswd');
if(!localStorage.getItem('users')){

localStorage.setItem('users', JSON.stringify({'admin': 'admin'}))
}
let usr = JSON.parse(localStorage.getItem('users'));
// console.log('hmm',usrnm.value, pswd.value);
let usrvalid = false;

function login(event){
    // if(usrnm.value)
    event.preventDefault();
    // console.log(usrnm.value, pswd.value);
    // console.log('usr', usr)
    if(usrnm.value && pswd.value){
        if(usr[usrnm.value]){
            if(usr[usrnm.value] === pswd.value){
                usrvalid = true;
                const username = usrnm.value;
                const password = pswd.value;
                // console.log('current user', username, password)
                localStorage.setItem('currentUser', JSON.stringify({username: username, password: password}))
                window.location.href = './main.html';
            }
        }
    }
    if(!usrvalid){
        alert('Username or password is/are invalid. Sign up if new user')
    }
}