import logo from './logo.svg';
import './App.css';
import { Routes,Route, Navigate,useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';


function App() {
  return <>
 <Navbar/>

  <Routes>
  <Route path='home' element={<Home/>}/>
    <Route path='' element={<Home/>}/>
    <Route path='nav' element={<Navbar/>}/>
    <Route path='productDetails' element={<ProductDetails/>}>
    <Route path=':id' element={<ProductDetails/>}/>
    </Route>
    <Route path='cart' element={<Cart/>}/>
  

  </Routes>

  </>

}

export default App;
