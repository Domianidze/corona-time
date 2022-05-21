import { useForm } from 'react-hook-form';

import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

const SavePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm({
    mode: 'onTouched',
  });

  const setPasswordHandler = handleSubmit((data) => {
    console.log(data);
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
        label='Repeat password'
        placeholder='Repeat password'
        id='repeat-password'
        classname='pb-10'
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
      <Button type='submit' value='Save Changes' />
    </form>
  );
};

export default SavePassword;
