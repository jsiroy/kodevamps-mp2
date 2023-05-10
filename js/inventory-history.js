// const addInventoryButton = document.getElementById('displayInventoryHistory');
// addInventoryButton.addEventListener('click', displayInventory);


// function displayInventory() {
//     // Send an HTTP GET request to the server
//     fetch("http://localhost:3000/server")
//       .then(response => response.json()) // Parse the response as JSON
//       .then(data => {
//         // Access the tbody element of the table
//         const tbody = document.querySelector("#inventoryTable tbody");
  
//         // Loop through the data and create a row for each item
//         data.forEach(item => {
//           const row = tbody.insertRow();
  
//           // Create cells for each column and populate with data
//           const userIdCell = row.insertCell();
//           userIdCell.textContent = item.userId;
  
//           const entryDateCell = row.insertCell();
//           entryDateCell.textContent = item.entryDate;
  
//           const serialNoCell = row.insertCell();
//           serialNoCell.textContent = item.serialNo;
  
//           const categoryCell = row.insertCell();
//           categoryCell.textContent = item.category;
  
//           const descriptionCell = row.insertCell();
//           descriptionCell.textContent = item.description;
  
//           const quantityCell = row.insertCell();
//           quantityCell.textContent = item.quantity;
  
//           const buyPriceCell = row.insertCell();
//           buyPriceCell.textContent = item.buyPrice;
  
//           const sellPriceCell = row.insertCell();
//           sellPriceCell.textContent = item.sellPrice;
  
//           const profitCell = row.insertCell();
//           profitCell.textContent = item.profit;
//         });
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }
  
  