let loginEle = document.getElementById('login');
loginEle.addEventListener('click', async ()=>{
    let unameEle = document.getElementById('uname');
    let pwdEle = document.getElementById('pwd');
    if(unameEle.value && pwdEle.value){
        let users = await getData();
        // console.log(users);
        if(users.length){
            for(let i = 0; i< users.length; i++){
                if(users[i].username === unameEle.value && users[i].password === pwdEle.value){
                    sessionStorage.setItem('currentUser', JSON.stringify(users[i]));
                    break;
                }
            }
            if(sessionStorage.getItem('currentUser')){
                location.assign('../html/home.html')
            }
            else{
                alert('Invalid username or password')
            }
        }
        else{
            alert('Invalid username or password')
        }
    }
    else{
        alert('Invalid username or password');
    }
});

async function getData() {
  const url = "../js/users.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    return json
  } catch (error) {
    console.error(error.message);
  }
}
