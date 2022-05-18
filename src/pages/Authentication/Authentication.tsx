import { Outlet } from 'react-router-dom';

import LogoImg from 'assets/img/logo.png';
import CovidImg from 'assets/img/covid.png';

const Authentication = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className='py-10 px-28'>
        <img src={LogoImg} alt='logo' className='pb-14'></img>
        <Outlet />
      </div>
      <img
        src={CovidImg}
        alt='covid'
        className='absolute top-0 right-0 h-full'
      ></img>
    </div>
  );
};

export default Authentication;
