import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { Title, Input, Button } from 'components';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const REACT_APP_FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

const ResetPassword = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setError,
  } = useForm({
    mode: 'onTouched',
  });

  const resetPasswordHandler = handleSubmit(async (data) => {
    try {
      const requestData = {
        email: data.email,
        backlink: `${REACT_APP_FRONTEND_URL}/reset/set-password`,
      };

      await axios.post(
        `${REACT_APP_API_URL}/password/send-recovery-link`,
        requestData,
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      navigate('/notification/send-email');
    } catch (err: any) {
      const error = err?.response?.data;

      if (!error) {
        return;
      }

      setError('email', {
        type: 'custom',
        message: t('emailNoUser'),
      });
    }
  });

  return (
    <form
      className='pt-32 w-full h-full flex flex-col items-center justify-between sm:pt-0 sm:justify-center'
      onSubmit={resetPasswordHandler}
    >
      <div className='w-full sm:w-96'>
        <Title value={t('resetPassword')} className='text-center' />
        <Input
          type='email'
          label={t('emailLabel')}
          placeholder={t('emailPlaceholder')}
          id='email'
          className='py-10'
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
      </div>
      <Button
        type='submit'
        value={t('resetPassword')}
        id='reset-password-button'
      />
    </form>
  );
};

export default ResetPassword;
