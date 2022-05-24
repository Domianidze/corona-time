import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import SuccessImg from 'assets/img/icons/success-big.png';
import Button from 'components/Button';

const UpdatePassword = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='mb-14 flex justify-center items-center flex-col'>
        <img src={SuccessImg} alt='success' />
        <p className='py-3 text-lg'>{t('updatePassword')}</p>
      </div>
      <Link to='/authentication/login'>
        <Button type='button' value={t('newPasswordTitle')} />
      </Link>
    </div>
  );
};

export default UpdatePassword;
