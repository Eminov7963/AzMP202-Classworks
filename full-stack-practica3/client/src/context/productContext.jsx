import React, { createContext, useState } from 'react'
export const WishlistComtext = createContext(null)

const WishlistProvider = ({children}) => {
    const [wish, setWish] = useState([])

    const ToggleWishlist = (product)=>{
        const idx = wish.findIndex((c)=>c._id === product._id)
        if (idx === -1) {
            setWish([...wish, { ...product }]);
        }
        else{
            setWish([...wish.filter((c)=>c._id !== product._id)])
        }
    }
  return (
    <WishlistComtext.Provider value={{wish,ToggleWishlist}}>
      {children}
    </WishlistComtext.Provider>
  )
}

export default WishlistProvider
