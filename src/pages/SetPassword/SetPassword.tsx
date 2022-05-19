import Title from 'components/Title';
import Input from 'components/Input';
import Button from 'components/Button';

const SavePassword = () => {
  return (
    <form>
      <Title value='Reset Password' />
      <Input
        type='password'
        label='New password'
        placeholder='Enter new password'
        id='password'
        classname='pt-10'
      />
      <Input
        type='password'
        label='Repeat password'
        placeholder='Repeat password'
        id='repeat-password'
        classname='pb-10'
      />
      <Button type='submit' value='Save Changes' />
    </form>
  );
};

export default SavePassword;
