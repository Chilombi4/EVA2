import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-5">
        <h2>Tu carrito está vacío 🛒</h2>
        <p className="text-muted">¡Agrega algunos productos desde el catálogo!</p>
        <Link to="/" className="btn btn-primary mt-3">Ir a la Tienda</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold">Carrito de Compras</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="d-flex align-items-center gap-3">
                  <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                  <span className="fw-semibold">{item.title}</span>
                </td>
                <td>${item.price.toLocaleString()}</td>
                <td>{item.quantity}</td>
                <td className="fw-bold">${(item.price * item.quantity).toLocaleString()}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger btn-sm">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4 p-3 bg-light rounded shadow-sm">
        <button onClick={clearCart} className="btn btn-outline-secondary">Vaciar Carrito</button>
        <div className="text-end">
          <h4 className="fw-bold m-0">Total: ${total.toLocaleString()}</h4>
          <button className="btn btn-success btn-lg mt-2">Proceder al Pago</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;