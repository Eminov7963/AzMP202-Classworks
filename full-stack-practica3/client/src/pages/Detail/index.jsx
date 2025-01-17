import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BaseUrl } from '../../constant/services';
import styles from "./index.module.scss"
import Rating from "@mui/material/Rating";
const Detail = () => {
  const {id} = useParams();
  const [ product, setProduct] = useState([])

  const getDataById = async ()=>{
    const resp = await axios.get(`${BaseUrl}/products/${id}`)
    console.log(resp.data.data);
    
    setProduct(resp.data.data)

  }

  useEffect(()=>{
    getDataById()
  },[])

  return (
    <div className={styles.mainBox}>
      {product && (
        <div className={styles.Det}>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <Rating
            name="simple-uncontrolled"
            onChange={(event, newValue) => {
              console.log(newValue);
            }}
            value={product.ratings}
          />
          <p className={styles.price}>{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default Detail
