document.getElementById('hamburger-menu').addEventListener('click', function() {
document.querySelector('nav').classList.toggle('active');
});

document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const selectedItems = [];
  const checkboxes = document.querySelectorAll('input[name="item"]:checked');
  
  checkboxes.forEach(function(checkbox) {
      selectedItems.push(checkbox.value);
  });
  
  const orderSummary = document.getElementById('order-summary');
  if (selectedItems.length > 0) {
      orderSummary.innerHTML = `<h3>Your Order:</h3><ul>${selectedItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
  } else {
      orderSummary.innerHTML = '<p>No items selected.</p>';
  }
});