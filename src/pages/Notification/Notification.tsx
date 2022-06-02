import { Outlet } from 'react-router-dom';

import { LangSelect } from 'components';

import { LogoImg } from 'assets';

const Notification = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute px-5 top-0 left-0 w-full h-32 flex items-center justify-between md:pl-10 md:justify-center'>
        <img src={LogoImg} alt='logo'></img>
        <LangSelect className='top-11 right-11 md:absolute md:top-10 md:right-10' />
      </div>
      <div className='px-3 w-full h-full flex justify-center items-center text-center'>
        <Outlet />
      </div>
    </div>
  );
};

export default Notification;
