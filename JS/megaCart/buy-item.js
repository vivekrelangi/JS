let usrnameele = document.getElementById('usrnm');
usrnameele.innerText = JSON.parse(localStorage.getItem('currentUser')).username;
// console.log('usrnameele.innerText',usrnameele.innerText);
let timeele = document.getElementById('time');
let logoutele = document.getElementById('logout');
logoutele.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.href = './login.html';
})
timeele.innerText = new Date();
let numofitemsele = document.getElementById('numofitems');
let items = JSON.parse(localStorage.getItem('items'));
if(items.length){
    numofitemsele.innerText = items.length
}
let itemslistele = document.getElementById('itemslist');
let billele = document.getElementById('bill');
let bill = 0;
for(let i = 0; i < items.length; i++){
    bill+=Number(items[i].cost)
    let listitem = document.createElement('li')
    listitem.innerText = `Item ${items[i].name} costing Rs. ${items[i].cost} will be delivered in ${items[i].dtd}`;
    itemslistele.appendChild(listitem)
}
billele.innerText = bill;
