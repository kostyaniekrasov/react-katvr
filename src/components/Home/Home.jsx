import { useRef, useState, useEffect, useCallback } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import HelpScreen from '../HelpScreen/HelpScreen';
import SliderHome from '../Slider/SliderHome';
import VideoBlock from '../VideoBlock/VideoBlock';
import DesktopNav from './DesktopNav/DesktopNav';
import { VideoButton } from '../../utils/VideoButton/VideoButton';

function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [openHelpScreen, setOpenHelpScreen] = useState(false);
  const [displayStyle, setDisplayStyle] = useState('none');
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const nodeRef = useRef(null);
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const handleShowVideo = useCallback(() => {
    setShowVideo(!showVideo);
  }, [showVideo]);

  const handleCloseHelpScreen = () => {
    setOpenHelpScreen(false);
  };

  const handleShowHelpScreen = () => {
    setOpenHelpScreen(true);
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
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
    <div className="Home">
      <div className={`max-w-custom container mx-auto px-5 md:px-8 xl:px-28`}>
        {isDesktop && (
          <CSSTransition
            in={openHelpScreen}
            timeout={300}
            classNames="help-screen"
            unmountOnExit
          >
            <HelpScreen closeScreen={handleCloseHelpScreen} />
          </CSSTransition>
        )}
        <div className="wrapper w-full flex-row-reverse justify-between md:mb-16 md:flex 2xl:mb-6">
          <SliderHome sliderRef={sliderRef} setActiveSlide={setActiveSlide} />

          <div className="intro__text-block md:h-min">
            <h2 className="mb-5 text-2xl font-black text-white xl:text-5xl 2xl:text-6xl">
              {t('THE NEW START OF')}
              <p className="blue font-normal">{t('VR LOCOMOTION')}</p>
            </h2>
            <p className="gray mb-2 text-base font-medium md:mb-3 2xl:mb-8 2xl:pl-24">
              <Trans i18nKey={'Discover'} components={{ br: <br /> }} />
            </p>
            <p className="mb-6 text-center text-lg font-medium leading-5 text-white md:text-left 2xl:mb-8 2xl:pl-24">
              1200$
            </p>
            <VideoButton
              className="mb-10 md:mb-0 2xl:ml-24"
              onClick={handleShowVideo}
            />
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
        {isDesktop && (
          <DesktopNav
            openHelpScreen={handleShowHelpScreen}
            prev={goToPrev}
            next={goToNext}
            activeSlide={activeSlide}
            sliderRef={sliderRef}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
