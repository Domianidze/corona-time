import { useTranslation } from 'react-i18next';

import { SuccessBigIcon } from 'assets/img/icons';

const SendEmail = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='mb-14 flex justify-center items-center flex-col'>
        <img src={SuccessBigIcon} alt='success' />
        <p className='py-3 text-lg'>{t('sendEmail')}</p>
      </div>
    </div>
  );
};

export default SendEmail;
