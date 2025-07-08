let submitted = false;
// let nam = document.getElementById("name")

// nam.addEventListener('keyup', (event)=>{
//     let nameval = nam.value
//     console.log(nameval)
//     if(!nameval){
//         console.log('hmm')
//         submitted = false;
//         return
//     }
//     submitted = true;
//     console.log(submitted);
//     // event.preventDefault();
// })
// let form = document.getElementById('form');
// form.addEventL
document.getElementById("register").addEventListener("click", myFunction);  
      function myFunction() {  
        // console.log('registerclicked /and submitted value', submitted)
        // if(submitted){
            
        // if(document.getElementById('name').value){
            window.location.href="./RegistrationConfirmation.html"; 
        // } 
        // else{
        //     console.log('nope   ')
        // }
      }
document.getElementById("registerasadmin").addEventListener("click", myFunction1);  
      function myFunction1() {  
            window.location.href="./RegistrationConfirmationforAdmin.html"; 
        // } 
       }
// function logSubmit(event) {
//     // log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
//     if(registerclicked){
//         window.location.href="./RegistrationConfirmation.html"; 
//         registerclicked = false; 
//         // form.removeEventListener(logSubmit)
//         // register.removeEventListener('click');
//         // registerasadmin.removeEventListener('click');
//     }
//     else if(registerasadminclicked){
//         window.location.href="./RegistrationConfirmationforAdmin.html";  
//         registerasadminclicked = false;
//         // form.removeEventListener(logSubmit)
//         // register.removeEventListener('click');
//         // registerasadmin.removeEventListener('click');
//     }
//     // event.preventDefault();
// }
// let registerclicked = false;
// let registerasadminclicked = false;
          
//           const form = document.getElementById("form");
//         //   const log = document.getElementById("log");
//         const register = document.getElementById("register");
//         register.addEventListener("click", myFunction);  
//         function myFunction() {  
//             registerclicked = true;
//         }
//         const registerasadmin = document.getElementById("registerasadmin")
//         registerasadmin.addEventListener("submit", myFunction1);  
//         function myFunction1() {  
//             registerasadmin = true;
//         }
//         form.addEventListener("submit", logSubmit);