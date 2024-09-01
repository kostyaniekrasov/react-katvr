import classNames from 'classnames';

function LanguageScreen({ closeMenu }) {
  return (
    <div
      className={classNames(
        'LanguageScreen menu fixed inset-0 z-20 transform py-4 transition-transform duration-300',
        {
          // 'translate-x-0': showMenu,
          // 'translate-x-full': !showMenu,
        }
      )}
    >
      <div className="control mb-6 flex justify-between px-5">
        <img className="cursor-pointer" src="/img/back.svg" alt="back" />
      </div>
    </div>
  );
}

export default LanguageScreen;
