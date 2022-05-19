import { Link } from 'react-router-dom';

import WelcomeText from 'components/WelcomeText';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import Button from 'components/Button';

const Signup = () => {
  return (
    <div className='w-fit'>
      <WelcomeText
        main='Welcome to Coronatime'
        secondary='Please enter required info to sign up'
      />
      <form>
        <Input
          label='Username'
          type='text'
          placeholder='Enter unique username'
          note='Username should be unique, min 3 symbols'
          id='username'
        />
        <Input
          label='Email'
          type='email'
          placeholder='Enter your email'
          id='email'
        />
        <Input
          label='Password'
          type='password'
          placeholder='Fill in password'
          id='password'
        />
        <Input
          label='Repeat Password'
          type='password'
          placeholder='Repeat password'
          id='repeat-password'
        />
        <CheckBox label='Remember this device' id='remember-device' />
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
