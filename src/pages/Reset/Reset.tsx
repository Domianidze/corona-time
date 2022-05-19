import { Outlet } from 'react-router-dom';

import LogoImg from 'assets/img/logo.png';

const Authentication = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute top-0 left-0 w-full h-32 flex justify-center items-center'>
        <img src={LogoImg} alt='logo'></img>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <Outlet />
      </div>
    </div>
  );
};

export default Authentication;
