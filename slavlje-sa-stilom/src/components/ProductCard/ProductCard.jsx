import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { getIllustration } from '../../utils/illustrations';
import { formatPrice } from '../../utils/formatPrice';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const addTimeoutRef = useRef(null);

  const photos = product.images ?? [];

  useEffect(() => () => clearTimeout(addTimeoutRef.current), []);

  const illustration = photos.length
    ? null
    : getIllustration(product.id, product.drawingType, product.colors);

  function handleAddToCart() {
    addToCart(product);
    setJustAdded(true);
    clearTimeout(addTimeoutRef.current);
    addTimeoutRef.current = setTimeout(() => setJustAdded(false), 1100);
  }

  return (
    <article className="product-card">
      <div className={`product-image${photos.length ? ' has-photos' : ''}`}>
        {photos.length ? (
          photos.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={index === activePhotoIndex ? product.name : ''}
              aria-hidden={index !== activePhotoIndex}
              className={`product-photo${index === activePhotoIndex ? ' active' : ''}`}
            />
          ))
        ) : (
          <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: illustration }} />
        )}
        {product.badge && <span className="badge">{product.badge}</span>}

        {photos.length > 1 && (
          <div className="product-photo-dots">
            {photos.map((photo, index) => (
              <button
                key={photo}
                type="button"
                className={`product-photo-dot${index === activePhotoIndex ? ' active' : ''}`}
                aria-label={`Prikaži fotografiju ${index + 1}`}
                aria-current={index === activePhotoIndex}
                onClick={() => setActivePhotoIndex(index)}
              />
            ))}
          </div>
        )}
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
