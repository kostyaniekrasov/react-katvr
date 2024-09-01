import './TechSpec.scss';
import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import { Container, descriptionLeft, titleUpper } from '../../utils/variables';

function TechSpecs() {
  const [showSpec, setShowSpec] = useState('');
  const sensorRef = useRef(null);
  const batterriesRef = useRef(null);
  const connectionRef = useRef(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const { t } = useTranslation();

  return (
    <div className="TechSpecs bg-ebony">
      <div className={`${Container}`}>
        <h3 className="mb-8 text-xl font-black text-white xl:mb-36 xl:text-right xl:text-4xl">
          {t('TECH')} <span className="blue font-normal">{t('SPECS')}</span>
        </h3>
        <div className="relative flex w-full justify-center">
          {isDesktop && (
            <>
              <div className="absolute -top-14 left-12 w-60 xl:left-44">
                <div className="mb-5 flex justify-between">
                  <h4 className={titleUpper}>{t('SENSOR')}</h4>
                </div>
                <p className={descriptionLeft}>
                  <Trans i18nKey={'Weight'} components={{ br: <br /> }} />
                </p>
              </div>

              <div className="w-66 absolute -right-4 -top-16 xl:right-28">
                <div className="mb-5 flex justify-between">
                  <h4 className={titleUpper}>{t('batterries')}</h4>
                </div>
                <p className={descriptionLeft}>
                  <Trans i18nKey={'Type'} components={{ br: <br /> }} />
                </p>
              </div>

              <div className="absolute -bottom-1 left-32 w-60 xl:left-64">
                <div className="mb-5 flex justify-between">
                  <h4 className={titleUpper}>{t('Connection')}</h4>
                </div>
                <p className={descriptionLeft}>
                  <Trans i18nKey={'Wireless'} components={{ br: <br /> }} />
                </p>
              </div>
            </>
          )}
          <div className="relative">
            <img
              className="h-48 w-48 md:h-96 md:w-96 xl:h-72 xl:w-72"
              src="./img/tech-specs.webp"
              alt="tech-specs"
            />
            {isDesktop && (
              <>
                <div className="absolute -left-64 -top-12">
                  <img
                    src="/img/lines/sensor-line.svg"
                    alt="line"
                    width="398.5"
                    height="69"
                  />
                </div>

                <img
                  className="absolute -top-14 left-36"
                  src="/img/lines/batterries-line.svg"
                  alt=""
                />

                <img
                  className="absolute -left-4 top-1/2 -translate-y-1/2"
                  src="/img/lines/connection-line-2.svg"
                  alt=""
                />
                <img
                  className="absolute -left-36 top-20"
                  src="/img/lines/connection-line.svg"
                  alt=""
                />
              </>
            )}
            {!isDesktop && (
              <>
                <button
                  className="absolute left-16 top-0 cursor-pointer"
                  onClick={() => setShowSpec('sensor')}
                >
                  <img
                    src="./img/tech-specs.svg"
                    alt="button"
                    className="md:h-16 md:w-16"
                  />
                </button>

                <button
                  className="absolute right-7 top-1/2 cursor-pointer"
                  onClick={() => setShowSpec('batterries')}
                >
                  <img
                    src="./img/tech-specs.svg"
                    alt="button"
                    className="md:h-16 md:w-16"
                  />
                </button>
                <button
                  className="absolute bottom-0 cursor-pointer"
                  onClick={() => setShowSpec('connection')}
                >
                  <img
                    src="./img/tech-specs.svg"
                    alt="button"
                    className="md:h-16 md:w-16"
                  />
                </button>
              </>
            )}
          </div>
          <CSSTransition
            in={showSpec === 'sensor'}
            timeout={300}
            classNames="tech-spec"
            unmountOnExit
            nodeRef={sensorRef}
          >
            <div
              ref={sensorRef}
              className="bg-ebony tech-spec absolute top-0 z-0 px-3 py-3"
            >
              <div className="mb-5 flex justify-between">
                <h4 className={titleUpper}>{t('SENSOR')}</h4>
                <Button
                  className="blue text-sm"
                  onClick={() => setShowSpec('')}
                >
                  {t('CLOSE')}
                </Button>
              </div>
              <p className={descriptionLeft}>{t('Weight')}</p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={showSpec === 'batterries'}
            timeout={300}
            classNames="tech-spec"
            unmountOnExit
            nodeRef={batterriesRef}
          >
            <div
              ref={batterriesRef}
              className="bg-ebony tech-spec absolute top-0 z-0 px-3 py-3"
            >
              <div className="mb-5 flex justify-between">
                <h4 className={titleUpper}>{t('batterries')}</h4>
                <Button
                  className="blue text-sm"
                  onClick={() => setShowSpec('')}
                >
                  {t('CLOSE')}
                </Button>
              </div>
              <p className={descriptionLeft}>{t('Type')}</p>
            </div>
          </CSSTransition>
          <CSSTransition
            in={showSpec === 'connection'}
            timeout={300}
            classNames="tech-spec"
            unmountOnExit
            nodeRef={connectionRef}
          >
            <div
              ref={connectionRef}
              className="bg-ebony tech-spec absolute top-0 z-0 px-3 py-3"
            >
              <div className="mb-5 flex justify-between">
                <h4 className={titleUpper}>{t('CONNECTION')}</h4>
                <Button
                  className="blue text-sm"
                  onClick={() => setShowSpec('')}
                >
                  {t('CLOSE')}
                </Button>
              </div>
              <p className={descriptionLeft}>{t('Wireless')}</p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default TechSpecs;
