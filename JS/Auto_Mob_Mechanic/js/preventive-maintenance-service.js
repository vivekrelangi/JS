function bookService(){
    localStorage.setItem('selectedService', 'pms')
    location.assign('./booking.html')
}

function goBack(){
    history.back();
}