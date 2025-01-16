import React, { useContext, useEffect, useState } from 'react'
import styles from "./index.module.scss"
import { DB_URl } from '../../constant/services'
import axios from "axios"
import Rating from "@mui/material/Rating";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaInfo } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
const Home = () => {
  const[products, setProducts] = useState([])
  const[productscopy, setProductsCopy] = useState([])
  const[searchquery, setSearchQuery] = useState("")

  const getAlldata = async ()=>{
    try {
      const resp = await axios.get(`${DB_URl}/products`);
      setProducts(resp.data.data)
      setProductsCopy(resp.data.data)
    } catch (error) {
      console.log(error);
      
    }
    
  }
  const { toggleWishlist } = useContext(WishlistContext);

  const handleChange = (e)=>{
    let sorted = null;
    console.log(e.target.value);
    
    if (e.target.value === "asc") {
      sorted = [...products].toSorted((a,b)=>a.price-b.price)
    }else if (e.target.value === "desc") {
      sorted = [...products].toSorted((a,b)=>b.price-a.price)
    }else{
      sorted = productscopy
    }
    setProducts(sorted)
  }
  console.log(products);
  
  const filtered = products.filter((q) =>q.title.toLowerCase().includes(searchquery.toLocaleLowerCase().trim()))
  const handleDelete = async (id)=>{
      try {
        const deleted = await axios.delete(`${DB_URl}/products/${id}`);
        if (deleted.status === 200) {
          setProducts([...products].filter((q) => q._id !== id));
        }
        
      } catch (error) {
        console.log();
        
      }
      
  }
  useEffect(()=>{
    getAlldata()
  },[])

  return (
    <main>
      <section className={styles.products}>
        <div className={styles.search}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select name="" id="" onChange={handleChange} className={styles.sort}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
            <option value="default">Default</option>
          </select>
        </div>
        <div className={styles.container}>
          {products.length > 0 &&
            filtered.map((q) => {
              return (
                <div className={styles.cards} key={q._id}>
                  <img src={q.image} alt={q.title} />
                  <h4>{q.title}</h4>
                  <p>{q.description}</p>
                  <span>
                    {q.oldprice ? (
                      <span className={styles.oldprice}>{q.oldprice}</span>
                    ) : (
                      ""
                    )}{" "}
                    ${q.price}
                  </span>
                  <Rating
                    name="half-rating"
                    defaultValue={q.ratings}
                    precision={0.5}
                  />
                  <div className={styles.crud}>
                    <button
                      className={styles.delete}
                      onClick={() => handleDelete(q._id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <Link to={`/${q._id}`} className={styles.info}>
                      <FaInfo />
                    </Link>
                    <button
                      className={styles.heart}
                      onClick={() => ToggleWishlist(q)}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default Home
