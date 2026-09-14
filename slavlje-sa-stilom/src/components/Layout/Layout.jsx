import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CartDrawer from '../CartDrawer/CartDrawer';
import './Layout.css';

function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="layout">
      <TopBar />
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default Layout;
