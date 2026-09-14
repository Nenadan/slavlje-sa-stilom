import { useCart } from '../../context/CartContext';
import './Header.css';

function Header() {
  const { count, openCart, cartTriggerRef } = useCart();

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="logo" href="#top">
          Slavlje <em>sa stilom</em>
        </a>
        <nav className="nav" aria-label="Glavni meni">
          <a href="#catalog">Katalog</a>
          <a href="#how-to-order">Kako poručiti</a>
          <a href="#faq">Pitanja</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <button
          className="cart-button"
          type="button"
          aria-haspopup="dialog"
          onClick={openCart}
          ref={cartTriggerRef}
        >
          Korpa <span className="cart-count">{count}</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
