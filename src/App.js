import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Contact from './component/Contact';
import Blog from './component/Blog';
import About from './component/About';
import { SiHoppscotch } from 'react-icons/si';
import Shop from './component/Shop';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Profile from './component/Profile';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/> 
    <Route path="about-us" element={<About/>}/>
    <Route path="contact-us" element={<Contact/>}/>
    <Route path="blog" element={<Blog/>}/>
     <Route path="shop" element={<Shop/>}/>
      <Route path="cart" element={<Cart/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
        <Route path="login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;
