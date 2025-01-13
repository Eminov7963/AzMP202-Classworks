import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Client/Contact'
import Favorites from './pages/Client/Favorites'
import Home from './pages/Client/Home'
import ProductDetails from './pages/Client/ProductDetails'
import Products from './pages/Client/Products'
import Notfound from './pages/NotFound'
import AdminMainLayout from './layouts/Admin/AdminMainLayout'
import Dashboard from './pages/Admin/DashBoard'
import AdminProducts from './pages/Admin/AdminProducts'
import AddProduct from './pages/Admin/AddProduct'
import Basket from './pages/Client/Basket'

function App() {


  return (
    <>
      <Routes>
        {/* Client */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="basket" element={<Basket />} />
        </Route>

        <Route path="/admin" element={<AdminMainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/products' element={<AdminProducts/>}/>
          <Route path='/admin/addproduct' element={<AddProduct/>}/>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App
