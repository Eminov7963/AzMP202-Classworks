import React from 'react'
import { createContext, useState } from 'react'
export const BasketContext = createContext(null)
const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState([])


    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            const idx = prevBasket.findIndex((q) => q.id === product.id)

            if (idx === -1) {
                return [...prevBasket, { ...product, quantity: 1 }]
            }

            prevBasket[idx].quantity+=1
            return [...prevBasket]
        })

        console.log(basket);

    }


    const removeBasketItem = (product) => {
        setBasket((prevBasket) => prevBasket.filter((q) => q.id !== product.id))
    }
    const increaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity++
            return [...prevBasket]
        })
    }
    const decreaseBasketCount = (product) => {
        setBasket((prevBasket) => {
            const found = prevBasket.find((q) => q.id === product.id)
            found.quantity--
            if (found.quantity === 0) {
                return prevBasket.filter((q) => q.id !== product.id)
            }
            return [...prevBasket]
        })
    }
    const clearBasket = () => {
        setBasket([])
    }

   


    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket, }}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider