import { Link } from 'react-router-dom';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import Button from 'components/Button';

const Login = () => {
  return (
    <div className='w-fit'>
      <WelcomeText
        main='Welcome back'
        secondary='Welcome back! Please enter your details'
      />
      <form>
        <Input
          label='Username'
          type='text'
          placeholder='Enter unique username or email'
          id='username'
        />
        <Input
          label='Password'
          type='password'
          placeholder='Fill in password'
          id='password'
        />
        <div className='w-96 flex justify-between items-center'>
          <CheckBox label='Remember this device' id='remember-device' />
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
