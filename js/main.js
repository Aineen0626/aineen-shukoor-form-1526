// <!-- DECLARING VARIABLES -->

let submitButton = document.querySelector('button[name="submit"]');
let fullName = document.getElementById('fname');
let email = document.getElementById('email');
let message = document.getElementById('message');
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


function validateForm(event){
    event.preventDefault();

let data = {};
let error = [];

fullName.value = fullName.value.trim();
email.value = email.value.trim();
message.value = message.value.trim();

//----------FULLNAME--------------

if (fullName.value) {
    data.fullName = fullName.value;
} else {
    error.push('Full name is missing');
}

//----------Email-----------------

if (email.value) {
  if (pattern.test(email.value)) {
      data.email = email.value 
  } else {
      error.push('Your email is invalid!');
  }
} else {
   error.push('Email is missing!');
}

//----------Message----------------

if (message.value) {
    data.message = message.value;
} else {
    error.push('Message is missing');
}

//--------FEEDBACK/ERRORS-----------

if (error.length > 0) {
    console.log(error);
} else {
    console.log(data);
    fullName.value = '';
    email.value = '';
    message.value = '';
}
}

submitButton.addEventListener('click', validateForm);
