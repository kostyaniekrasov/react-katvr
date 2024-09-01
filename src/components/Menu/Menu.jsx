import './Menu.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function Menu({ showMenu, closeMenu }) {
  const [showLanguageScreen, setShowLanguageScreen] = useState(false);
  const [openHelpScreen, setOpenHelpScreen] = useState(false);

  const saveLanguage = (language) => {
    localStorage.setItem('language', language);
  };

  const { t } = useTranslation();

  const renderContent = () => {
    if (showLanguageScreen) {
      return (
        <nav className="nav flex flex-col">
          <button
            className="nav__link cursor-pointer px-5 py-3 text-left"
            onClick={() => {
              i18n.changeLanguage('en');
              saveLanguage('en');
              setShowLanguageScreen(false);
            }}
          >
            English
          </button>
          <button
            className="nav__link cursor-pointer px-5 py-3 text-left"
            onClick={() => {
              i18n.changeLanguage('uk');
              saveLanguage('uk');
              setShowLanguageScreen(false);
            }}
          >
            Ukraine
          </button>
        </nav>
      );
    }

    if (openHelpScreen) {
      return (
        <div className="px-5">
          <h3 className="mb-8 inline-block text-xl font-black text-white">
            {t('HOW CAN WE')}{' '}
            <span className="blue inline-block font-normal">{t('HELP')}</span>{' '}
            {t('YOU')}
          </h3>
          <p className="gray mb-8 text-sm font-normal">
            {t('Welcome to our help')}
            <span className="blue">{t('FAQs')}</span>.
          </p>
          <p className="gray mb-8 text-sm font-normal">
            {'Please also'}
            <span className="blue"> {t('Contact Us')}</span> {'directly should'}
          </p>
          <nav className="mb-8 flex flex-col gap-5">
            <p className="blue text-sm font-normal">
              {t('Instruction manual')}l
            </p>
            <p className="blue text-sm font-normal">
              {t('Where to go for a warranty')}
            </p>
            <p className="blue text-sm font-normal">{t('Service Policy')}</p>
          </nav>
          <div className="info flex flex-col gap-3">
            <p className="gray text-sm font-normal">+86-0571-86105373</p>
            <p className="gray text-sm font-normal">global@katvr.com</p>
            <p className="gray text-sm font-normal">overseas@katvr.com</p>
          </div>
        </div>
      );
    }

    return (
      <nav className="nav flex flex-col">
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          to={'about'}
          smooth={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          {t('About')}
        </Link>
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          to={'tech-specs'}
          smooth={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          {t('Tech')}
        </Link>
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          to={'benefits'}
          smooth={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          {t('Benefits')}
        </Link>
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          to={'contact-us'}
          smooth={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          {t('Contact')}
        </Link>
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          onClick={() => setShowLanguageScreen(true)}
        >
          {t('Language')}
        </Link>
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          to={'faq'}
          smooth={true}
          duration={500}
          onClick={() => closeMenu()}
        >
          {t('FAQ')}
        </Link>
        <Link
          className="nav__link cursor-pointer px-5 py-3"
          to={'help'}
          smooth={true}
          duration={500}
          onClick={() => setOpenHelpScreen(true)}
        >
          {t('Help')}
        </Link>
      </nav>
    );
  };

  return (
    <div
      className={classNames(
        'Menu fixed inset-0 z-20 transform transition-transform duration-300',
        {
          'translate-x-0': showMenu,
          'translate-x-full': !showMenu,
        }
      )}
    >
      <div className="Menu__block px-5 pt-4 md:px-8 md:pt-8">
        <div className="container mx-auto">
          <div className="control mb-6 flex px-5">
            <button onClick={() => setShowLanguageScreen(false)}>
              <img
                className={classNames('cursor-pointer', {
                  hidden: !showLanguageScreen,
                })}
                src="./img/back.svg"
                alt="back"
              />
            </button>
            <button
              className="ml-auto"
              onClick={() => {
                if (openHelpScreen) {
                  setOpenHelpScreen(false);
                }
                closeMenu();
              }}
            >
              <img
                className={classNames('cursor-pointer', {
                  hidden: showLanguageScreen,
                })}
                src="./img/Close.svg"
                alt="close"
              />
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Menu;
