import { useContext, useEffect, useState } from 'react'
import { BaseUrl } from '../../constant/services';
import axios from "axios"
import styles from "./index.module.scss"
import Rating from "@mui/material/Rating";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { WishlistComtext } from '../../context/productContext';
import TextField from "@mui/material/TextField";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Home = () => {
  const [products,setProducts] = useState([])
  const [productscopy,setProductsCopy] = useState([])
  const [searchquery, setSearchQuery] = useState("")

  const getAlldata = async ()=>{
    try {
      const resp = await axios.get(`${BaseUrl}/products`);
      console.log(resp.data.data);
      setProducts(resp.data.data)
      setProductsCopy(resp.data.data);
    } catch (error) {
      console.log(error);
    }
    
  }
  const { ToggleWishlist } = useContext(WishlistComtext);

  const filtered = products.filter((c) =>
    c.title.toLowerCase().includes(searchquery.toLowerCase().trim())
  );

  const deleteData = async(id)=>{
    try {
      const deleted = await axios.delete(`${BaseUrl}/products/${id}`);
      if (deleted.status === 200) {
        setProducts([...products.filter((c) => c._id !== id)]);
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleChange = async (e)=>{
    let sorted = null
    if (e.target.value === "asc") {
      sorted = [...products].toSorted((a, b) => a.price - b.price);
    } else if (e.target.value === "desc") {
      sorted = [...products].toSorted((a, b) => b.price - a.price);
    }else{
      sorted = [...productscopy]
    }
    setProducts(sorted)
    
  }

  useEffect(()=>{
    getAlldata()
  },[])
  return (
    <section className={styles.data}>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className={styles.search}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select name="" id="" onChange={handleChange}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
          <option value="default">Default</option>
        </select>
      </div>
      <div className={`container ${styles.contain}`}>
        <div className={`row ${styles.wor}`}>
          {products &&
            filtered.map((q) => {
              return (
                <div className={`col-3 col-sm-12 ${styles.card} `} key={q._id}>
                  <img src={q.image} alt={q.title} />
                  <h1>{q.title}</h1>
                  <p>{q.description}</p>
                  <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                    value={q.ratings}
                  />
                  <p className={styles.price}>{q.price}</p>
                  <div className={styles.icons}>
                    <button
                      className={styles.delete}
                      onClick={() => deleteData(q._id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <Link to={`/${q._id}`} className={styles.detail}>
                      <FaInfoCircle />
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
      </div>
    </section>
  );
}

export default Home
