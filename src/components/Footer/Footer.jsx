import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { DesktopLink } from '../../utils/variables';

function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div className="Footer bg-black">
      <div className="max-w-custom container mx-auto px-5 py-14 md:px-8 md:py-6 xl:px-28">
        {isMobile && (
          <img
            src="/img/Logo-mobile.svg"
            className="mb-4 h-3 w-16"
            alt="Logo"
          />
        )}
        <div className="Footer__links flex justify-between">
          {isTablet && <img src="/img/Logo.svg" className="mb-4" alt="Logo" />}
          <div className="links flex flex-col gap-4 md:flex-row md:gap-11">
            <Link
              to="about"
              className={DesktopLink}
              smooth={true}
              duration={500}
            >
              {t('About')}
            </Link>
            <Link
              to="tech-specs"
              className={DesktopLink}
              smooth={true}
              duration={500}
            >
              {t('Tech')}
            </Link>
            <Link
              to="benefits"
              className={DesktopLink}
              smooth={true}
              duration={500}
            >
              {t('Benefits')}
            </Link>
            <Link
              to="contact-us"
              className={DesktopLink}
              smooth={true}
              duration={500}
            >
              {t('Contact')}
            </Link>
          </div>
          <div className="info flex flex-col gap-5">
            {isMobile && (
              <div className="info__text flex flex-col gap-3">
                <p className="gray text-sm font-normal">+86-0571-86105373</p>
                <p className="gray text-sm font-normal">global@katvr.com</p>
                <p className="gray text-sm font-normal">overseas@katvr.com</p>
              </div>
            )}
            <div className="info__socials flex justify-between md:gap-5">
              <a href="facebook.com" target="_blank">
                <img src="./img/socials/facebook.svg" alt="facebook" />
              </a>
              <a href="twitter.com" target="_blank">
                <img src="./img/socials/x.svg" alt="twitter" />
              </a>
              <a href="youtube.com" target="_blank">
                <img src="./img/socials/yt.svg" alt="youtube" />
              </a>
              <a href="reddit.com" target="_blank">
                <img src="./img/socials/reddit.svg" alt="reddit" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
