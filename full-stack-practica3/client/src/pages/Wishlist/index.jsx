import React from "react";
import { useContext } from "react";
import { WishlistComtext } from "../../context/productContext";
import { FaHeart } from "react-icons/fa";
import styles from "./index.module.scss";
import Rating from "@mui/material/Rating";
const Wishlist = () => {
  const {wish, ToggleWishlist} = useContext(WishlistComtext);
  return (
    <div className={styles.wish}>
      {wish &&
        wish.map((w) => {
          return (
            <div className={`col-3 ${styles.Wishcard}`} key={w._id}>
              <img src={w.image} alt={w.title} />
              <h1>{w.title}</h1>
              <p>{w.description}</p>
              <Rating
                name="simple-uncontrolled"
                onChange={(event, newValue) => {
                  console.log(newValue);
                }}
                value={w.ratings}
              />
              <p className={styles.price}>{w.price}</p>
              <button
                className={styles.heart}
                onClick={() => ToggleWishlist(w)}
              >
                <FaHeart />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist;
