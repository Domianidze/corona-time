import { Outlet } from 'react-router-dom';

import { LangSelect } from 'components';

import LogoImg from 'assets/img/logo.png';

const Notification = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute pl-10 top-0 left-0 w-full h-32 flex items-center md:justify-center'>
        <img src={LogoImg} alt='logo'></img>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <Outlet />
      </div>
      <LangSelect className='absolute top-11 right-11 rounded-md md:top-10 md:right-10' />
    </div>
  );
};

export default Notification;
