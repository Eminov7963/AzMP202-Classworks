import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { DB_URl } from '../../constant/services';
import styles from "./index.module.scss"
const Detail = () => {  
  const {id} = useParams()
  const [product, setProduct] = useState([])

  const getDatabyid = async ()=>{
    try {
      const resp = await axios(`${DB_URl}/products/${id}`);
      setProduct(resp.data.data);
      console.log(resp.data.data);
    } catch (error) {
      console.log(error);
      
    }

  }
  useEffect(()=>{
    if (id) {
      getDatabyid();
    }
  },[])
  return (
    <>
      <div className={styles.Detcontainer}>
        {product ? (
          <div className={styles.Detcontainer}>
            {product.image ?<img src={product.image} alt="" />:""}
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ) : (
          <h1>Bele bir product yoxdur</h1>
        )}
      </div>
    </>
  );
}

export default Detail
