import { useTranslation } from 'react-i18next';

import SuccessImg from 'assets/img/icons/success-big.png';

const SendEmail = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='mb-14 flex justify-center items-center flex-col'>
        <img src={SuccessImg} alt='success' />
        <p className='py-3 text-lg'>{t('sendEmail')}</p>
      </div>
    </div>
  );
};

export default SendEmail;
