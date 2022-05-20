import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

const ResetPassword = () => {
  return (
    <form>
      <Title value='Reset Password' className='text-center' />
      <Input
        type='email'
        label='Email'
        placeholder='Enter your email'
        id='email'
        classname='py-10'
      />
      <Button type='submit' value='Reset Password' />
    </form>
  );
};

export default ResetPassword;
