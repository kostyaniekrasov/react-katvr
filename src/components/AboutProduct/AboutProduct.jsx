import { useRef, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../../utils/variables';
import SliderAbout from '../Slider/SliderAbout';
import VideoBlock from '../VideoBlock/VideoBlock';

function AboutProduct() {
  const [showVideo, setShowVideo] = useState(false);
  const [displayStyle, setDisplayStyle] = useState('none');
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const nodeRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isLarge = useMediaQuery({ query: '(min-width: 1454px)' });
  const description = 'gray text-base font-normal md:text-left';

  const handleShowVideo = () => {
    setShowVideo(!showVideo);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowVideo(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, setShowVideo]);

  return (
    <div className="AboutProduct bg-gradient">
      <div className={`${Container} md:flex md:flex-col md:gap-20 xl:gap-44`}>
        {isMobile && (
          <h3 className="mb-5 text-xl font-black text-white">
            {t('ABOUT')}{' '}
            <p className="blue inline-block font-normal">{t('PRODUCT')}</p>
          </h3>
        )}
        <div className="flex-row justify-between gap-5 md:flex xl:gap-28">
          <SliderAbout />

          <div>
            {isTablet && (
              <h3 className="mb-5 text-xl font-black text-white xl:text-4xl">
                {t('ABOUT')}{' '}
                <p className="blue inline-block font-normal">{t('PRODUCT')}</p>
              </h3>
            )}
            <p className={`${description} mb-6`}>{t('Kat loco')}</p>
            <button onClick={handleShowVideo}>
              <div className="video-button mb-20">{t('Play Video')}</div>
            </button>
          </div>
        </div>
        <CSSTransition
          in={showVideo}
          nodeRef={nodeRef}
          timeout={300}
          classNames="video-animation"
          onEnter={() => {
            setDisplayStyle('flex');
          }}
          onExited={() => {
            setDisplayStyle('none');
          }}
        >
          <VideoBlock
            nodeRef={nodeRef}
            displayStyle={displayStyle}
            containerRef={containerRef}
            handleShowVideo={handleShowVideo}
            src="https://www.youtube.com/embed/SvTbB19bvIw?si=xlf2jCu6JfjWlXK0&controls=1"
          />
        </CSSTransition>
        <div className="md:flex">
          <div className="block">
            <p className="blue mb-3 text-sm font-normal">{t('Hello')}</p>
            <h3 className="mb-5 text-xl font-black text-white xl:text-4xl">
              {t('NICE TO MEET')}{' '}
              <p className="blue inline-block font-normal">{t('HOME')}</p>
            </h3>
            <p className={`${description} md:text-left`}>{t('KAT VR')}</p>
          </div>
          {!isDesktop && (
            <img
              src="/img/tablets/about.svg"
              alt=""
              className="hidden md:block"
            />
          )}
          {isDesktop && !isLarge && (
            <img src="/img/desktop/about-us.svg" alt="" />
          )}
          {isLarge && <img src="/img/desktop/about-us-xl.svg" alt="" />}
        </div>
      </div>
    </div>
  );
}

export default AboutProduct;
