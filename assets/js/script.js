
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    let lastName = document.getElementById('firstName').value;
    let firstName = document.getElementById('middleName').value;
    let middleName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let batch = document.getElementById('batch').value;
    let idNumber = document.getElementById('idNumber').value;
    let technology = document.getElementById("technology").value;
    let errorMessage = document.getElementById('errorMessage');
  
   
    errorMessage.innerHTML = '';
  
   
    let nameRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let contactNumberRegex = /^\d{11}$/;
    let idNumberRegex = /^.*$/;
  
   
    if (!lastName || !firstName || !middleName || !email || !contactNumber || !idNumber) {
      errorMessage.innerHTML = "All fields are required!";
      return;
    }
  
   
    if (!nameRegex.test(lastName) || !nameRegex.test(firstName) || !nameRegex.test(middleName)) {
      errorMessage.innerHTML = "Name fields should only contain letters and spaces!";
      return;
    }
  
    
    if (!emailRegex.test(email)) {
      errorMessage.innerHTML = "Please enter a valid email address!";
      return;
    }
  
    
    if (!contactNumberRegex.test(contactNumber)) {
      errorMessage.innerHTML = "Contact number should be 11 digits!";
      return;
    }
  
    
    if (!idNumberRegex.test(idNumber)) {
      errorMessage.innerHTML = "ID number should only symbol and contain digits!";
      return;
    }
  
   
    localStorage.setItem('registrationData', JSON.stringify({
      firstName,
      middleName,
      lastName,
      email,
      contactNumber,
      batch,
      idNumber,
      technology,
    }));
  
   
  });
  
