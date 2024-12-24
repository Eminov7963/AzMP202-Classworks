import React from 'react';
import './products.scss';

const AdminProducts = () => {
  return (
    <div className="admin-products-container">
      <main className="admin-main">
        <section className="product-list">
          <h2>Product List</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product 1</td>
                <td>$20.00</td>
                <td>50</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td>Product 2</td>
                <td>$35.00</td>
                <td>20</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              {/* Add more products here */}
            </tbody>
          </table>
        </section>

        <section className="add-product">
          <h2>Add New Product</h2>
          <form>
            <label>
              Product Name:
              <input type="text" placeholder="Enter product name" />
            </label>
            <label>
              Price:
              <input type="number" placeholder="Enter price" />
            </label>
            <label>
              Stock:
              <input type="number" placeholder="Enter stock quantity" />
            </label>
            <button type="submit">Add Product</button>
          </form>
        </section>
      </main>

      <footer className="admin-footer">
        <p>&copy; 2024 Admin Dashboard</p>
      </footer>
    </div>
  );
};

export default AdminProducts;
