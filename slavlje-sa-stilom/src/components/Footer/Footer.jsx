import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer-grid">
        <div>
          <h4>Slavlje sa stilom</h4>
          <p>
            Radnja i radionica: Glavna 1, Zemun
            <br />
            Ponedeljak do subote, 10 do 19
            <br />
            Nedeljom po dogovoru za dostave
          </p>
        </div>
        <div>
          <h4>Kontakt</h4>
          <p>
            Telefon i Viber: <a href="tel:+381600000000">060 000 0000</a>
            <br />
            Mejl: <a href="mailto:zdravo@slavljesastilom.rs">zdravo@slavljesastilom.rs</a>
            <br />
            Instagram: <a href="#top">@slavlje.sa.stilom</a>
          </p>
        </div>
        <div>
          <h4>Dostava</h4>
          <p>
            Beograd i okolina do 60 km.
            <br />
            Istog dana za porudžbine do 13 časova.
            <br />
            Besplatno preko 6.000 dinara.
          </p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        Primer sajta. Podaci o firmi, cene i rokovi su izmišljeni radi prikaza.
      </div>
    </footer>
  );
}

export default Footer;
