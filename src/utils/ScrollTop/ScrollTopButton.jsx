import classNames from 'classnames';
import { useState, useEffect } from 'react';

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button onClick={scrollToTop}>
      <img
        src="/img/tablets/button-top.svg"
        className={classNames(
          'fixed bottom-20 right-32 cursor-pointer duration-300 hover:scale-110',
          {
            hidden: !isVisible,
          }
        )}
        alt="button-top"
      />
    </button>
  );
};
