import { getIllustration } from '../../utils/illustrations';
import './Hero.css';

const HERO_ILLUSTRATION = getIllustration(
  'hero',
  'arch',
  ['#E31C79', '#FFC700', '#00A9A5', '#B8A2F0'],
  600,
  460,
);

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div>
          <h1>Sastavite spisak za proslavu, ostalo je na nama.</h1>
          <p className="hero-intro">
            Baloni, dekoracije, party oprema i pokloni na jednom mestu. Dodajte šta vam treba u
            korpu, pošaljite nam spisak i dobijate potvrdu sa tačnom cenom i terminom dostave.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#catalog">
              Pogledajte katalog
            </a>
            <a className="btn btn-outline" href="#how-to-order">
              Kako poručiti
            </a>
          </div>
          <div className="hero-facts">
            <div className="fact">
              <b>1.400+</b>proslava opremljeno od 2019.
            </div>
            <div className="fact">
              <b>do 13h</b>rok za dostavu istog dana
            </div>
            <div className="fact">
              <b>2 sata</b>prosečno vreme postavke
            </div>
          </div>
        </div>
        <div
          className="hero-image"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: HERO_ILLUSTRATION }}
        />
      </div>
    </section>
  );
}

export default Hero;
