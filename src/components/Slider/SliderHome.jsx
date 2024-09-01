import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SliderHome({ sliderRef, setActiveSlide }) {
  const settings = {
    className: 'mb-10',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setActiveSlide(newIndex);
    },
  };

  return (
    <div className="slider-max-h md:w-1/2 2xl:w-3/5">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img
            className="slider-max-h object-contain"
            src="./img/slider/home-1.webp"
            alt=""
          />
        </div>
        <div>
          <img
            className="slider-max-h object-contain"
            src="./img/slider/home-2.webp"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderHome;
