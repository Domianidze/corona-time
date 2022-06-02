import { Outlet } from 'react-router-dom';

import { LangSelect } from 'components';

import { LogoImg, CovidImg } from 'assets';

const Authentication = () => {
  return (
    <div className='relative w-full min-h-screen flex justify-center sm:block'>
      <div className='px-5 relative w-full sm:static py-7 sm:px-28 sm:max-w-none 2lg:w-1/2'>
        <img src={LogoImg} alt='logo' className='pb-6 sm:pb-14'></img>
        <LangSelect className='absolute top-7 right-0 z-10 sm:right-7' />
        <Outlet />
      </div>
      <img
        src={CovidImg}
        alt='covid'
        className='hidden absolute top-0 right-0 w-[40vw] h-full 2lg:block'
      ></img>
    </div>
  );
};

export default Authentication;
