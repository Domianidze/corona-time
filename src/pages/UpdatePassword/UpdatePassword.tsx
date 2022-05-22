import { Link } from 'react-router-dom';

import SuccessImg from 'assets/img/icons/success-big.png';
import Button from 'components/Button';

const UpdatePassword = () => {
  return (
    <div>
      <div className='mb-14 flex justify-center items-center flex-col'>
        <img src={SuccessImg} alt='success' />
        <p className='py-3 text-lg'>
          Your password has been updated successfully
        </p>
      </div>
      <Link to='/authentication/login'>
        <Button type='button' value='Sign In' />
      </Link>
    </div>
  );
};

export default UpdatePassword;
