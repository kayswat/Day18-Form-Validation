const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('numberError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const messageError = document.getElementById('messageError');
const submitError = document.getElementById('submitError');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"
        return false;
    }
    nameError.innerHTML = '<img src="checked.png">';
    return true;
}

function validateNumber(){
    const number = document.getElementById('contact-number').value;
    if(number.length ==  0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if(number.length !==  11){
        phoneError.innerHTML = 'Phone number must be 11 digits';
        return false;
    }
    if(!number.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Phone number not correctly formatted';
        return false;
    }
    phoneError.innerHTML = '<img src="checked.png">';
    return true;
}

function validateEmail(){
    const email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<img src="checked.png">';
    return true;
}

function validateMessage(){
    const message = document.getElementById('contact-message').value;
    const required = '30'
    const left = required - message.length
if(left > 0){
    messageError.innerHTML = left + " more characters required";
    return false;
} 
messageError.innerHTML = '<img src="checked.png">';
return true;
}



function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage() || !validateNumber()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error to submit';
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
};