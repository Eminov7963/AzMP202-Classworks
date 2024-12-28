import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { enpoints } from "../../../services/constants";


import controller from "../../../services/helper";
import styles from "./index.module.scss";




const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const nav = useNavigate();

  const getProduct = async () => {
    try {
      const data = await controller.getDataById(enpoints.products, id);

      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value)));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.title} to cart`);
  };

  const handleGoBack = () => {
    nav(-1);
  };
  return (
    <>
      

      <div>
        {product && (
          <div className={styles.productDetails}>
            <div className={styles.productImage}>
              <ImageGallery
                images={product.images}
                thumbnail={product.thumbnail}
              />
            </div>
            <div className={styles.productInfo}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <p className={styles.productBrand}>By {product.brand}</p>
              <div className={styles.productRating}>
                <Star className={styles.starIcon} />
                <span>{product.rating}</span>
              </div>
              <p className={styles.productPrice}>${product.price}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productActions}>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className={styles.quantityInput}
                />
                <button
                  onClick={handleAddToCart}
                  className={styles.addToCartButton}
                >
                  Add to Cart
                </button>
              </div>
              <p className={styles.stockInfo}>
                In Stock: {product.stock} units
              </p>
              <div className={styles.productTags}>
                {product.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <button
                  onClick={handleGoBack}
                  className={styles.goBackBtn}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;