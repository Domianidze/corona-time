import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

import { API_URL, RECOVER_PASSWORD_URL } from 'config/api';

const ResetPassword = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onTouched',
  });

  const resetPasswordHandler = handleSubmit(async (data) => {
    try {
      const requestData = {
        email: data.email,
        backlink: RECOVER_PASSWORD_URL,
      };

      await axios.post(`${API_URL}/password/send-recovery-link`, requestData, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      navigate('/notification/send-email');
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <form onSubmit={resetPasswordHandler}>
      <Title value={t('resetPassword')} className='text-center' />
      <Input
        type='email'
        label={t('emailLabel')}
        placeholder={t('emailPlaceholder')}
        id='email'
        classname='py-10'
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
      <Button type='submit' value={t('resetPassword')} />
    </form>
  );
};

export default ResetPassword;
