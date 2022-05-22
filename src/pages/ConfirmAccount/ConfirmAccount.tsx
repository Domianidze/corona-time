import { useEffect } from 'react';

import axios from 'axios';

import { Link, useLocation } from 'react-router-dom';

import SuccessImg from 'assets/img/icons/success-big.png';
import Button from 'components/Button';

import { API_URL } from 'config/api';

const ConfirmAccount = () => {
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
        <p className='py-3 text-lg'>
          Your account is confirmed, you can sign in
        </p>
      </div>
      <Link to='/authentication/login'>
        <Button type='button' value='Sign In' />
      </Link>
    </div>
  );
};

export default ConfirmAccount;
