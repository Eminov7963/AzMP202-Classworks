import { useEffect, useState } from "react";
import axios from "axios";
import { Base_Url } from "../../constant/services";
import styles from "./index.module.scss";
import Grid from "@mui/material/Grid2";
import Rating from "@mui/material/Rating";
import { FaHeart } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import TextField from "@mui/material/TextField";
const Home = () => {
  const [products, setProdutcs] = useState([]);
  const [productscopy, setProdutcsCopy] = useState([]);
  const [seachvalue, setSearchValue] = useState("")

  const getAlldata = async () => {
    try {
      const res = await axios.get(`${Base_Url}/products`);
      console.log(res.data);

      setProdutcs(res.data.data);
      setProdutcsCopy(res.data.data)
    } catch (error) {
      console.log(error);
      
    }
  };
  const handleChange = (e)=>{
    let sorted = null
    console.log(e.target.value);
    if (e.target.value === "asc") {
     sorted = [...products].toSorted((a,b)=>a.price - b.price)
    }else if (e.target.value === "desc") {
      sorted = [...products].toSorted((a, b) => b.price - a.price);
    } else {
      sorted = [...productscopy];
    }
    setProdutcs(sorted)
    
  }
  const filtered = products.filter((q)=>q.title.toLowerCase().includes(seachvalue.toLocaleLowerCase().trim()))
  useEffect(() => {
    getAlldata();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <select name="" id="" onChange={handleChange} className={styles.select}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
          <option value="default">Default</option>
        </select>
      </div>

      <section className={styles.products}>
        <Grid container spacing={2}>
          {products.length > 0 &&
            filtered.map((q) => {
              return (
                <Grid size={4} key={q._id}>
                  <div className={styles.card}>
                    <img src={q.image} alt={q.title} />
                    <h1>{q.title}</h1>

                    <p>
                      {q.oldprice ? (
                        <span className={styles.oldprice}>{q.oldprice}</span>
                      ) : (
                        ""
                      )}{" "}
                      ${q.price}
                    </p>
                    <p>
                      <Rating name="half-rating" defaultValue={q.ratings} />
                    </p>
                    <button className={styles.basket}>
                      <BsBasket />
                      Add to card
                    </button>
                    <div>
                      <button className={styles.heart}>
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </section>
    </>
  );
};

export default Home;
