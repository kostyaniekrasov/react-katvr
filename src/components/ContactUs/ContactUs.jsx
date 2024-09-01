import './ContactUs.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../../utils/variables';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const description = 'gray text-base font-normal md:text-left';

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const { t } = useTranslation();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let formErrors = { ...errors };

    if (!name.trim()) {
      setName(t('Name is required'));
      formErrors.name = true;
    }
    if (!email.trim()) {
      setEmail(t('Email is required'));
      formErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmail(t('Email is invalid'));
      formErrors.email = true;
    }
    if (!phone.trim()) {
      setPhone(t('Phone is required'));
      formErrors.phone = true;
    }
    if (!message.trim()) {
      setMessage(t('Message is required'));
      formErrors.message = true;
    }

    setErrors(formErrors);
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  return (
    <div className="Contact bg-ebony">
      <div className={`${Container} md:flex`}>
        <div className="block md:w-1/2">
          <div className="top md:mb-12">
            <p className="blue mb-3 text-sm font-normal">
              {t('Have any questions')}
            </p>
            <h3 className="mb-3 text-xl font-black text-white xl:text-4xl">
              {t('GET IN')}{' '}
              <p className="blue inline-block font-normal">{t('TOUCH')}</p>
            </h3>
          </div>
          {isTablet && (
            <p className={`${description} mb-16`}>{t('Our manager')}</p>
          )}
          {isTablet && (
            <div className="bottom">
              <p className={description}>+86-0571-86105373</p>
              <p className={description}>global@katvr.com</p>
              <p className={description}>overseas@katvr.com</p>
            </div>
          )}
        </div>
        <form onSubmit={handleFormSubmit} className="md:w-1/2">
          <div className="inputs mb-8 flex flex-col gap-6 md:mb-12 xl:mb-24">
            <div
              className={classNames('input__block flex flex-col', {
                'input__block--error': errors.name,
              })}
            >
              <label className="input--label" htmlFor="name">
                {t('Name')}
              </label>
              <input
                className="input"
                type="text"
                id="name"
                value={name}
                onChange={handleInputChange(setName, 'name')}
              />
            </div>
            <div
              className={classNames('input__block flex flex-col', {
                'input__block--error': errors.email,
              })}
            >
              <label className="input--label" htmlFor="email">
                {t('Email')}
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange(setEmail, 'email')}
              />
            </div>
            <div
              className={classNames('input__block flex flex-col', {
                'input__block--error': errors.phone,
              })}
            >
              <label className="input--label" htmlFor="tel">
                {t('Phone')}
              </label>
              <input
                className="input"
                type="tel"
                id="tel"
                value={phone}
                onChange={handleInputChange(setPhone, 'phone')}
              />
            </div>
            <div
              className={classNames('input__block flex flex-col', {
                'input__block--error': errors.message,
              })}
            >
              <label className="input--label" htmlFor="message">
                {t('Message')}
              </label>
              <textarea
                className="input"
                name="message"
                id="message"
                value={message}
                onChange={handleInputChange(setMessage, 'message')}
              ></textarea>
            </div>
          </div>
          <button className="button mb-8 md:mb-0 md:w-52" type="submit">
            {t('Contact Us')}
          </button>

          {isMobile && <p className={description}>{t('Our manager')}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
