import { Link } from 'react-router-dom';
import HeroSlider from '../HeroSlider/HeroSlider';
import heroImage from '../../assets/Hero_Image.jpg';
import heroImage2 from '../../assets/Hero_Image2.jpg';
import heroImage3 from '../../assets/Hero_Image3.jpg';
import heroImage4 from '../../assets/Hero_Image4.jpg';
import './Hero.css';

const HERO_IMAGES = [
  {
    src: heroImage,
    alt: 'Balon luk u safari temi sa brojem 1, postavljen za proslavu prvog rođendana',
  },
  {
    src: heroImage2,
    alt: 'Crni balon luk, dekoracija za punoleststvo',
  },
  {
    src: heroImage3,
    alt: 'Bordo i beli balon luk sa brojevima za proslavu punoletstva',
  },
  {
    src: heroImage4,
    alt: 'Luk balona, dekoracija za punoletstvo',
  },
];

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
            <Link className="btn btn-primary" to="/katalog">
              Pogledajte katalog
            </Link>
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
        <div className="hero-image">
          <HeroSlider images={HERO_IMAGES} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
