// Global variable to hold the basket
let basket = JSON.parse(localStorage.getItem('basket')) || [];

window.onload = function () {
    const basketContainer = document.getElementById('basket-items');
    const totalAmountElement = document.getElementById('total-amount');

    // Ensure basket and totalAmountElement are found
    if (!basketContainer || !totalAmountElement) return;

    if (basket.length === 0) {
        basketContainer.innerHTML = "<p>Your basket is empty!</p>";
        totalAmountElement.textContent = "0.00";
        return;
    }

    let totalAmount = 0;

    basket.forEach((item) => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card text-center p-3">
                <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h6 class="brand-name text-uppercase text-muted mb-1">${item.brand}</h6>
                    <h5 class="product-name fw-bold">${item.name}</h5>
                    <p class="price fw-semibold">£${item.price.toFixed(2)}</p>
                    <p class="quantity">Quantity: ${item.quantity}</p>
                    <button class="btn btn-danger" onclick="removeFromBasket(${item.id})">Remove</button>
                </div>
            </div>
        `;
        basketContainer.appendChild(productCard);
        totalAmount += item.price * item.quantity;
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
};

// Function to remove item from the basket
function removeFromBasket(productId) {
    // Get the basket from localStorage
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    
    // Remove the item with the given productId
    basket = basket.filter(item => item.id !== productId);

    // Save the updated basket to localStorage
    localStorage.setItem('basket', JSON.stringify(basket));

    // Reload the page to update the display
    window.location.reload();
}

// Function to clear the entire basket
function clearBasket() {
    if (confirm("Are you sure you want to clear your entire basket?")) {
        localStorage.removeItem('basket');
        window.location.reload();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const changeButtons = document.getElementById("changeButtons");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true" && username && changeButtons) {
        changeButtons.innerHTML = `
            <span class="me-3">Welcome, ${username}</span>
            <button class="btn btn-danger" onclick="logout()">Logout</button>
        `;
    }
});

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
}
