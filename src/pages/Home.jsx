import React from 'react';
import ProductCard from '../components/ProductCard';

// Revisa que los nombres de archivo coincidan exacto con lo que tienes en public/assets/img/
const productsData = [
  { 
    id: 1, 
    title: 'Juego de Mesa 1', 
    price: 15990, 
    image: '/assets/img/JuegoTabla1.jpg' 
  },
  { 
    id: 2, 
    title: 'Playmat Pro', 
    price: 12990, 
    image: '/assets/img/Playmat1.png' 
  },
  { 
    id: 3, 
    title: 'Portalápices Edición Especial', 
    price: 5990, 
    image: '/assets/img/Portalapices1.png' 
  }
];

const Home = () => {
  return (
    <div>
      {/* Hero / Banner Principal */}
      <section className="text-center py-5 bg-primary text-white rounded-3 mb-5 shadow">
        <h1 className="display-4 fw-bold">Bienvenidos a la Tienda</h1>
        <p className="lead">Los mejores juegos de mesa, accesorios y playmats al mejor precio.</p>
      </section>

      {/* Catálogo de Productos */}
      <h2 className="mb-4 text-center fw-bold">Catálogo de Productos</h2>
      <div className="row">
        {productsData.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;