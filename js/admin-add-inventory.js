// const { response } = require("express");

const inventoryForm = document.getElementById('inventory-input-form');
const addInventoryButton = document.getElementById('addInventory');
const historyButton = document.getElementById('displayHistory');
const inventoryTableBody = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];

 

function getCurrentDateTime() {
  const now = new Date();
  const options = { 
    month: 'short', 
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return now.toLocaleString('en-US', options);
}

function addInventory() {
  const itemUserNameInput = document.getElementById('item-userName');
  const itemSerialInput = document.getElementById('item-serial');
  const itemCategoryInput = document.getElementById('item-category');
  const itemDescriptionInput = document.getElementById('item-description');
  const itemQuantityInput = document.getElementById('item-quantity');
  const itemBuyPriceInput = document.getElementById('item-buyPrice');
  const itemSellPriceInput = document.getElementById('item-sellPrice');

  if (
    !itemCategoryInput.value ||
    !itemDescriptionInput.value ||
    !itemQuantityInput.value ||
    !itemBuyPriceInput.value ||
    !itemSellPriceInput.value
  ) {
    alert('Please fill out all required fields.');
    return;
  }

  const itemUserName = itemUserNameInput.value;
  const itemDate = getCurrentDateTime();
  const itemSerial = itemSerialInput.value;
  const itemCategory = itemCategoryInput.value;
  const itemDescription = itemDescriptionInput.value;
  const itemQuantity = itemQuantityInput.value;
  const itemBuyPrice = Number(itemBuyPriceInput.value).toFixed(2);
  const itemSellPrice = Number(itemSellPriceInput.value).toFixed(2);
  const itemProfit = Number((itemSellPrice - itemBuyPrice) * itemQuantity).toFixed(2);
  
  const inventoryItem = {
    itemUserName: itemUserName,
    itemDate: itemDate,
    itemSerial: itemSerial,
    itemCategory: itemCategory,
    itemDescription: itemDescription,
    itemQuantity: itemQuantity,
    itemBuyPrice: itemBuyPrice,
    itemSellPrice: itemSellPrice,
    itemProfit: itemProfit
  };
  ////////////////////////////

  fetch('http://localhost:3000/admin/inventory-management', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(inventoryItem)
  })
  .then(res => res.json())
  .then(data => {
  // Get the table and tbody id on inner
  const table = document.querySelector("#inventoryTable");
  const tbody = table.querySelector("tbody");
  
  // will create a new row incoming item
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${itemUserName}</td>  
  <td>${itemDate}</td>
  <td>${itemSerial}</td>
  <td>${itemCategory}</td>
  <td>${itemDescription}</td>
  <td>${itemQuantity}</td>
  <td>${itemBuyPrice}</td>
  <td>${itemSellPrice}</td>
  <td>${itemProfit}</td>
  `;
  // Add the to the row of the html tbody
  tbody.appendChild(row);
  // Reset the form input fields
   inventoryForm.reset();
  })
  .catch(error => {
  console.error('Error:', error);
  });
  }
  ///////////////////////////////    
addInventoryButton.addEventListener('click', addInventory);