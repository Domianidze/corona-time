import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import Button from 'components/Button';

import { API_URL, SIGN_UP_CONFIRM_URL } from 'config/api';

const Signup = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
    setError,
  } = useForm({
    mode: 'onTouched',
  });

  const signupHandler = handleSubmit(async (data) => {
    try {
      const requestData = {
        ...data,
        redirectOnConfirm: SIGN_UP_CONFIRM_URL,
      };

      await axios.post(`${API_URL}/register`, requestData, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      navigate('/notification/send-email');
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
          message: t('usernameTaken'),
        });
      }

      if (message.includes('email')) {
        setError('email', { type: 'custom', message: t('emailTaken') });
      }
    }
  });

  return (
    <div className='w-fit'>
      <WelcomeText main={t('signupTitle')} secondary={t('signupParagraph')} />
      <form className='max-w-sm' onSubmit={signupHandler}>
        <Input
          label={t('signupUsernameLabel')}
          type='text'
          placeholder={t('signupUsernamePlaceholder')}
          note={t('signupUsernameNote')}
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
          label={t('emailLabel')}
          type='email'
          placeholder={t('emailPlaceholder')}
          id='email'
          register={{
            ...register('email', {
              required: t('emailRequired'),
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: t('emailValid'),
              },
            }),
          }}
          error={errors?.email?.message}
          isTouched={touchedFields?.email}
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
        <Input
          label={t('repeatPasswordLabel')}
          type='password'
          placeholder={t('repeatPasswordPlaceholder')}
          id='repeat-password'
          register={{
            ...register('repeatPassword', {
              required: t('repeatPasswordRequired'),
              validate: (value) => {
                return value === watch('password') || t('passwordsMatch');
              },
            }),
          }}
          error={errors?.repeatPassword?.message}
          isTouched={touchedFields?.repeatPassword}
        />
        <Button type='submit' value={t('signupButton')} id='signup-button' />
      </form>
      <p className='text-dark/60 text-center max-w-sm'>
        {t('alreadyHaveAccount')}{' '}
        <Link to='/authentication/login' className='text-dark/100 font-bold'>
          {t('login')}
        </Link>
      </p>
    </div>
  );
};

export default Signup;
