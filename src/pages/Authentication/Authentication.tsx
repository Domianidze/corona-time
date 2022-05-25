import { Outlet } from 'react-router-dom';

import LangSelect from 'components/LangSelect';

import LogoImg from 'assets/img/logo.png';
import CovidImg from 'assets/img/covid.png';

const Authentication = () => {
  return (
    <div className='relative w-full min-h-screen flex justify-center items-center sm:block'>
      <div className='relative max-w-sm sm:static py-7 sm:px-28 sm:max-w-none'>
        <img src={LogoImg} alt='logo' className='pb-14'></img>
        <LangSelect className='absolute top-7 right-0 rounded-md z-10 sm:right-7' />
        <Outlet />
      </div>
      <img
        src={CovidImg}
        alt='covid'
        className='hidden absolute top-0 right-0 h-full 2lg:block'
      ></img>
    </div>
  );
};

export default Authentication;
