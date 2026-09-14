import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { getIllustration } from '../../utils/illustrations';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const illustration = getIllustration(product.id, product.drawingType, product.colors);

  function handleAddToCart() {
    addToCart(product);
    setJustAdded(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setJustAdded(false), 1100);
  }

  return (
    <article className="product-card">
      <div className="product-image">
        <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: illustration }} />
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>
      <div className="product-body">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <span className="product-price">
          {formatPrice(product.price)}
          <small>{product.unit}</small>
        </span>
        <div className="add-row">
          <button
            type="button"
            className={`btn btn-primary${justAdded ? ' added' : ''}`}
            onClick={handleAddToCart}
          >
            {justAdded ? 'Dodato' : 'Dodajte u korpu'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
