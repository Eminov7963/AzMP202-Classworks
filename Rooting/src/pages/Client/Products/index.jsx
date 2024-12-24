import React, { useState } from 'react';
import './products.scss';

const Products = () => {

  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999, description: 'High performance laptop', category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 799, description: 'Latest model smartphone', category: 'Electronics' },
    { id: 3, name: 'Shoes', price: 49, description: 'Comfortable running shoes', category: 'Clothing' },
    { id: 4, name: 'T-shirt', price: 19, description: 'Cotton t-shirt in various colors', category: 'Clothing' },
    { id: 5, name: 'Coffee Maker', price: 89, description: 'Automatic coffee machine', category: 'Appliances' },
    { id: 6, name: 'Blender', price: 59, description: 'Powerful kitchen blender', category: 'Appliances' },
  ]);


  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredProducts = categoryFilter === 'All'
    ? products
    : products.filter(product => product.category === categoryFilter);

  return (
    <div className="products-container">
      <main className="products-main">
        <section className="products-filters">
          <h2>Filter by Category</h2>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Appliances">Appliances</option>
          </select>
        </section>

        <section className="products-list">
          <h2>Our Products</h2>
          <div className="product-cards">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">${product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="products-footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Products;
