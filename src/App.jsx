import './App.scss';
import './i18next';
import AboutProduct from './components/AboutProduct/AboutProduct';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import MoreThanGaming from './components/MoreThanGaming/MoreThanGaming';
import TechSpecs from './components/TechSpecs/TechSpecs';
import WhyKatLoco from './components/WhyKatLoco/WhyKatLoco';
import { Header } from './components/Header/Header';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Menu from './components/Menu/Menu';
import { ScrollTopButton } from './utils/ScrollTop/ScrollTopButton';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <div className="App relative min-w-80">
      <Header showMenu={handleShowMenu} />

      <aside>
        {!isDesktop && <Menu showMenu={showMenu} closeMenu={handleCloseMenu} />}
      </aside>
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="more-than-gaming">
          <MoreThanGaming />
        </section>

        <section id="about">
          <AboutProduct />
        </section>

        <section id="tech-specs">
          <TechSpecs />
        </section>

        <section id="benefits">
          <WhyKatLoco />
        </section>

        <section id="contact-us">
          <ContactUs />
        </section>

        <ScrollTopButton />

        <Footer />
      </main>
    </div>
  );
}

export default App;
