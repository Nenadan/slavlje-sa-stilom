import { formatPrice } from '../../utils/formatPrice';
import './CartItem.css';

function CartItem({ item, onChangeQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        <div className="item-meta">
          {formatPrice(item.price)} {item.unit}
        </div>
      </div>
      <div className="item-total">{formatPrice(item.price * item.qty)}</div>
      <div className="quantity-control">
        <button
          type="button"
          aria-label="Smanjite količinu"
          onClick={() => onChangeQuantity(item.id, -1)}
        >
          −
        </button>
        <span>{item.qty}</span>
        <button
          type="button"
          aria-label="Povećajte količinu"
          onClick={() => onChangeQuantity(item.id, 1)}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="remove-button"
        aria-label={`Uklonite ${item.name} iz korpe`}
        onClick={() => onRemove(item.id)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13M10 11v6M14 11v6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartItem;
