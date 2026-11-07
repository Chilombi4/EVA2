import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarUI from './components/Navbar';
import FooterUI from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarUI />
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </main>
        <FooterUI />
      </Router>
    </CartProvider>
  );
}

export default App;