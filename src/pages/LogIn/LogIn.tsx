import { useContext } from 'react';

import axios from 'axios';

import { AuthContext } from 'state';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { WelcomeText } from 'components';
import { Input } from 'components';
import { CheckBox } from 'components';
import { Button } from 'components';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const LogIn = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setError,
  } = useForm({
    mode: 'onTouched',
  });

  const logInHandler = handleSubmit(async (data) => {
    try {
      const requestData = {
        username: data.username,
        password: data.password,
      };

      const response = await axios.post(
        `${REACT_APP_API_URL}/logIn`,
        requestData,
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      const token = response.data.token;
      authCtx.onLogIn(token, data.username, data.rememberDevice);

      navigate('/landing');
    } catch (err: any) {
      const error = err?.response?.data;

      if (!error) {
        return;
      }

      const message = error[0].message;

      if (message.includes('username')) {
        setError('username', {
          type: 'custom',
          message: t('usernameNoUser'),
        });
      }

      if (message.includes('credentials')) {
        setError('password', {
          type: 'custom',
          message: t('passwordInvalid'),
        });
      }
    }
  });

  return (
    <div className='w-fit max-w-full'>
      <WelcomeText main={t('logInTitle')} secondary={t('logInParagraph')} />
      <form className='max-w-full sm:max-w-sm' onSubmit={logInHandler}>
        <Input
          label={t('logInUsernameLabel')}
          type='text'
          placeholder={t('logInUsernamePlaceholder')}
          id='username'
          register={{
            ...register('username', {
              required: t('usernameRequired'),
              minLength: {
                value: 3,
                message: t('usernameMinLength'),
              },
            }),
          }}
          error={errors?.username?.message}
          isTouched={touchedFields?.username}
        />
        <Input
          label={t('passwordLabel')}
          type='password'
          placeholder={t('passwordPlaceholder')}
          id='password'
          register={{
            ...register('password', {
              required: t('passwordRequired'),
              minLength: {
                value: 3,
                message: t('passwordMinLength'),
              },
            }),
          }}
          error={errors?.password?.message}
          isTouched={touchedFields?.password}
        />
        <div className='w-96 max-w-full flex justify-between items-center'>
          <CheckBox
            label={t('rememberDevice')}
            id='remember-device'
            register={{ ...register('rememberDevice') }}
          />
          <Link
            to='/reset/reset-password'
            className='text-sm font-semibold text-brand/primary text-right'
            id='forgot-password-button'
          >
            {t('forgotPassword')}
          </Link>
        </div>
        <Button type='submit' value={t('logIn')} id='logIn-button' />
      </form>
      <p className='text-dark/60 text-center max-w-sm'>
        {t('dontHaveAccount')}{' '}
        <Link
          to='/authentication/signUp'
          className='text-dark/100 font-bold'
          id='signUp-free-button'
        >
          {t('signUpFree')}
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
