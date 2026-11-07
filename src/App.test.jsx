import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { CartProvider, useCart } from './context/CartContext';
import ProductCard from './components/ProductCard';
import { MemoryRouter } from 'react-router-dom';

// Limpia el DOM antes de cada prueba para evitar duplicados
beforeEach(() => {
  cleanup();
});

// Componente MOCK para aislar las pruebas
const MockComponent = () => {
  const { cart, addToCart } = useCart();
  return (
    <div>
      <span data-testid="cart-count">{cart.length}</span>
      <button 
        data-testid="add-mock-btn" 
        onClick={() => addToCart({ id: 99, title: 'Producto Test', price: 1000 })}
      >
        Añadir Mock
      </button>
    </div>
  );
};

describe('Suite de Pruebas Unitarias - Frontend Tienda', () => {
  
  // Prueba 1: Inicialización del carrito vacío
  test('1. El carrito debe iniciar vacío', () => {
    render(
      <CartProvider>
        <MockComponent />
      </CartProvider>
    );
    expect(screen.getByTestId('cart-count').textContent).toBe('0');
  });

  // Prueba 2: Incremento al agregar producto
  test('2. Debe incrementar la cantidad de ítems al añadir un producto', () => {
    render(
      <CartProvider>
        <MockComponent />
      </CartProvider>
    );
    const button = screen.getByTestId('add-mock-btn');
    fireEvent.click(button);
    expect(screen.getByTestId('cart-count').textContent).toBe('1');
  });

  // Prueba 3: Renderizado correcto de props en ProductCard
  test('3. ProductCard debe renderizar correctamente el título recibido por props', () => {
    const mockProduct = { id: 10, title: 'Caja de Dados', price: 4990, image: '/test.png' };
    render(
      <CartProvider>
        <MemoryRouter>
          <ProductCard product={mockProduct} />
        </MemoryRouter>
      </CartProvider>
    );
    expect(screen.getByText('Caja de Dados')).toBeTruthy();
  });
});