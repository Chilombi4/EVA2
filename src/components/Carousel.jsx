export default function Carousel({ items = [] }) {
  return (
    <section aria-label="Carrusel de productos">
      {items.map((item) => (
        <div key={item.id ?? item.name}>{item.name}</div>
      ))}
    </section>
  );
}
