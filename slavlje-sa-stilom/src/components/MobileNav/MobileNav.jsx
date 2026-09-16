import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MobileNav.css';

function MobileNav({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div className={`mobile-nav-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <aside
        className={`mobile-nav${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
        aria-hidden={!isOpen}
      >
        <div className="mobile-nav-header">
          <span id="mobile-nav-title">Meni</span>
          <button
            className="close-button"
            type="button"
            aria-label="Zatvorite meni"
            onClick={onClose}
            ref={closeButtonRef}
          >
            ×
          </button>
        </div>
        <nav className="mobile-nav-links" aria-label="Glavni meni">
          <Link to="/katalog" onClick={onClose}>
            Katalog
          </Link>
          <Link to="/#how-to-order" onClick={onClose}>
            Kako poručiti
          </Link>
          <Link to="/#faq" onClick={onClose}>
            Pitanja
          </Link>
          <a href="#contact" onClick={onClose}>
            Kontakt
          </a>
        </nav>
        <div className="mobile-nav-contact">
          <a href="tel:0600000000">060 000 0000</a>
          <a href="mailto:zdravo@slavljesastilom.rs">zdravo@slavljesastilom.rs</a>
        </div>
      </aside>
    </>
  );
}

export default MobileNav;
