import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [products, setProducts] = useState([])

  return (
    <>
      <h1>Menular</h1>
      <Cards products={products} setProducts={setProducts}/>
    </>
  )
}

export default App
