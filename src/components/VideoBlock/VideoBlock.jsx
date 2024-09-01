import { useTranslation } from 'react-i18next';
import './VideoBlock.scss';

function VideoBlock({
  nodeRef,
  displayStyle,
  containerRef,
  handleShowVideo,
  src,
}) {
  const { t } = useTranslation();
  return (
    <div
      ref={nodeRef}
      style={{
        display: displayStyle,
      }}
      className={`video-container fixed inset-0 z-10 flex flex-col justify-center`}
    >
      <div
        className="max-w-custom container mx-auto px-5 md:px-8 xl:px-28"
        ref={containerRef}
      >
        <div className="video-block">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen="true"
          ></iframe>
        </div>
        <button className="button" onClick={handleShowVideo}>
          {t('Close Video')}
        </button>
      </div>
    </div>
  );
}
export default VideoBlock;
