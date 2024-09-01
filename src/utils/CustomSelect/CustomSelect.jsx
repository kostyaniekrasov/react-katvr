import { useState, useRef, useEffect } from 'react';
import './CustomSelect.scss';
import classNames from 'classnames';

export const CustomSelect = ({ options, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const optionsWithoutValue = options.filter(
    (option) => option.value !== value
  );

  return (
    <div
      className={classNames(`custom-select ${className}`, {
        'custom-select--open': isOpen,
      })}
      ref={dropdownRef}
    >
      <div
        className={classNames('custom-select__selected', {
          open: isOpen,
        })}
        onClick={toggleDropdown}
      >
        {value}
      </div>
      <div
        className={classNames('custom-select__options', {
          'custom-select__options--open': isOpen,
        })}
      >
        {optionsWithoutValue.map((option) => (
          <div
            key={option.value}
            className="custom-select__option"
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
