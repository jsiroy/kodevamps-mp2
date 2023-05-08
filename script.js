/* Given */
// const numbers = [1, 2, 3, 4, 5, 6];

// 1. Use an array method to create a new array that only contains even numbers from an original array.

// const filteredNumbers  = numbers.filter(number => {
//     return number % 2 === 0;
// });

// console.log(filteredNumbers);

// 2. Use an array method to create a new array that contains the square of each number in the original array.

// const numbersToBeSquared = numbers.map(number => {
//    return number ** 2;
// });

// console.log(numbersToBeSquared);


// 3. Use an array method to find the sum of all numbers in an array.

// const sumOfNumberInsideTheArray = numbers.reduce((initialValue, currentValue) => {
//     return initialValue + currentValue;
// });

// console.log(sumOfNumberInsideTheArray);


// 4. Use an array method to find the first number in an array that is greater than 3.

// const numberGreaterThanThree = numbers.find(number => {
//     return number > 3;
// });

// console.log(numberGreaterThanThree);


// 5. Use an array method to print each element in an array to the console.

// numbers.forEach(number => console.log(number));



// 6. Use an array method to remove the second and third elements from an array and replace them with the values 10 and 11.

// numbers.splice(1, 2, 10, 11);

// console.log(numbers);


// 7. Use an array method to create a new array that contains the first 3 elements of an original array.

// const getThree = numbers.slice(0, 3);

// console.log(getThree);


/* Given */
// const numbers = [1, 2, 3, 4, 5, 11, 12, 13];

// 1. Use the some method to determine if an array contains a number that is greater than 10. (show some test scenarios showing that it can still check whether the array elements does not have greater than 10 via console)
// const hasGreaterThanTen = numbers.some(number => number > 10);

// if (hasGreaterThanTen) {
//     console.log('The array has a number greater than 10');
// } else {
//     console.log('The array does not have a number greater than 10');
// }



// 2. Use the every method to determine if all numbers in an array are even. (show some test scenarios showing  that the method is working when you change the array elements into even or odd via console)
// const isAllEven = numbers.every(number => number % 2 === 0);

// if (isAllEven) {
//     console.log('The array elements are all even');
// } else {
//     console.log('The array elements are not all even');
// }


// checkEnrolled expected to contain true or false
// !checkEnrolled === (undefined, null, 0, false)

// enrollees.length === 0 if you want to check your arrays length if empty


// Technical assessment 2




/* 
    Instructions:
        
    1. Ensure that your script is connected to your HTML document.
    2. Create a function to input the student’s name and inform that the name is added to the list.
    3. Once student names are added, create a function to display the total number of students added to the list.
*/


// const studentList = ['Kimbo', 'Graham', 'Sanz']; // global variable


// function addStudent() { // from here
//     const studentsToBeAdded = ['Ferdie', 'Mark', 'Angelito']; // the variable is inside a blocked scope

//     studentsToBeAdded.forEach(student => {
//         studentList.push(student);
//         console.log(`${student} has been added to the list`);
//     });

//     displayTotalNumberOfStudents(studentList.length);
// } // until here

// function displayTotalNumberOfStudents(numberOfStudents) {
//     console.log(`Total number of students: ${numberOfStudents}`);
// }

// addStudent();




/* Create a function that will print student names that were input previously. */
// const students = ['Gregory', 'Philip', 'Markus', 'Alice'];

// printStudentNames = (names) => {
//     names.forEach(name => console.log(name)); 
// }

// printStudentNames(students);



/* 
    Instructions:

    1. Create a function that will check if Joe is an enrollee.
    2. When searched, it will accept the upper and lower case letters and display the result.

    Note: You can use .toLowerCase() or .toUppercase() if needed. 

    3. If Joe is not on the list, the result must display that Joe is not found on the list.
*/

// const enrollees = ['Alice', 'Bob', 'Charlie', 'Joe'];

// checkEnrollee = (name, enrollees) => {
//     const lowerCaseString = name.toLowerCase();

//     const checkEnrolled = enrollees.map(enrollee => enrollee.toLowerCase() === lowerCaseString ? true : false); // ternary operator

//     return checkEnrolled;
// }

// searchStudent = (enrolledStudents) => {
//     const studentName = 'Joe';
//     const isStudentEnrollee = checkEnrollee(studentName, enrolledStudents);

//     if (isStudentEnrollee) {
//         console.log(`${studentName} is an enrollee`);
//     } else {
//         console.log(`${studentName} is not found on the list`);
//     }
// }

// searchStudent(enrollees);

/*
    Instructions
    1. Create an empty array to store the student section.
    2. Create a function that will add the student section.
    3. Display the student with their added section.
*/

// const studentSection = []; // { name, section }

// addStudentSection = (name, section) => {
//     studentSection.push({name , section}); // destructure
// }

// addStudentSection('Kimbo', '- Section A');
// addStudentSection('Graham', '- Section B');
// addStudentSection('Sanz', '- Section C');

// const studentWithSection = studentSection.map(student => `${student.name} ${student.section}`);

// console.log(studentWithSection);


/*
    Instructions:

    1. Create a function for removing students from the list.
    2. Once removed, display the student name that was removed from the list.
    3. Display the names of the remaining students.
*/

// const studentsList = ['Kimbo', 'Joe', 'Graham', 'Ferdie']

// removeStudents = (studentName) => {
//     const index = studentsList.indexOf(studentName);

//     if (index !== -1) {
//         const removedStudent = studentsList.splice(index, 1);
//         console.log(`${removedStudent} was removed from the student list`);
//     } else {
//         console.log('Student not found');
//     }
// }

// removeStudents('Ferdie');

// console.log(studentsList); // output of the final list in the array

/* 
    Instructions:

    1. Compute the average grade of each student object.
    2. Add the computed average of the student as a value to a new property called average to the studentGrades array of objects.
    3. Log the modified object array (including the average property) to the console.

    Stretch Goals:
    - Round off the average into a single decimal number.
      Note: Value for average property cannot be a string.
*/


// const studentGrades = [
// 	{ 
//         studentId: 1, 
//         Q1: 89.3, 
//         Q2: 91.2, 
//         Q3: 93.3, 
//         Q4: 89.8
//     },
// 	{ 
//         studentId: 2, 
//         Q1: 69.2, 
//         Q2: 71.3, 
//         Q3: 76.5, 
//         Q4: 81.9 
//     },
// 	{ 
//         studentId: 3, 
//         Q1: 95.7, 
//         Q2: 91.4, 
//         Q3: 90.7, 
//         Q4: 85.6 
//     },
// 	{ 
//         studentId: 4, 
//         Q1: 86.9, 
//         Q2: 74.5, 
//         Q3: 83.3, 
//         Q4: 86.1 
//     },
// 	{
//         studentId: 5, 
//         Q1: 70.9, // [propertyName]: [propertyValue]
//         Q2: 73.8, 
//         Q3: 80.2, 
//         Q4: 81.8 
//     }
// ];


// studentGrades.forEach(student => {
//     let gradeSum = 0;
//     let gradeCount = 0;

//     for (const propertyName in student) {
//         if (propertyName !== 'studentId') {
//             const grade = student[propertyName]; // value of the property

//             gradeSum += grade;

//             gradeCount++;
//         }
//     }
    
//     const gradeAverage = gradeSum / gradeCount;

//     student.average = +gradeAverage.toFixed(1);
// });

// console.log(studentGrades);




// let people = [
//     {
//         name: 'Bob',
//         age: 40,
//         gender: 'male'
//     },
//     {
//         name: 'John',
//         age: 30,
//         gender: 'male'
//     },
//     {
//         name: 'Jane',
//         age: 25,
//         gender: 'female'
//     }
// ];

// 1. Add a new person object to the people array.

// people.push({
//     name: 'Kimbo',
//     age: 20,
//     gender: 'male'
// });

// console.log(people);

// 2. Remove the person object with the name "John" from the people array.

// const removedPerson = people.filter(person => person.name === 'John');

// console.log(removedPerson);

// 3. Sort the people array by age, from oldest to youngest.

// people.sort((person1, person2) => person2.age - person1.age);

// console.log(people);

// 4. Find the first-person object in the people array with an age greater than or equal to 30.

// const person = people.find(person => person.age >= 30);

// console.log(person);

/*
    Instructions:
    1. Calculate the weight based on the user input in kilograms (kg).
    2. Create a function that displays the converted weight in pounds.
    3. Execute the function property based on the initialized object with arguments.
*/
// 2.20462

// convertWeight = (person) => {
//     const lbs = person.weight * 2.20462;
//     console.log(`${person.name}'s weight in lbs is ${lbs.toFixed(2)} lbs`);
// }

// const person = {
//     name: 'Kimbo',
//     weight: 75,
// };

// convertWeight(person);


// var getDivisionId = document.getElementById('test-id');
// var getBtnClasses = document.getElementsByClassName('btn-class-name');
// console.log(getClasses);

// // if (getClasses[0].attributes[0].nodeValue === 'btn-id-1') {
// //   getClasses[0].onclick = function() {
// //     alert('CLICKED');
// //   }    
// // }

// getElement.style.color = 'red';
// getElement.style.fontSize = '120px';

// getClasses[0].classList.add('new-class-name');

// console.log(getClasses[0].classList[3]);

// const names = ['Kimbo', 'Graham', 'Sanz'];

// getNames = (buttonClassName) => {
//   console.log(buttonClassName);
// }


// if (getClasses[0].classList[3] === 'new-class-name') {
//   getClasses[0].onclick = () => {
//     getNames(getClasses[0].classList[3]);
//   }
// }

// const createElement = document.createElement('button');

// createElement.className = 'new-btn';
// createElement.onclick = () => {
//   console.log(names);
// }
// createElement.innerHTML = 'click me to show names';

// getElement.appendChild(createElement);


// addTableRow = () => {
//   const getTable = document.getElementById('personal-table');

//   const newRow = getTable.insertRow(-1);
//   const cell1 = newRow.insertCell(0);
//   const cell2 = newRow.insertCell(1);

//   cell1.innerHTML = 'Cell 1';
//   cell2.innerHTML = 'Cell 2';
// }

// EXERCISE 1
// function Car (brand, model, year, color, mileage, price) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.mileage = mileage;
//   this.price = price;
// }

// const car1 = new Car('Honda', 'Civic', 2018, 'Black', 20000, 15000);
// const car2 = new Car('Toyota', 'Hilux', 2022, 'Red', 10000, 18000);
// const car3 = new Car('Ford', 'Raptor', 2018, 'Blue', 5000, 30000);

// getAveragePrice = (cars) => {
//   let total = 0;

//   cars.forEach(car => total += car.price);

//   return total / cars.length;
// }

// const cars = [car1, car2, car3]; //[{..}, {..}, {..}]

// const averagePrice = getAveragePrice(cars);

// console.log(`The average of all the prices is: ${averagePrice}`);


// EXERCISE 2
// function Book (title, author, pages, year, genre) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.year = year;
//   this.genre = genre;
// }

// const book1 = new Book("Angels and Demons", "Dan Brown", 768, 2000, "Thriller");
// const book2 = new Book("Bird Box", "Josh Malerman", 273, 2014, "Thriller");
// const book3 = new Book("Smaller and Smaller Circles", "F. H. Batacan", 155, 2002, "Crime");

// const collectionOfBooks = [book1, book2, book3];

// // books = array of objects, genre = specific genre (string)
// filterBooksByGenre = (books, genre) => {
//   const filteredBooks = [];

//   books.forEach(book => {
//     if (book.genre === genre) {
//       filteredBooks.push(book.title);
//     }
//   });

//   return filteredBooks;
// }

// const filteredBookPerGenre = filterBooksByGenre(collectionOfBooks, 'Comedy');
// console.log(filteredBookPerGenre);



// EXERCISE 3
// const cart = [
//   { name: "Shirt", price: 20, quantity: 2 },
//   { name: "Pants", price: 30, quantity: 5 },
//   { name: "Socks", price: 5, quantity: 7 },
//   { name: "Hat", price: 40, quantity: 8 },
//   { name: "Shoes", price: 70, quantity: 10 }
// ];


// calculateTotalCost = (cart) => {
//   let total = 0;

//   cart.forEach(item => total += (item.price * item.quantity));

//   return total;
// }

// const totalCost = calculateTotalCost(cart);

// console.log(`Total Cost: ${totalCost}`)

// getItem = (cart) => {
//   const items = [];

//   cart.map(item => item.quantity > 5 && item.price >= 20 ? items.push(item) : '');

//   return items;
// }

// console.log(getItem(cart));

// EXERCISE 4
// const students = [
//   { name: "Kelly", grades: [78, 92, 85, 88] },
//   { name: "Jared", grades: [90, 86, 94, 89] },
//   { name: "Aloi", grades: [72, 84, 80, 75] },
//   { name: "Alvin", grades: [68, 72, 65, 70] }
// ];

// calculateStudentGradeAverage = (students) => {
//   const averageGrades = [];

//   // loop over students array
//   students.forEach(student => {

//     // calculate sum of grades
//     const sum = student.grades.reduce((total, grade) => total + grade);

//     // compute grades in average
//     const gradeInAverage = sum / student.grades.length;

//     averageGrades.push({
//       name: student.name,
//       averageGrade: +gradeInAverage.toFixed(2),
//     });
//   });

//   return averageGrades;
// }

// const newStudentArray = calculateStudentGradeAverage(students);

// console.log(newStudentArray);


// Write a JavaScript program to count and display the items of a dropdown list, in an alert window.

// showDropDownLenght = () => {
//   const selectDropwDown = document.getElementById('dropdown-list');
  
//   alert(`The lenght of the list inside the dropdown is: ${selectDropwDown.options.length}`);
// }

/*
  Write a Javascript function where you take 3 parameters. 
  These parameters would represent the element you want to create. 
  You have the parameters id, element, and, text. 
  Parameter id would represent the id of the element created, element would represent the element you are creating (p, button, h1, etc.), 
  and text being the text displayed in the element created. 
  The said element would then be added to the body. 
*/

// createNewElement = (id, element, text) => {
//   const elementCreated = document.createElement(element);

//   elementCreated.id = id;

//   elementCreated.innerHTML = text;

//   document.body.appendChild(elementCreated);
// }

// createNewElement('btn-id', 'button', 'click me!');


/*

IF NUMBER IN BUTTON 1 IS DIVISIBLE BY 3 SHOW 'FIZZ' IN BUTTON2

IF NUMBER IN BUTTON 1 IS DIVISIBLE BY 5 SHOW 'BUZZ' IN BUTTON2

IF NUMBER IN BUTTON 1 IS DIVISIBLE BY 3 AND 5 SHOW 'FIZZBUZZ' IN BUTTON2

*/


// const btn1 = document.getElementById('button-1');
// const btn2 = document.getElementById('button-2');

// btn1.onclick = () => {
//   let num = +btn1.textContent;
//   num++;


//   if (num % 5 === 0 && num % 3 === 0) {
//     btn2.textContent = 'FizzBuzz';
//     btn2.style.color = 'purple';
//   } else if (num % 5 === 0) {
//     btn2.textContent = 'Buzz';
//     btn2.style.color = 'blue';
//   } else if (num % 3 === 0) {
//     btn2.textContent = 'Fizz';
//     btn2.style.color = 'red';
//   } else {
//     btn2.textContent = 'Neutral';
//     btn2.style.color = 'black';
//   }


//   btn1.textContent = num.toString();
// }


// btn1.addEventListener('click', () => {
//   let num = +btn1.textContent;
//   num++;


//   if (num % 5 === 0 && num % 3 === 0) {
//     btn2.textContent = 'FizzBuzz';
//     btn2.style.color = 'purple';
//   } else if (num % 5 === 0) {
//     btn2.textContent = 'Buzz';
//     btn2.style.color = 'blue';
//   } else if (num % 3 === 0) {
//     btn2.textContent = 'Fizz';
//     btn2.style.color = 'red';
//   } else {
//     btn2.textContent = 'Neutral';
//     btn2.style.color = 'black';
//   }


//   btn1.textContent = num.toString();

// });


// increment = () => {
//   let num = +btn1.textContent;
//   num++;


//   if (num % 5 === 0 && num % 3 === 0) {
//     btn2.textContent = 'FizzBuzz';
//     btn2.style.color = 'purple';
//   } else if (num % 5 === 0) {
//     btn2.textContent = 'Buzz';
//     btn2.style.color = 'blue';
//   } else if (num % 3 === 0) {
//     btn2.textContent = 'Fizz';
//     btn2.style.color = 'red';
//   } else {
//     btn2.textContent = 'Neutral';
//     btn2.style.color = 'black';
//   }


//   btn1.textContent = num.toString();
// }

// setRadioState = (checked) => {
//     const radios = document.querySelectorAll('.radio-button');
//     radios.forEach(button => button.checked = checked);
// }


// Technical Assessment 4 coding part

// Problem 1

// const passwordField = document.getElementById('password-field');
// const confirmPasswordField = document.getElementById('confirm-password-field');

// passwordValidate = () => {
//     if (passwordField.value !== confirmPasswordField.value) {
//         confirmPasswordField.setCustomValidity('Password Does not Match');
//     } else if (!passwordField.value || !confirmPasswordField.value) {
//         alert('Fields cannot be empty');
//     } else {
//         alert('You have entered the correct password match');
//     }
// }


// Problem 2
const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.elements.firstName.value;
    const lastName = form.elements.lastName.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    // clear error messages
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    const errors = {};

    if (!firstName) {
        errors.firstName = 'Please enter your first name';
    }
    if (!lastName) {
        errors.lastName = 'Please enter your last name';
    }
    if (!email) {
        errors.email = 'Please enter your email';
    }
    if (!password) {
        errors.password = 'Please enter your password';
    }

    if (Object.keys(errors).length > 0) {
        displayErrors(errors);
        return;
    }

    const formData = { // imagine that this is the request payload
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    displaySuccess(formData);
    form.reset();
});


displayErrors = errors => {
    for (const fields in errors) {
        const errorMessage = errors[fields];
        const errorElement = document.getElementById(fields + 'Error');
        errorElement.textContent = errorMessage;
    }
}

displaySuccess = (data) => { // imagine this function is the one responsible for sending request into your created server.
    console.log(data);
}

