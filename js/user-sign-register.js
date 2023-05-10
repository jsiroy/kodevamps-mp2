
/////////////////Registration form///////////////////////////////////////
const registrationForm = document.getElementById('registration-form');
const registrationList = document.getElementById('usersRegistrationList');
let userRegistrationData = [];
registrationForm.addEventListener('submit', (event) => {
 event.preventDefault();

 const regBusinessName = registrationForm.elements.regBusinessName.value;
 const regFirstName = registrationForm.elements.regFirstName.value;
 const regLastName = registrationForm.elements.regLastName.value;
 const regUserName = registrationForm.elements.regUserName.value;
 const regEmailAd = registrationForm.elements.regEmailAd.value;
 const regPassword = registrationForm.elements.regPassword.value;


 // clear error messages
 regBusinessNameError.textContent = '';
 regFirstNameError.textContent = '';
 regLastNameError.textContent = '';
 regUserNameError.textContent = '';
 regEmailAdError.textContent = '';
 regPasswordError.textContent = '';

 const errors = {};
    
 if (!regBusinessName) {
     errors.regBusinessName = 'Please enter your business name';//1
 }
 if (!regFirstName) {
     errors.regFirstName = 'Please enter your first name';//2
 }
 if (!regLastName) {
     errors.regLastName = 'Please enter your last name';//3
 }
 if (!regUserName) {
     errors.regUserName = 'Please enter your user name';//4
 }
 if (!regEmailAd) {
     errors.regEmailAd = 'Please enter your email address';//5
 }
 if (!regPassword) {
     errors.regPassword = 'Please enter your password';//6
 }
     
 if (Object.keys(errors).length > 0) {
     displayErrors(errors);
     return;
 }
          alert('Submitting registration form');
 const regFormData = {
     regBusinessName: regBusinessName,
     regFirstName: regFirstName,
     regLastName: regLastName,
     regUserName: regUserName,
     regEmailAd: regEmailAd,
     regPassword: regPassword   
 };
//  userRegistrationData.push(regFormData);
//   console.log(userRegistrationData);
 ////////////////fetching to server////////////////////////////
  fetch('http://localhost:3000/users/signup', {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(regFormData)
 })
     .then(response => 
    {
          if (!response.ok)
        {
         throw new Error('Network response was not ok');
        }
          return response.json();
    })
         .then(data => 
        {
          console.log(data);
        })
     .catch(error => 
        {
           console.error('There was a problem with the fetch operation:', error);
        });     

 registrationForm.reset();
 ///////////////////////////////////////////////////////////////
 
  });

   
displayErrors = errors => {
 for (const fields in errors) {
     const errorMessage = errors[fields];
     const errorElement = document.getElementById(fields + 'Error');
     errorElement.textContent = errorMessage;
 }

}
///////////////////end of registration form///////////////////////////////////
///////////////////User Credential validation/////////////////////////////////


const loginForm = document.getElementById('credentials-validation-form');
const loginButton = document.getElementById('for-credentials-validation');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password')
    console.log('Please enter both username and password');
    return;
  }

  fetch('http://localhost:3000/users/signup')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const userRegistrationData = data.userRegistrationData;

      const isValidUser = userRegistrationData.some(user => {
        return user.regUserName === username && user.regPassword === password;
      });

      if (isValidUser) {
        alert('Login successful')
        console.log('Login successful');
          // Clear the input fields
           document.getElementById('username').value = '';
           document.getElementById('password').value = '';
        // Open the URL in a new tab
        window.open('http://127.0.0.1:5500/admin/epos.html', '_blank');
      } else {
        alert('Invalid users credentials')
        console.log('Invalid login credentials');
        // Perform actions for invalid login, such as displaying an error message
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});




///////////////////credentials validation end here//////////////////////////////