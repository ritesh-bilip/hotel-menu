window.onload = function() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const subtotal = parseFloat(localStorage.getItem('total')) || 0;
  const gst = 0.10;
  const gstAmount = subtotal * gst;
  const totalBill = subtotal + gstAmount;

  const billItems = document.getElementById('bill-items');
  const subtotalElement = document.getElementById('subtotal');
  const gstElement = document.getElementById('gst');
  const totalBillElement = document.getElementById('total-bill');

  // Clear previous bill items
  billItems.innerHTML = '';

  // Add new bill items
  cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      billItems.appendChild(listItem);
  });

  // Update bill details
  subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  gstElement.textContent = `GST (10%): $${gstAmount.toFixed(2)}`;
  totalBillElement.textContent = `Total Bill: $${totalBill.toFixed(2)}`;
}

function goBack() {
  window.history.back();
}
