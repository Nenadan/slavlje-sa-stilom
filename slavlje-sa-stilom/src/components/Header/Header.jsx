import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import MobileNav from '../MobileNav/MobileNav';
import './Header.css';

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Header() {
  const { count, openCart, cartTriggerRef } = useCart();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="wrap header-inner">
        <button
          className="menu-button"
          type="button"
          aria-label="Otvorite meni"
          aria-haspopup="dialog"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <MenuIcon />
        </button>
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
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
}

export default Header;
