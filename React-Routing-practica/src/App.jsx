import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Client/Contact'
import Favorites from './pages/Client/Favorites'
import Home from './pages/Client/Home'
import ProductDetails from './pages/Client/ProductDetails'
import Products from './pages/Client/Products'
import Notfound from './pages/NotFound'

function App() {


  return (
    <>
        <Routes>
          {/* Client */}
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path='favorites' element={<Favorites/>}/>
            </Route>
            <Route path="*" element={<Notfound />} />
        </Routes>
    </>
  )
}

export default App
