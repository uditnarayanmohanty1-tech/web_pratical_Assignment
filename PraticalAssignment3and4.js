// ES6 array of product objects
const products = [
    { id: 1, name: "Rice", price: 50 },
    { id: 2, name: "Milk", price: 30 },
    { id: 3, name: "Vegetables", price: 40 }
];

// DOM reference
const productList = document.getElementById("productList");

// Function to display products
const displayProducts = () => {
    productList.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.margin = "10px 0";

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
};

// Event handling function
const addToCart = (productName) => {
    alert(productName + " added to cart");
};

// API usage example
fetch("https://fakestoreapi.com/products?limit=2")
    .then(response => response.json())
    .then(data => {
        console.log("API Data:", data);
    });

// Initial call
displayProducts();
