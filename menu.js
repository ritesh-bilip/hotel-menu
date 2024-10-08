let cart = [];
let total = 0;

function addItem(button) {
    const itemElement = button.parentElement;
    const name = itemElement.getAttribute('data-name');
    const price = parseFloat(itemElement.getAttribute('data-price'));
    
    cart.push({ name, price });
    total += price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // Clear previous cart items
    cartItems.innerHTML = '';

    // Add new cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Update total
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function proceedToBill() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
    window.location.href = 'bill.html';
}
