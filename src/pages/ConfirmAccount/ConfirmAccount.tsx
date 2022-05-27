import { useEffect } from 'react';

import axios from 'axios';

import { Link, useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import SuccessImg from 'assets/img/icons/success-big.png';
import { Button } from 'components';

import { API_URL } from 'config/api';

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

        await axios.post(`${API_URL}/confirm-account`, requestData, {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      } catch (err) {
        console.error(err);
      }
    };

    confirmAccount();
  }, [hash]);

  return (
    <div>
      <div className='mb-14 flex justify-center items-center flex-col'>
        <img src={SuccessImg} alt='success' />
        <p className='py-3 text-lg max-w-sm text-center'>
          {t('confirmAccount')}
        </p>
      </div>
      <Link to='/authentication/login'>
        <Button type='button' value={t('signin')} />
      </Link>
    </div>
  );
};

export default ConfirmAccount;
