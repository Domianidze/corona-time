import { useContext } from 'react';

import axios from 'axios';

import { AuthContext } from 'state';

import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { Title } from 'components';
import { Input } from 'components';
import { Button } from 'components';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const SetPassword = () => {
  const { t } = useTranslation();

  const authCtx = useContext(AuthContext);

  const location = useLocation();
  const hash = location.search.replace('?hash=', '');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm({
    mode: 'onTouched',
  });

  const setPasswordHandler = handleSubmit(async (data) => {
    try {
      const requestData = {
        ...data,
        hash: hash,
      };

      await axios.post(`${REACT_APP_API_URL}/password/recover`, requestData, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      authCtx.onLogOut();
      navigate('/notification/update-password');
    } catch (err) {}
  });

  return (
    <form
      className='pt-32 w-full h-full flex flex-col items-center justify-between sm:pt-0 sm:justify-center'
      onSubmit={setPasswordHandler}
    >
      <div className='w-full sm:w-96'>
        <Title value={t('resetPassword')} className='text-center' />
        <Input
          type='password'
          label={t('newPasswordLabel')}
          placeholder={t('newPasswordPlaceholder')}
          id='password'
          className='pt-10'
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
          type='password'
          label={t('repeatPasswordLabel')}
          placeholder={t('repeatPasswordPlaceholder')}
          id='repeat-password'
          className='pb-10'
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
      </div>
      <Button type='submit' value={t('saveChanges')} id='set-password-button' />
    </form>
  );
};

export default SetPassword;
