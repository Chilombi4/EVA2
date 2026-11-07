import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img 
          src={product.image} 
          className="card-img-top img-fluid" 
          alt={product.title}
          style={{ height: '220px', objectFit: 'cover' }}
          onError={(e) => {
            // Imagen de respaldo por si el archivo no existe en public
            e.target.src = 'https://via.placeholder.com/300x200?text=Sin+Imagen';
          }}
        />
        <div className="card-body d-flex flex-column text-center">
          <h5 className="card-title fw-bold">{product.title}</h5>
          <p className="card-text text-primary fs-5 fw-semibold">${product.price.toLocaleString()}</p>
          <div className="mt-auto d-flex gap-2">
            <Link to={`/producto/${product.id}`} className="btn btn-outline-primary w-50">
              Ver detalle
            </Link>
            <button 
              onClick={() => addToCart(product)} 
              className="btn btn-success w-50"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;