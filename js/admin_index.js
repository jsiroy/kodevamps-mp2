// Datatable loader script in Inventory Management - Richard
// loader scripts starts here
$(document).ready(function () {
    $('#usersTable').DataTable({
        pagingType: 'full_numbers',
    });
});
// loader scripts ends here

// Table data starts here
const users = [
    {
        id: 1,
        access_level: "Admin",
        firstName: "Richard",
        lastName: "Betalmos",
        email: "sample_email@gmail.com",
        password: "123456"
    },
    {
    
        id: 2,
        access_level: "Admin",
        firstName: "Renzo",
        lastName: "DelaCruz",
        email: "sample_email@gmail.com",
        password: "123456"
    
}
];


// Users table data starts here

buildTable = (people) => {
    let table = document.getElementById('usersData');

    // people.forEach(person => {
    //     let row = `<tr>
    //                     <td>${person.id}</td>
    //                     <td>${person.access_level}</td>
    //                     <td>${person.firstName}</td>
    //                     <td>${person.lastName}</td>
    //                     <td>${person.email}</td>
    //                     <td>${person.password}</td>
    //               </tr>`;
    //     table.innerHTML += row;
    //     console.log(    table.innerHTML += row);
    // });

    for(i in people){

        let row = `<tr>
                        <td>${people[i].id}</td>
                        <td>${people[i].access_level}</td>
                        <td>${people[i].firstName}</td>
                        <td>${people[i].lastName}</td>
                        <td>${people[i].email}</td>
                        <td>${people[i].password}</td>
                    </tr>`;
             table.innerHTML += row;
    }
}



// Users table data ends here
let user = {
    
        id: 3,
        access_level: "Admin",
        firstName: "Renzo",
        lastName: "DelaCruz",
        email: "sample_email@gmail.com",
        password: "123456"
    
}

users.push(user);

buildTable(users);

// Table data ends here