import './App.css'
import { Route, Routes } from "react-router-dom";
import ClientLayout from './Components/ClientLayout';
import Home from './Pages/Client/Home';
import About from './Pages/Client/About';
import Contact from './Pages/Client/Contact';
import Detail from './Pages/Client/Detail';
import Products from './Pages/Client/Products';
function App() {

  
  return (
    <>
    
      <Routes>
          <Route path="/" element={<ClientLayout/>}  >
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="detail" element={<Detail/>}/>
            <Route path="products" element={<Products/>}/>
          </Route>

      </Routes>
      
    </>
  )
}

export default App
