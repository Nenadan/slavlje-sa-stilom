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
      <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>
        Uklonite
      </button>
    </div>
  );
}

export default CartItem;
