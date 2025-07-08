let selectServiceEle = document.getElementById('selectService');
selectedService = localStorage.getItem('selectedService');
if(selectedService === 'pms'){
    selectServiceEle[1].selected = true;
}
else if(selectedService === 'brs'){
    selectServiceEle[2].selected = true;
}
else if(selectedService === 'ccs'){
    selectServiceEle[3].selected = true;
}

document.getElementById('bookingForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    location.assign('./booking-success.html')
});

function dateValidation(){
    let selectedDate = document.getElementById('appointmentDate').value
    let selectedDateObj = new Date(selectedDate);
    let presentDate = new Date();
    // console.log(presentDate, selectedDateObj)
    if (presentDate.getTime() >= selectedDateObj.getTime()){
        alert('Enter a date that is not in the past')
    }
    // else{
    //     // console.log('No')
    // }
}