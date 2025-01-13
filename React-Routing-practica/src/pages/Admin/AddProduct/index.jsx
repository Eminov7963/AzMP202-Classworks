import { useState } from "react";
import styles from "./index.module.scss";

import { enpoints } from "../../../services/constants";
import controller from "../../../services/helper";
import { Helmet } from "react-helmet-async";


export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await controller.addNewData(
        enpoints.products,
        formData
      );
      if (response && response.status === 201) {
        console.log("Product added successfully:", response.data);
      } else {
        console.error("Error adding product:", response);
      }
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <form className={styles.addform} onSubmit={handleSubmit}>
      <Helmet>
        <title>Product Adding</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h2 className={styles.title}>Add a Product</h2>

      <div className={styles.inputGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="0"
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="img">Img</label>
        <input
          type="url"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Add Product
      </button>
    </form>
  );
}
