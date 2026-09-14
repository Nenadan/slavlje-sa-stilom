import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-accent" aria-hidden="true" />

      <div className="wrap footer-grid">
        <div className="footer-brand">
          <h4>Slavlje sa stilom</h4>
          <p className="footer-tagline">
            Baloni, dekoracije i pokloni
            <br />
            za proslave u Beogradu.
          </p>
          <a className="footer-cta" href="viber://chat?number=%2B381600000000">
            060 000 0000
          </a>
        </div>

        <div className="footer-col">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="mailto:zdravo@slavljesastilom.rs">zdravo@slavljesastilom.rs</a></li>
            <li><a href="https://instagram.com/slavlje.sa.stilom">@slavlje.sa.stilom</a></li>
            <li>Glavna 1, Zemun</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Radno vreme</h4>
          <ul>
            <li>Ponedeljak–subota, 10–19</li>
            <li>Nedeljom po dogovoru</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Dostava</h4>
          <ul>
            <li>Beograd i okolina do 60 km</li>
            <li>Isti dan za porudžbine do 13h</li>
            <li className="footer-highlight">Besplatno preko 6.000 din</li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>Primer sajta. Podaci o firmi, cene i rokovi su izmišljeni radi prikaza.</span>
        <a href="#top">Na vrh ↑</a>
      </div>
    </footer>
  );
}

export default Footer;