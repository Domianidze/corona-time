import { useContext } from 'react';

import axios from 'axios';

import AuthContext from 'store/AuthContext';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import Button from 'components/Button';

import { API_URL } from 'config/api';

const Login = () => {
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

  const loginHandler = handleSubmit(async (data) => {
    try {
      const requestData = {
        username: data.username,
        password: data.password,
      };

      const response = await axios.post(`${API_URL}/login`, requestData, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const token = response.data.token;
      authCtx.onLogin(token, data.username, data.rememberDevice);

      navigate('/landing');
    } catch (err: any) {
      const error = err?.response?.data;

      if (!error) {
        console.error(err);
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
    <div className='w-fit'>
      <WelcomeText main={t('loginTitle')} secondary={t('loginParagraph')} />
      <form className='max-w-sm' onSubmit={loginHandler}>
        <Input
          label={t('loginUsernameLabel')}
          type='text'
          placeholder={t('loginUsernamePlaceholder')}
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
        <div className='w-96 flex justify-between items-center'>
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
        <Button type='submit' value={t('login')} id='login-button' />
      </form>
      <p className='text-dark/60 text-center max-w-sm'>
        {t('dontHaveAccount')}{' '}
        <Link
          to='/authentication/signup'
          className='text-dark/100 font-bold'
          id='signup-free-button'
        >
          {t('signupFree')}
        </Link>
      </p>
    </div>
  );
};

export default Login;
