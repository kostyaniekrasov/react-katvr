import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Container, description, title } from '../../utils/variables';

function MoreThanGaming() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const { t } = useTranslation();
  return (
    <div className="MoreThanGaming bg-ebony">
      <div className={`${Container} md:flex md:flex-col md:items-center`}>
        <h3 className="mb-3 text-xl font-black text-white xl:text-4xl">
          {t('MORE THAN')}{' '}
          <p className="blue inline-block font-normal">{t('GAMING')}</p>
        </h3>
        <p className="blue mb-3 text-sm font-normal md:mb-8 xl:mb-20">
          {t('This')}
        </p>
        {!isDesktop && (
          <button className="button mb-8 md:w-96">{t('Buy Now')}</button>
        )}
        <div className="MoreThanGaming__text-block flex flex-col gap-5 md:gap-10 xl:flex-row">
          <div className="flex flex-col content-center gap-5 md:flex-row md:justify-center">
            <div className="text-block__section flex flex-col gap-3 md:items-center">
              <img
                className="object-fit-contain mb-7 hidden md:block"
                src="./img/tablets/education.svg"
                alt="education"
                width="101"
                height="83"
              />
              <h4 className={title}>{t('Education')}</h4>
              <p className={description}>{t('Create')}</p>
            </div>
            <div className="text-block__section flex flex-col gap-3 md:items-center">
              <img
                className="object-fit-contain mb-7 hidden md:block"
                src="/img/tablets/real-estate.svg"
                alt="education"
                width="70"
                height="82"
              />
              <h4 className={title}>{t('Real estate')}</h4>
              <p className={description}>{t('Design')}</p>
            </div>
          </div>
          <div className="flex flex-col content-center gap-5 md:flex-row md:justify-center">
            <div className="text-block__section flex flex-col gap-3 md:items-center">
              <img
                className="object-fit-contain mb-7 hidden md:block"
                src="/img/tablets/fitness.svg"
                alt="education"
                width="112"
                height="82"
              />
              <h4 className={title}>{t('Fitness')}</h4>
              <p className={description}>{t('Combine')}</p>
            </div>
            <div className="text-block__section flex flex-col gap-3 md:items-center">
              <img
                className="object-fit-contain mb-7 hidden md:block"
                src="/img/tablets/social.svg"
                alt="education"
                width="84"
                height="83"
              />
              <h4 className={title}>{t('Social interactions')}</h4>
              <p className={description}>{t('Hang')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreThanGaming;
