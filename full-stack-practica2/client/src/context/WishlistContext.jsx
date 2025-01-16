import React, { createContext, useState } from "react";
export const WishlistContext = createContext(null);
const WishlistProvider = ({ children }) => {
  const [wishlist, setWish] = useState([]);
    const toggleWishlist = (prod) => {
      const idx = wish.findIndex((q) => q._id === prod._id);
      if (idx === -1) {
        setWish([...wish], { ...prod });
      } else {
        setWish([...wish].filter((q) => q._id !== prod._id));
      }
    };
  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
