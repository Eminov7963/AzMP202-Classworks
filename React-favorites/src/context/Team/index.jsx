import React, { createContext, useState } from 'react'

export const ThemaContext = createContext(null)
const ThemaProvider = ({children}) => {
    const  [thema, setThema] = useState("light")
    const ChangeThema = () => {
        setThema((prewthema)=>prewthema=== "light" ? "dark" : "light")
    };
  return (
    <div>
        <ThemaContext.Provider value={{thema, ChangeThema}}>{children}</ThemaContext.Provider>
    </div>
  )
}

export default ThemaProvider
