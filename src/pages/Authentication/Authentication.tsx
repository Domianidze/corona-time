import { Outlet } from 'react-router-dom';

import LangSelect from 'components/LangSelect';

import LogoImg from 'assets/img/logo.png';
import CovidImg from 'assets/img/covid.png';

const Authentication = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='py-7 px-28'>
        <img src={LogoImg} alt='logo' className='pb-14'></img>
        <Outlet />
      </div>
      <img
        src={CovidImg}
        alt='covid'
        className='absolute top-0 right-0 h-full'
      ></img>
      <LangSelect className='absolute top-10 right-10 rounded-md' />
    </div>
  );
};

export default Authentication;
