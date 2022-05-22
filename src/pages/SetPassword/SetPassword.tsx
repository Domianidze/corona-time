import { useContext } from 'react';

import axios from 'axios';

import AuthContext from 'store/AuthContext';

import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

import { API_URL } from 'config/api';

const SetPassword = () => {
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
      <Title value='Reset Password' className='text-center' />
      <Input
        type='password'
        label='New password'
        placeholder='Enter new password'
        id='password'
        classname='pt-10'
        register={{
          ...register('password', {
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password has to contain at least 3 symbols',
            },
          }),
        }}
        error={errors?.password?.message}
        isTouched={touchedFields?.password}
      />
      <Input
        type='password'
        label=' password'
        placeholder='Repeat password'
        id='repeat-password'
        classname='pb-10'
        register={{
          ...register('repeatPassword', {
            required: 'Repeating password is required',
            validate: (value) => {
              return value === watch('password') || 'Passwords must match';
            },
          }),
        }}
        error={errors?.repeatPassword?.message}
        isTouched={touchedFields?.repeatPassword}
      />
      <Button type='submit' value='Save Changes' />
    </form>
  );
};

export default SetPassword;
