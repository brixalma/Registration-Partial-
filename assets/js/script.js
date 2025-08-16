
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
   
const firstNameInput = document.getElementById('firstName');
const middleNameInput = document.getElementById('middleName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const contactNumberInput = document.getElementById('contactNumber');
const batchInput = document.getElementById('batch');
const idNumberInput = document.getElementById('idNumber');
const technologyInput = document.getElementById('technology');
const errorMessage = document.getElementById('errorMessage');


const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const contactNumberRegex = /^\d{11}$/;
const batchRegex = /^20\d{2}$/;
const technologyRegex = /^[A-Za-z\s]+$/;





firstNameInput.addEventListener('input', function () {
  validateInput(firstNameInput, nameRegex, 'First Name');

  function validateInput(input, regex, message) {
  if (!input.value) {
    errorMessage.innerHTML = `${message} is required!`;
    input.classList.add('error');
  } else if (!regex.test(input.value)) {
    errorMessage.innerHTML = `this field must contain letters only!`;
    input.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    input.classList.remove('error');
  }
}
});

middleNameInput.addEventListener('input', function () {
  validateInput(middleNameInput, nameRegex, 'Middle Name');

  function validateInput(input, regex, message) {
  if (!input.value) {
    errorMessage.innerHTML = `${message} is required!`;
    input.classList.add('error');
  } else if (!regex.test(input.value)) {
    errorMessage.innerHTML = `this field must contain letters only!`;
    input.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    input.classList.remove('error');
  }
}
});

lastNameInput.addEventListener('input', function () {
  validateInput(lastNameInput, nameRegex, 'Last Name');

  function validateInput(input, regex, message) {
  if (!input.value) {
    errorMessage.innerHTML = `${message} is required!`;
    input.classList.add('error');
  } else if (!regex.test(input.value)) {
    errorMessage.innerHTML = `this field must contain letters only!`;
    input.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    input.classList.remove('error');
  }
}
});

emailInput.addEventListener('input', function () {
  validateInput(emailInput, emailRegex, 'Email Address');

  function validateInput(input, regex, message) {
  if (!input.value) {
    errorMessage.innerHTML = `${message} is required!`;
    input.classList.add('error');
  } else if (!regex.test(input.value)) {
    errorMessage.innerHTML = `this field must contain letters and @ sign only!`;
    input.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    input.classList.remove('error');
  }
}
});

contactNumberInput.addEventListener('input', function () {
  validateInput(contactNumberInput, contactNumberRegex, 'Contact Number');

  function validateInput(input, regex, message) {
  if (!input.value) {
    errorMessage.innerHTML = `${message} is required!`;
    input.classList.add('error');
  } else if (!regex.test(input.value)) {
    errorMessage.innerHTML = `this field must contain 11 numbers only!`;
    input.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    input.classList.remove('error');
  }
}
});


batchInput.addEventListener('input', function () {
  if (!batchInput.value) {
    errorMessage.innerHTML = 'Batch is required!';
    batchInput.classList.add('error');
  } else {
    errorMessage.innerHTML = 'This Field must contain numbers only! ';
    batchInput.classList.remove('error');
  }
});

idNumberInput.addEventListener('input', function () {
  if (!idNumberInput.value) {
    errorMessage.innerHTML = 'ID Number is required!';
    idNumberInput.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    idNumberInput.classList.remove('error');
  }
});

technologyInput.addEventListener('input', function () {
  if (!technologyInput.value) {
    errorMessage.innerHTML = 'This field must contain letters Only!';
    technologyInput.classList.add('error');
  } else {
    errorMessage.innerHTML = '';
    technologyInput.classList.remove('error');
  }
});


document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  
  const formData = {
    firstName: firstNameInput.value,
    middleName: middleNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    contactNumber: contactNumberInput.value,
    batch: batchInput.value,
    idNumber: idNumberInput.value,
    technology: technologyInput.value,
  };

  localStorage.setItem('registrationData', JSON.stringify(formData));
});
