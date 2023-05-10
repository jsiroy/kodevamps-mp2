const registrationButton = document.getElementById('registrationButton');
const usersRegistrationTableBody = document.getElementById('usersRegistrationList').getElementsByTagName('tbody')[0];

fetch('http://localhost:3000/users/signup')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const table = document.querySelector("#usersRegistrationList");
        const tbody = table.querySelector("tbody");

        const registrationData = data.userRegistrationData; // Access the array of registration data

        registrationData.forEach(incomingData => {
            const row = document.createElement("tr");
            const businessNameCell = document.createElement("td");
            businessNameCell.textContent = incomingData.regBusinessName;
            row.appendChild(businessNameCell);

            const firstNameCell = document.createElement("td");
            firstNameCell.textContent = incomingData.regFirstName;
            row.appendChild(firstNameCell);

            const lastNameCell = document.createElement("td");
            lastNameCell.textContent = incomingData.regLastName;
            row.appendChild(lastNameCell);

            const userNameCell = document.createElement("td");
            userNameCell.textContent = incomingData.regUserName;
            row.appendChild(userNameCell);

            const emailCell = document.createElement("td");
            emailCell.textContent = incomingData.regEmailAd;
            row.appendChild(emailCell);

            const passwordCell = document.createElement("td");
            passwordCell.textContent = incomingData.regPassword;
            row.appendChild(passwordCell);

            tbody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

  
// registrationButton.addEventListener('click', parseDataToTable);

/////////////////////////////////////////////////////////////////////////////////////////

