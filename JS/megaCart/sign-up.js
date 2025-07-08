let uname = document.getElementById('usrnm');
let pswd = document.getElementById('pswd');
let cpswd = document.getElementById('cpswd');
let users = JSON.parse(localStorage.getItem('users'));

function signup(event){
    event.preventDefault();
    // console.log('uname, pswd, cpswd',uname, pswd, cpswd)
    if(uname.value && pswd.value && cpswd.value){
        if(pswd.value === cpswd.value){
            console.log(pswd.value);
            let currentpswd = document.getElementById('pswd')
            if(currentpswd.validity.valid){
                console.log('valid')
            }
            else{
                console.log('invalid');
                alert('Invalid Password');
                return;
            }
            users[uname.value] = pswd.value;
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = './login.html'
        }
        else{
            alert('Password mismatch please renter')
        }
    }
}