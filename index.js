// Sample menu items
const menuItems = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 15 },
  { id: 3, name: 'Item 3', price: 8 },
  // Add more items as needed
];

const loginForm = document.getElementById('loginForm');
const menuContainer = document.querySelector('.menu-container');
const menuItemsDiv = document.getElementById('menuItems');
const billContainer = document.querySelector('.bill-container');
const billTable = document.getElementById('billTable');
const feedbackContainer = document.querySelector('.feedback-container');

let selectedItems = [];

// Function to display menu items
function displayMenu() {
  menuItemsDiv.innerHTML = '';
  menuItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <input type="checkbox" id="item${item.id}" data-name="${item.name}" data-price="${item.price}">
      <label for="item${item.id}">${item.name} - $${item.price}</label><br>
    `;
    menuItemsDiv.appendChild(itemDiv);
  });
}

// Function to calculate and display bill
function generateBill() {
  let totalAmount = 0;
  billTable.innerHTML = `
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  `;
  selectedItems.forEach(item => {
    totalAmount += item.dataset.price * 1; // Convert to number
    billTable.innerHTML += `
      <tr>
        <td>${item.dataset.name}</td>
        <td>$${item.dataset.price}</td>
      </tr>
    `;
  });
  billTable.innerHTML += `
    <tr>
      <td><strong>Total</strong></td>
      <td><strong>$${totalAmount.toFixed(2)}</strong></td>
    </tr>
  `;
}

// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Perform validation (e.g., check credentials)
  // For simplicity, let's assume successful login
  displayMenu();
  menuContainer.style.display = 'block';
});

// Event listener for place order button
document.getElementById('placeOrderBtn').addEventListener('click', function() {
  selectedItems = [...document.querySelectorAll('input[type="checkbox"]:checked')];
  if (selectedItems.length > 0) {
    menuContainer.style.display = 'none';
    billContainer.style.display = 'block';
    generateBill();
  } else {
    alert('Please select items to place the order.');
  }
});

// Event listener for feedback button
document.getElementById('feedbackBtn').addEventListener('click', function() {
  billContainer.style.display = 'none';
  feedbackContainer.style.display = 'block';
});

// Event listener for submit feedback button
document.getElementById('submitFeedbackBtn').addEventListener('click', function() {
  const feedbackText = document.getElementById('feedbackText').value;
  // Send feedback (e.g., to a server or display it)
  alert(`Thank you for your feedback: ${feedbackText}`);
  feedbackContainer.style.display = 'none';
});
