import { Routes, Route } from 'react-router-dom'
import './App.css'
import Mainlayout from './layouts/Mainlayout/index';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails/inex';
import Products from './pages/Products';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path='favorites' element={<Favorites/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
