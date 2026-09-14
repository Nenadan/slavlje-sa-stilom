import TopBar from '../../components/TopBar/TopBar';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Catalog from '../../components/Catalog/Catalog';
import HowToOrder from '../../components/HowToOrder/HowToOrder';
import Faq from '../../components/Faq/Faq';
import Footer from '../../components/Footer/Footer';
import CartDrawer from '../../components/CartDrawer/CartDrawer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Catalog />
        <HowToOrder />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default HomePage;
