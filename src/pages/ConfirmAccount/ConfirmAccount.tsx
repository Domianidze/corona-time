import { useEffect } from 'react';

import axios from 'axios';

import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { SuccessBigIcon } from 'assets';
import { Button } from 'components';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const ConfirmAccount = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const hash = location.search.replace('?hash=', '');

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const requestData = {
          hash,
        };

        await axios.post(`${REACT_APP_API_URL}/confirm-account`, requestData, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      } catch (err) {}
    };

    confirmAccount();
  }, [hash]);

  return (
    <div>
      <div className='mb-14 flex flex-col justify-center items-center'>
        <img src={SuccessBigIcon} alt='success' />
        <p className='py-3 text-lg max-w-sm text-center'>
          {t('confirmAccount')}
        </p>
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

export default ConfirmAccount;
