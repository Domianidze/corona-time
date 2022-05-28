import { Outlet } from 'react-router-dom';

import { LangSelect } from 'components';

import LogoImg from 'assets/img/logo.png';
import CovidImg from 'assets/img/covid.png';

const Authentication = () => {
  return (
    <div className='relative w-full min-h-screen flex justify-center items-center overflow-hidden sm:block'>
      <div className='px-5 relative w-full sm:static py-7 sm:px-28 sm:max-w-none 2l:w-1/2'>
        <img src={LogoImg} alt='logo' className='pb-14'></img>
        <LangSelect className='absolute top-7 right-0 z-10 sm:right-7' />
        <Outlet />
      </div>
      <img
        src={CovidImg}
        alt='covid'
        className='hidden absolute top-0 right-0 w-1/2 h-auto 2lg:block'
      ></img>
    </div>
  );
};

export default Authentication;
