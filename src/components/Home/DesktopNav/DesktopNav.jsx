import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { DesktopLink } from '../../../utils/variables';

function DesktopNav({ openHelpScreen, prev, next, activeSlide, sliderRef }) {
  const { t } = useTranslation();
  return (
    <nav className="nav__bottom mb-20 flex justify-between">
      <div className="nav__bottom--left flex gap-10">
        <a href="#FAQ" className={DesktopLink}>
          FAQ
        </a>
        <a href="#Help" className={DesktopLink} onClick={openHelpScreen}>
          {t('Help')}
        </a>
      </div>
      <Link
        to="more-than-gaming"
        smooth={true}
        duration={500}
        className="flex cursor-pointer flex-col items-center justify-center gap-2"
      >
        <p className="blue text-base font-medium">{t('More')}</p>
        <img src="img/triangle.svg" alt="triangle" width="9" height="5" />
      </Link>
      <div className="nav__slider flex flex-col gap-1">
        <div className="flex justify-between">
          <button className="text-base font-medium" onClick={prev}>
            {t('Prev')}
          </button>
          <button className="text-base font-medium" onClick={next}>
            {t('Next')}
          </button>
        </div>
        <div className="custom-dots flex">
          {[...Array(2)].map((_, index) => (
            <button
              key={Array.length}
              className={`custom-dot ${activeSlide === index ? 'custom-dot--active' : ''}`}
              onClick={() => sliderRef.current.slickGoTo(index)}
            ></button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;
