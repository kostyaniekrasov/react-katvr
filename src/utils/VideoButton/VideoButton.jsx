import { useTranslation } from 'react-i18next';
import './VideoButton.scss';

export const VideoButton = ({ onClick, className }) => {
  const { t } = useTranslation();

  return (
    <button className={className} onClick={onClick}>
      <div className="video-button">{t('Play Video')}</div>
    </button>
  );
};
