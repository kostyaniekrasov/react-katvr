import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

function SliderAbout() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const { t } = useTranslation();

  const sliderRef = useRef(null);

  const settings = {
    className: 'mb-10 xl:mb-3',
    dots: !isDesktop,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setActiveSlide(newIndex);
    },
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="md:w-1/2">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img src="./img/slider/1.webp" alt="" />
        </div>
        <div>
          <img src="./img/slider/2.webp" alt=" " />
        </div>
        <div>
          <img src="./img/slider/3.webp" alt=" " />
        </div>
        <div>
          <img src="./img/slider/4.webp" alt=" " />
        </div>
        <div>
          <img src="./img/slider/5.webp" alt=" " />
        </div>
      </Slider>
      {isDesktop && (
        <div className="nav__slider flex w-min flex-col gap-1">
          <div className="flex justify-between">
            <button className="text-base font-medium" onClick={goToPrev}>
              {t('Prev')}
            </button>
            <button className="text-base font-medium" onClick={goToNext}>
              {t('Next')}
            </button>
          </div>
          <div className="custom-dots flex">
            {[...Array(5)].map((_, index) => (
              <button
                key={Array.length}
                className={`custom-dot ${activeSlide === index ? 'custom-dot--active' : ''}`}
                onClick={() => sliderRef.current.slickGoTo(index)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SliderAbout;
