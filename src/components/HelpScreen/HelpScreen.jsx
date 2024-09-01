import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import './HelpScreen.scss';

function HelpScreen({ closeScreen }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeScreen();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, closeScreen]);

  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-sky-950 bg-opacity-40">
      <div
        className="bg-ebony container max-w-3xl px-16 pb-16 pt-7"
        ref={containerRef}
      >
        <div className="mb-6 flex justify-end">
          <button onClick={closeScreen}>
            <img src="./img/close.svg" className="cursor-pointer" alt="close" />
          </button>
        </div>
        <h3 className="mb-8 inline-block text-xl font-black text-white">
          {t('HOW CAN WE')}{' '}
          <span className="blue inline-block font-normal">{t('HELP')}</span>{' '}
          {t('YOU')}
        </h3>
        <p className="gray mb-8 text-sm font-normal">
          {t('Welcome to our help')}
          <span className="blue">{t('FAQs')}</span>.
        </p>
        <p className="gray mb-8 text-sm font-normal">
          {'Please also'}
          <span className="blue"> {t('Contact Us')}</span> {'directly should'}
        </p>
        <nav className="mb-8 flex flex-col gap-5">
          <p className="blue text-sm font-normal">{t('Instruction manual')}l</p>
          <p className="blue text-sm font-normal">
            {t('Where to go for a warranty')}
          </p>
          <p className="blue text-sm font-normal">{t('Service Policy')}</p>
        </nav>
        <div className="info flex flex-col gap-3">
          <p className="gray text-sm font-normal">+86-0571-86105373</p>
          <p className="gray text-sm font-normal">global@katvr.com</p>
          <p className="gray text-sm font-normal">overseas@katvr.com</p>
        </div>
      </div>
    </div>
  );
}

export default HelpScreen;
