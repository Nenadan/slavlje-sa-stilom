import { formatPrice } from '../../utils/formatPrice';
import './CartItem.css';

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-9 0 1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13M10 11v6M14 11v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartItem({ item, onChangeQuantity, onRemove }) {
  const isLastOne = item.qty === 1;

  return (
    <div className="cart-item">
      <div className="cart-item-thumb">{item.image && <img src={item.image} alt="" />}</div>
      <div className="cart-item-main">
        <div className="cart-item-top">
          <h4>{item.name}</h4>
          <div className="item-total">{formatPrice(item.price * item.qty)}</div>
        </div>
        <div className="item-meta">
          {formatPrice(item.price)} {item.unit}
        </div>
        <div className="quantity-control">
          <button
            type="button"
            aria-label={isLastOne ? `Uklonite ${item.name} iz korpe` : 'Smanjite količinu'}
            onClick={() => (isLastOne ? onRemove(item.id) : onChangeQuantity(item.id, -1))}
          >
            {isLastOne ? <TrashIcon /> : '−'}
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
      </div>
    </div>
  );
}

export default CartItem;
