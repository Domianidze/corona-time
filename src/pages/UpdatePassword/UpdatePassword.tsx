import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { SuccessBigIcon } from 'assets';

import { Button } from 'components';

const UpdatePassword = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='mb-14 flex flex-col justify-center items-center'>
        <img src={SuccessBigIcon} alt='success' />
        <p className='py-3 text-lg'>{t('updatePassword')}</p>
      </div>
      <Link
        to='/authentication/logIn'
        className='px-3 absolute bottom-0 left-0 w-full sm:static sm:px-0'
      >
        <Button type='button' value={t('signin')} />
      </Link>
    </div>
  );
};

export default UpdatePassword;
