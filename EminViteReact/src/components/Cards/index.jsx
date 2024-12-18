import React from 'react'
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
const Cards = ({ products, setProducts }) => {
    const handleDelete = async (id) => {
        const res = await controller.deleteDataById(endpoints.products, id);
        console.log(res);
    
        if (res.status === 200) {
          setProducts(products.filter((q) => q.id !== id));
        }
      };
  return (
    <div>index</div>
  )
}

export default Cards