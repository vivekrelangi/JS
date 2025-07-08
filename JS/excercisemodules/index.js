// import { User } from "./login";

// us= new User('u','p')
// function val(){
//     let un=document.getElementById('u').attributes[0].value;
// let pw=document.getElementById('p').attributes[0].value;

// s=us.validate(un,pw);
// alert(s);
// // console.log("done")
// }
// val()

// // window.onsubmit(val())
// import User from './login.js';

class User{
    constructor(username, password){
        this.username=username;
        this.password=password
    }
    validate(uname,pswd){
        if ((this.username === uname) && (this.password === pswd)){
            return "Login Successful";
        }
        return "Unauthorized access";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = new User('u','p');
  const result = user.validate(username, password);

  alert(result); // Display the result
});
