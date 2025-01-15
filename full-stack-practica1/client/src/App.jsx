import './App.css'
import {Routes,Route} from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home';
import Detail from './pages/Detail/ndex';
import Add from './pages/Add';
import Wishlist from './pages/Wishlist';
import NotFound from './pages/Notfound';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path=':id' element={<Detail/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>

          <Route path='*' element={<NotFound  />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
