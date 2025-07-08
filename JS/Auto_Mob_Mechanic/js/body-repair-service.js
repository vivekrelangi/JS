function bookService(){
    localStorage.setItem('selectedService', 'brs')
    location.assign('./booking.html')
}

function goBack(){
    history.back();
}