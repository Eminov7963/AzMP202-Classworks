import React, { useContext } from 'react'
import { ThemaContext } from '../../context/Team'
import { Button } from "antd";
import "./index.css"
const ChangebackThema = () => {
    const {thema, ChangeThema} = useContext(ThemaContext)
  return (
    <div>
      <Button onClick={()=> ChangeThema()}>{thema === "light" ? "dark mode":"light mode"}</Button>
    </div>
  )
}

export default ChangebackThema
