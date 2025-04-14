


function searchProducts() {
    const query = document.getElementById('productSearch').value.toLowerCase();
    const allProducts = document.querySelectorAll('.col-md-4');

    allProducts.forEach(product => {
        const name = product.querySelector('.product-name')?.textContent.toLowerCase();
        const brand = product.querySelector('.brand-name')?.textContent.toLowerCase();
        const type = product.querySelector('.product-type')?.textContent.toLowerCase();

        if (name.includes(query) || brand.includes(query) || type.includes(query)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}




function filterProducts(category) {
    let products = document.querySelectorAll(".col-md-4.mb-4"); 

    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block"; // Show all products
        } else {
            product.style.display = product.getAttribute("data-category") === category ? "block" : "none";
        }
    });
}


function addToBasket(productId) {
    const product = document.querySelector(`[data-id='${productId}']`);
    
    const name = product.querySelector('.product-name')?.textContent || 'Unknown';
    const brand = product.querySelector('.brand-name')?.textContent || 'Unknown';
    const price = parseFloat(product.querySelector('.price')?.textContent.replace('£', '') || '0');
    const imageUrl = product.querySelector('img')?.getAttribute('src') || '';
    const category = product.getAttribute('data-category') || '';

    let basket = JSON.parse(localStorage.getItem('basket')) || [];

    const existingItem = basket.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        basket.push({
            id: productId,
            name,
            brand,
            price,
            imageUrl,
            category,
            quantity: 1
        });
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    alert(`${name} successfully added to basket!`);
}


    // Save updated basket to localStorage
    localStorage.setItem('basket', JSON.stringify(basket));

    alert(`${productName} added to basket!`);


function initialize() {
    // Set up filter buttons
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.toLowerCase();
            filterProducts(category);
        });
    });
    
    // Set up add to basket buttons
    document.querySelectorAll('.btn.btn-primary').forEach(button => {
        const productId = button.closest('.col-md-4').getAttribute('data-id');
        button.addEventListener('click', () => addToBasket(productId));
    });
}

window.onload = initialize;








    
