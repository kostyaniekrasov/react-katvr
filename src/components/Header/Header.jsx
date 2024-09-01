import i18next from 'i18next';
import { useMediaQuery } from 'react-responsive';
import { CustomSelect } from '../../utils/CustomSelect';
import { useState } from 'react';
import { setLanguage } from '../../i18next';
import { Link } from 'react-scroll';
import { DesktopLink } from '../../utils/variables';
import { useTranslation } from 'react-i18next';

export function Header({ showMenu }) {
  const [value, setValue] = useState(setLanguage || 'En');
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const optionsLanguage = [
    { value: 'En', label: 'En' },
    { value: 'Ua', label: 'Ua' },
  ];

  const saveLanguage = (language) => {
    localStorage.setItem('language', language);
  };

  const handleChangeLanguage = (val) => {
    switch (val) {
      case 'En':
        i18next.changeLanguage('en');
        saveLanguage('en');
        setValue('En');
        break;

      case 'Ua':
        i18next.changeLanguage('uk');
        saveLanguage('uk');
        setValue('Ua');
        break;

      default:
        i18next.changeLanguage('en');
        setValue('En');
    }
  };

  return (
    <header className="max-w-custom container mx-auto mb-4 flex items-center justify-between px-5 pt-5 md:mb-14 md:px-8 md:pt-8 xl:mb-28 xl:px-28 xl:pt-12 2xl:mb-60">
      <div className="flex gap-9">
        {!isDesktop && (
          <img src="./img/Logo-mobile.svg" width="58" height="12" alt="Logo" />
        )}
        {isDesktop && (
          <>
            <img src="./img/Logo.svg" width="77" height="16" alt="Logo" />
            <CustomSelect
              options={optionsLanguage}
              value={value}
              onChange={handleChangeLanguage}
            />
          </>
        )}
      </div>

      {!isDesktop && (
        <button onClick={showMenu}>
          <img
            src="./img/Menu.svg"
            className="h-3 w-8 cursor-pointer"
            alt="Menu"
          />
        </button>
      )}

      {isDesktop && (
        <nav className="nav__top--right flex items-center gap-8">
          <Link
            className={DesktopLink}
            to={'about'}
            smooth={true}
            duration={500}
          >
            {t('About')}
          </Link>
          <Link
            className={DesktopLink}
            to={'tech-specs'}
            smooth={true}
            duration={500}
          >
            {t('Tech')}
          </Link>
          <Link
            className={DesktopLink}
            to={'benefits'}
            smooth={true}
            duration={500}
          >
            {t('Benefits')}
          </Link>
          <Link
            className={DesktopLink}
            to={'contact-us'}
            smooth={true}
            duration={500}
          >
            {t('Contact')}
          </Link>

          <button className="button w-52">{t('Buy Now')}</button>
        </nav>
      )}
    </header>
  );
}
