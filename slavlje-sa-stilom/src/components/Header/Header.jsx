import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';

function Header() {
  const { count, openCart, cartTriggerRef } = useCart();

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link className="logo" to="/">
          Slavlje <em>sa stilom</em>
        </Link>
        <nav className="nav" aria-label="Glavni meni">
          <Link to="/katalog">Katalog</Link>
          <Link to="/#how-to-order">Kako poručiti</Link>
          <Link to="/#faq">Pitanja</Link>
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
