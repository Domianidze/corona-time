import { useForm } from 'react-hook-form';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onTouched',
  });

  const resetPasswordHandler = handleSubmit((data) => {
    console.log(data);
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
