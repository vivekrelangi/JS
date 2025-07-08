let usrnameele = document.getElementById('usrnm');
usrnameele.innerText = JSON.parse(localStorage.getItem('currentUser')).username;
// console.log('usrnameele.innerText',usrnameele.innerText);
let timeele = document.getElementById('time');
timeele.innerText = new Date();
localStorage.setItem('items', JSON.stringify([]))
let items;
function logout(){
    localStorage.clear();
    window.location.href = './login.html'
}
function oncclick(){
    let tempitems = JSON.parse(localStorage.getItem('items'));
    console.log(tempitems)
    tempitems = tempitems.concat({name: 'clothing', image: './images/clothing.jpg', cost: '1000', dtd: '1'});
    console.log(tempitems)
    localStorage.setItem('items', JSON.stringify(tempitems));
    alert('1 clothing item added');
}
function onbahclick(){
    let tempitems = JSON.parse(localStorage.getItem('items'));
    tempitems = tempitems.concat({name: 'beauty&health', image: './images/health.jpg', cost: '900', dtd: '3'});
    localStorage.setItem('items', JSON.stringify(tempitems));
    alert('1 beauty and health item added');
}
function onfclick(){
    let tempitems = JSON.parse(localStorage.getItem('items'));
    tempitems = tempitems.concat({name: 'footwear', image: './images/footwear.jpg', cost: '700', dtd: '2'});
    localStorage.setItem('items', JSON.stringify(tempitems));
    alert('1 footwear item added');
}
function onsbclick(){
    let tempitems = JSON.parse(localStorage.getItem('items'));
    tempitems = tempitems.concat({name: 'schoolbags', image: './images/school.jpg', cost: '800', dtd: '3'});
    localStorage.setItem('items', JSON.stringify(tempitems));
    alert('1 school bags item added');
}

function redirect(){
    window.location.href = './buy-item.html'
}
