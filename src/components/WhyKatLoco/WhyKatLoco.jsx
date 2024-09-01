import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Container, description, titleUpper } from '../../utils/variables';

function WhyKatLoco() {
  const { t } = useTranslation();
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className="WhyKatLoco bg-gradient">
      <div className={`${Container} xl:flex xl:flex-col xl:items-center`}>
        <h3 className="mb-8 text-xl font-black text-white xl:mb-20 xl:text-center xl:text-4xl">
          {t('WHY')}{' '}
          <p className="blue inline-block font-normal">{t('KAT LOCO')}</p>
        </h3>
        <div className="WhyKatLoco__text-block flex flex-col gap-5 md:flex-row xl:mb-20">
          <div className="text-block__section flex max-w-80 flex-col gap-6 md:items-center">
            <img
              src="./img/tablets/universally-compatible.svg"
              className="hidden md:block"
              alt=""
              width="82"
              height="81"
            />
            <h4 className={titleUpper}>{t('UNIVERSALLY COMPATIBLE')}</h4>
            <p className={description}>{t('KAT Loco offers')}</p>
          </div>
          <div className="text-block__section flex max-w-80 flex-col gap-6 md:items-center">
            <img
              src="./img/tablets/control-panel.svg"
              className="hidden md:block"
              alt=""
              width="90"
              height="81"
            />
            <h4 className={titleUpper}>VR/PC CONTROL PANEL</h4>
            <p className={description}>{t('Our Multifunctional Software')}</p>
          </div>
          <div className="text-block__section flex max-w-80 flex-col gap-6 md:items-center">
            <img
              src="./img/tablets/wireless-sensor.svg"
              className="hidden md:block"
              alt=""
              width="112.57"
              height="81"
            />
            <h4 className={titleUpper}>WIRELESS SENSORS</h4>
            <p className={description}>{t('What makes it')}</p>
          </div>
        </div>

        {isDesktop && <button className="button w-52">Buy Now</button>}
      </div>
    </div>
  );
}

export default WhyKatLoco;
