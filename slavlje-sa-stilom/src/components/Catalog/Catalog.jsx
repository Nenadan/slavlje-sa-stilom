import { useState } from 'react';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import ProductCard from '../ProductCard/ProductCard';
import { categories, products } from '../../data/products';
import './Catalog.css';

function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Sve');

  const visibleProducts = products.filter(
    (product) => activeCategory === 'Sve' || product.category === activeCategory,
  );

  return (
    <section className="section catalog" id="catalog">
      <div className="wrap">
        <div className="section-header">
          <div className="section-intro">
            <h2>Katalog</h2>
            <p>
              Cene su sa PDV-om. Za količine veće od prikazanih napišite nam u napomeni pa
              šaljemo poseban predlog.
            </p>
          </div>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="no-results">
            U ovoj kategoriji trenutno nema artikala. Izaberite drugu kategoriju ili nam pišite
            šta tražite.
          </p>
        )}
      </div>
    </section>
  );
}

export default Catalog;
