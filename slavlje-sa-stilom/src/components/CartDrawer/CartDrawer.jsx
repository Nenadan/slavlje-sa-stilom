import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { formatPrice } from '../../utils/formatPrice';
import { buildOrderText, validateOrder } from '../../utils/order';
import './CartDrawer.css';

const ORDER_RECIPIENT = 'zdravo@slavljesastilom.rs';

const EMPTY_FORM = { name: '', phone: '', date: '', address: '', note: '' };

function CartDrawer() {
  const { items, subtotal, shipping, total, changeQuantity, removeFromCart, isCartOpen, closeCart } =
    useCart();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [error, setError] = useState(null);
  const [copyLabel, setCopyLabel] = useState('Kopirajte spisak za Viber');

  const closeButtonRef = useRef(null);
  const nameFieldRef = useRef(null);
  const phoneFieldRef = useRef(null);
  const dateFieldRef = useRef(null);
  const fieldRefs = { name: nameFieldRef, phone: phoneFieldRef, date: dateFieldRef };

  useEffect(() => {
    if (isCartOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape' && isCartOpen) {
        closeCart();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, closeCart]);

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleSendEmail() {
    if (items.length === 0) return;
    const problem = validateOrder(formData);
    if (problem) {
      setError(problem.message);
      fieldRefs[problem.field]?.current?.focus();
      return;
    }
    setError(null);
    const subject = `Porudžbina sa sajta — ${formData.name}${formData.date ? ` — ${formData.date}` : ''}`;
    const body = buildOrderText(items, formData, { subtotal, shipping, total });
    window.location.href = `mailto:${ORDER_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function handleCopy() {
    const text = buildOrderText(items, formData, { subtotal, shipping, total });
    function onSuccess() {
      setCopyLabel('Spisak je kopiran');
      setTimeout(() => setCopyLabel('Kopirajte spisak za Viber'), 1600);
    }
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        onSuccess();
      } else {
        copyWithFallback(text, onSuccess);
      }
    } catch {
      copyWithFallback(text, onSuccess);
    }
  }

  function copyWithFallback(text, onSuccess) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      onSuccess();
    } catch {
      setError('Kopiranje nije uspelo. Označite tekst ručno ili nas pozovite.');
    }
    document.body.removeChild(textarea);
  }

  return (
    <>
      <div className={`cart-overlay${isCartOpen ? ' open' : ''}`} onClick={closeCart} />
      <aside
        className={`cart-drawer${isCartOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        aria-hidden={!isCartOpen}
      >
        <div className="cart-drawer-header">
          <h2 id="cart-drawer-title">Vaš spisak</h2>
          <button
            className="close-button"
            type="button"
            aria-label="Zatvorite korpu"
            onClick={closeCart}
            ref={closeButtonRef}
          >
            ×
          </button>
        </div>

        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <b>Korpa je prazna</b>
              Dodajte artikle iz kataloga pa ćemo vam spisak potvrditi mejlom.
            </div>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onChangeQuantity={changeQuantity}
                onRemove={removeFromCart}
              />
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="summary-row">
              <span>Artikli</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Dostava</span>
              <span>{shipping === 0 ? 'besplatno' : formatPrice(shipping)}</span>
            </div>
            <div className="summary-row summary-row-total">
              <span>Ukupno</span>
              <span>{formatPrice(total)}</span>
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="checkout-name">Ime i prezime</label>
                <input
                  id="checkout-name"
                  type="text"
                  autoComplete="name"
                  ref={nameFieldRef}
                  value={formData.name}
                  onChange={(event) => updateField('name', event.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="checkout-phone">Telefon</label>
                <input
                  id="checkout-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="06x xxx xxxx"
                  ref={phoneFieldRef}
                  value={formData.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="checkout-date">Datum proslave</label>
                <input
                  id="checkout-date"
                  type="date"
                  ref={dateFieldRef}
                  value={formData.date}
                  onChange={(event) => updateField('date', event.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="checkout-address">Adresa dostave</label>
                <input
                  id="checkout-address"
                  type="text"
                  autoComplete="street-address"
                  value={formData.address}
                  onChange={(event) => updateField('address', event.target.value)}
                />
              </div>
              <div className="form-field form-field-full">
                <label htmlFor="checkout-note">Napomena: boje, vreme dostave, ime na balonima</label>
                <textarea
                  id="checkout-note"
                  value={formData.note}
                  onChange={(event) => updateField('note', event.target.value)}
                />
              </div>
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button className="btn btn-primary" type="button" onClick={handleSendEmail}>
              Pošaljite spisak mejlom
            </button>
            <button
              className="btn btn-outline secondary-button"
              type="button"
              onClick={handleCopy}
            >
              {copyLabel}
            </button>
            <p className="helper-text">
              Slanjem se otvara vaš mejl program sa popunjenom porudžbinom. Ništa se ne naplaćuje.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
