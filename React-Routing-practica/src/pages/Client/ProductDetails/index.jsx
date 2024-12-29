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
       details
      </div>
    </>
  );
};

export default ProductDetails;