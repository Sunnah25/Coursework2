window.onload = function () {
    const basket = JSON.parse(localStorage.getItem('basket')) || [];
    const basketContainer = document.getElementById('basket-items');
    const totalAmountElement = document.getElementById('total-amount');

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

function removeFromBasket(productId) {
    let basket = JSON.parse(localStorage.getItem('basket')) || [];
    basket = basket.filter(item => item.id !== productId);
    localStorage.setItem('basket', JSON.stringify(basket));
    window.location.reload();
}

function clearBasket() {
    if (confirm("Are you sure you want to clear your entire basket?")) {
        localStorage.removeItem('basket');
        window.location.reload();
    }
}
