import React from 'react'
import { createContext, useState } from 'react';

export const FavoritesContext = createContext(null)
const Favoritest = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const Wishproducts = (product)=>{
        const found = favorites.find((p)=>p.id === product.id); 
        if(found){
            setFavorites((prev)=>prev.filter((q)=>q.id !== product.id))
        }else{
            setFavorites((prev)=>[...prev, product ])
        }
    }
    const clearFavorites = () =>{
        setFavorites([])
    }
    console.log(favorites);
  return (
    <FavoritesContext.Provider value={{favorites, Wishproducts, clearFavorites}}>{children}</FavoritesContext.Provider>
  )
}

export default Favoritest