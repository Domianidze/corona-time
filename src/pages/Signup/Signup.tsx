import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import Button from 'components/Button';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm({
    mode: 'onTouched',
  });

  const signupHandler = handleSubmit((data) => {
    console.log(data);
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
            ...register('confirmPassword', {
              required: 'Repeating password is required',
              validate: (value) => {
                return value === watch('password') || 'Passwords must match';
              },
            }),
          }}
          error={errors?.confirmPassword?.message}
          isTouched={touchedFields?.confirmPassword}
        />
        <CheckBox
          label='Remember this device'
          id='remember-device'
          register={{
            ...register('rememberDevice'),
          }}
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
