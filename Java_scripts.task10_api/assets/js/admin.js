import { getAllData } from "./helper.js";

const tr_body = document.querySelector("#product-table-body");
const createButton = document.getElementById('create');
const modal = document.getElementById('create-product-modal');
const closeModalButton = document.getElementById('close-modal');
const createProductForm = document.getElementById('create-product-form');
const productIdField = document.getElementById('product-id');
const productNameField = document.getElementById('product-name');
const productPriceField = document.getElementById('product-price');
const productDescriptionField = document.getElementById('product-description');
const productStockField = document.getElementById('product-stock');

// Fetch products and populate the table
async function fetchProducts() {
    try {
        const products = await getAllData('products'); 
        Tbody(products); 
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Populate product table dynamically
function Tbody(products) {
    tr_body.innerHTML = ""; 
    products.forEach(product => {
        tr_body.innerHTML += `
            <tr data-id="${product.id}">
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
                <td>${product.stock}</td>
                <td>
                    <button class="edit-btn btn btn-warning" data-id="${product.id}">Edit</button>
                    <button class="delete-btn btn btn-danger" data-id="${product.id}">Delete</button>
                </td>
            </tr>
        `;
    });
    addEventListeners();
}

// Add event listeners for edit and delete buttons
function addEventListeners() {
    const editButtons = document.querySelectorAll(".edit-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            editProduct(productId); 
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.getAttribute('data-id');
            deleteProduct(productId); 
        });
    });
}

// Handle the "Create Product" button click
createButton.addEventListener('click', () => {
    modal.style.display = 'block';  // Show the modal form
    clearForm(); // Clear form fields
    productIdField.value = ''; // Ensure the product ID field is empty for create
});

// Close modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';  // Hide the modal form
});

// Handle form submission to create a new product or update an existing one
createProductForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent default form submission

    const id = productIdField.value;  // Get the product ID (empty if creating)
    const name = productNameField.value;
    const price = productPriceField.value;
    const description = productDescriptionField.value;
    const stock = productStockField.value;

    const productData = { name, price, description, stock };

    if (id) {
        // If ID is present, it's an update (PUT request)
        axios.put(`http://localhost:3000/products/${id}`, productData)
            .then(response => {
                console.log('Product updated:', response.data);
                fetchProducts();  // Refresh the product list
                modal.style.display = 'none';  // Close the modal
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    } else {
        // If no ID, it's a new product (POST request)
        axios.post('http://localhost:3000/products', productData)
            .then(response => {
                console.log('Product created:', response.data);
                fetchProducts();  // Refresh the product list
                modal.style.display = 'none';  // Close the modal
            })
            .catch(error => {
                console.error('Error creating product:', error);
            });
    }
});

// Edit product
function editProduct(id) {
    // Fetch the product data based on ID, prefill the form and set it for editing
    axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
            const product = response.data;
            productNameField.value = product.name;
            productPriceField.value = product.price;
            productDescriptionField.value = product.description;
            productStockField.value = product.stock;

            // Set the product ID in a hidden field
            productIdField.value = product.id;

            modal.style.display = 'block';  // Show modal form for editing
        })
        .catch(error => {
            console.error('Error fetching product:', error);
        });
}

// Delete product
function deleteProduct(id) {
    axios.delete(`http://localhost:3000/products/${id}`)
        .then(response => {
            console.log('Product deleted:', response.data);
            fetchProducts();  // Refresh the product list
        })
        .catch(error => {
            console.error('Error deleting product:', error);
        });
}

// Clear form fields (for creating a new product)
function clearForm() {
    productNameField.value = '';
    productPriceField.value = '';
    productDescriptionField.value = '';
    productStockField.value = '';
}

// Initial fetch of products
fetchProducts();
