import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const NavbarUI = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
           Mi Tienda TCG
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/login" className="btn btn-outline-light btn-sm">Ingresar</Link>
            <Link to="/registro" className="btn btn-primary btn-sm">Registrarse</Link>
            <Link to="/carrito" className="btn btn-danger btn-sm ms-2">
               {totalItems}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUI;