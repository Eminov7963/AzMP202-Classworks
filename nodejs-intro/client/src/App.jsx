import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const BASE_URL = "http://localhost:8080"

  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await axios(`${BASE_URL}/products`)
      
      setProducts(res.data.data)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${pId}`)

      console.log(res);

      if (res.status === 200) {
        setProducts([...products.filter((p) => p.id !== pId)])
      } else {
        throw new Error("failed to delete")
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (loading) {
    return <p>LOADING...</p>
  }

  return (
    <>

      
      <ul>
        {products.length > 0 && products.map((p) => {
          return <li key={p.id}><span>{p.name}</span> <button onClick={() => {
            if (window.confirm("are u sure to delete??")) {
              handleDelete(p.id)
            }
          }}>delete</button></li>
        })}
      </ul>
    </>
  )
}

export default App
