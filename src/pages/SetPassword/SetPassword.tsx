import { useContext } from 'react';

import axios from 'axios';

import AuthContext from 'store/AuthContext';

import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

import { API_URL } from 'config/api';

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

      await axios.post(`${API_URL}/password/recover`, requestData, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      authCtx.onLogout();
      navigate('/notification/update-password');
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <form onSubmit={setPasswordHandler}>
      <Title value={t('resetPassword')} className='text-center' />
      <Input
        type='password'
        label={t('newPasswordLabel')}
        placeholder={t('newPasswordPlaceholder')}
        id='password'
        classname='pt-10'
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
        classname='pb-10'
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
      <Button type='submit' value={t('saveChanges')} />
    </form>
  );
};

export default SetPassword;
