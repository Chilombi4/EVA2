import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const productsData = [
  { id: 1, title: 'Juego de Mesa 1', price: 15990, image: '/assets/img/JuegoTabla1.jpg', description: 'Excelente juego de estrategia para toda la familia.' },
  { id: 2, title: 'Playmat Pro', price: 12990, image: '/assets/img/Playmat1.png', description: 'Tapete antideslizante de alta calidad para cartas TCG.' },
  { id: 3, title: 'Portalápices Edición Especial', price: 5990, image: '/assets/img/Portalapices1.png', description: 'Accesorio exclusivo para organizar tu espacio de juego.' }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-5"><h3>Producto no encontrado ❌</h3><Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link></div>;
  }

  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img src={product.image} alt={product.title} className="img-fluid rounded shadow" style={{ maxHeight: '400px' }} onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300'; }} />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <h3 className="text-primary my-3">${product.price.toLocaleString()}</h3>
          <p className="lead">{product.description}</p>
          <div className="d-flex gap-3 mt-4">
            <button onClick={() => addToCart(product)} className="btn btn-success btn-lg">Agregar al Carrito</button>
            <Link to="/" className="btn btn-outline-secondary btn-lg">Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;