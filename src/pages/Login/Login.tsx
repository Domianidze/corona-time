import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import Button from 'components/Button';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onTouched',
  });

  const loginHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className='w-fit'>
      <WelcomeText
        main='Welcome back'
        secondary='Welcome back! Please enter your details'
      />
      <form onSubmit={loginHandler}>
        <Input
          label='Username'
          type='text'
          placeholder='Enter unique username or email'
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
          label='Password'
          type='password'
          placeholder='Fill in password'
          id='password'
          register={{
            ...register('password', {
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password has to containt at least 3 symbols',
              },
            }),
          }}
          error={errors?.password?.message}
          isTouched={touchedFields?.password}
        />
        <div className='w-96 flex justify-between items-center'>
          <CheckBox
            label='Remember this device'
            id='remember-device'
            register={{ ...register('rememberDevice') }}
          />
          <Link
            to='/reset/reset-password'
            className='text-sm font-semibold text-brand/primary'
          >
            Forgot Password?
          </Link>
        </div>
        <Button type='submit' value='Log In' />
      </form>
      <p className='text-dark/60 text-center'>
        Don't have an account?{' '}
        <Link to='/authentication/signup' className='text-dark/100 font-bold'>
          Sign up for free
        </Link>
      </p>
    </div>
  );
};

export default Login;
