import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import Button from 'components/Button';

import { API_URL, SIGN_UP_CONFIRM_URL } from 'config/api';

const Signup = () => {
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
      const message = err?.response?.data[0]?.message;

      if (!message) {
        console.error(err);
        return;
      }

      if (message.includes('username')) {
        setError('username', {
          type: 'custom',
          message: 'Username must be unique',
        });
      }

      if (message.includes('email')) {
        setError('email', { type: 'custom', message: 'Email must be unique' });
      }
    }
  });

  return (
    <div className='w-fit'>
      <WelcomeText
        main='Welcome to Coronatime'
        secondary='Please enter required info to sign up'
      />
      <form onSubmit={signupHandler}>
        <Input
          label='Username'
          type='text'
          placeholder='Enter unique username'
          note='Username should be unique, min 3 symbols'
          id='username'
          register={{
            ...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username has to contain at least 3 symbols',
              },
            }),
          }}
          error={errors?.username?.message}
          isTouched={touchedFields?.username}
        />
        <Input
          label='Email'
          type='email'
          placeholder='Enter your email'
          id='email'
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
        <Input
          label='Password'
          type='password'
          placeholder='Fill in password'
          id='password'
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
          label='Repeat Password'
          type='password'
          placeholder='Repeat password'
          id='repeat-password'
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
        <Button type='submit' value='Sign Up' />
      </form>
      <p className='text-dark/60 text-center'>
        Already have an account?{' '}
        <Link to='/authentication/login' className='text-dark/100 font-bold'>
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
