function bookService(){
    localStorage.setItem('selectedService', 'ccs')
    location.assign('./booking.html')
}

function goBack(){
    history.back();
}