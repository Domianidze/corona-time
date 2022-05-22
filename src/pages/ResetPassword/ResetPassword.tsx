import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

import { API_URL, RECOVER_PASSWORD_URL } from 'config/api';

const ResetPassword = () => {
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
      <Title value='Reset Password' className='text-center' />
      <Input
        type='email'
        label='Email'
        placeholder='Enter your email'
        id='email'
        classname='py-10'
        register={{
          ...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Email must be valid',
            },
          }),
        }}
        error={errors?.email?.message}
        isTouched={touchedFields?.email}
      />
      <Button type='submit' value='Reset Password' />
    </form>
  );
};

export default ResetPassword;
